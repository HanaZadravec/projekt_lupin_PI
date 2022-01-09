<template>
  <div class="col-md-12" style="margin-top: 20px">
    <div class="card">
      <img :src="slika.url" class="card-img-top" style="margin: auto" />
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h6 class="card-title">
              {{ slika.description }}
            </h6>
            <p class="card-text">{{ slika.manufacturer }}</p>
            <p>{{ slika.price }}</p>
          </div>
          <div class="col-md-6">
            <span style="font-size: 130%; margin-right: 15px"
              ><b>Time remaining:</b></span
            >
            <vue-countdown-timer
              :start-time="new Date().getTime()"
              :end-time="this.slika.date"
              :interval="1000"
              :end-text="'Auction is over!'"
              :seconds-txt="'seconds'"
              :minutes-txt="'minutes'"
              :day-txt="'days'"
              :hour-txt="'hours'"
              style="display: inline-block; font-size: 110%"
            >
            </vue-countdown-timer>
            <div style="font-size: 130%; margin-right: 15px">
              <b>Best offer:</b>
            </div>
            <div style="font-size: 130%; margin-right: 15px">
              <b>Buy now price:</b>
              {{ slika.price }}
            </div>
            <button
              @click="brisanje"
              class="btn btn-outline-dark w-70"
              type="button"
              style="height: 40px; margin-top: 15px"
            >
              Buy Now
            </button>
            <form style="margin-top: 15px">
              <input
                v-model="cijena"
                class="form-control me-2 center"
                type="number"
                id="newnaziv"
                style="margin-top: 5px; width: 300px"
                placeholder="Make an offer..."
                min="1"
              />
              <button
                @click="dodavanjecijene"
                class="btn btn-outline-dark center w-70"
                type="button"
                style="height: 40px; margin-top: 15px"
              >
                Make an offer
              </button>
            </form>
          </div>
          <div
            class="col-md-12"
            style="
              border-style: solid;
              border-width: 2px;
              border-color: black;
              margin-top: 75px;
            "
          >
            {{ slika.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
export default {
  props: ["slika"],
  name: "card",
  data() {
    return {
      cijena: null,
      bidd: [],
      fullbidd: [],
      buynow: this.slika.price,
      product: this.slika.description,
      product_id: this.slika.id,
      useremail: this.slika.email,
    };
  },
  methods: {
    async dodavanjecijene() {
      try {
        const buyNow = this.buynow;
        const proizvod = this.product;
        const id = this.product_id;
        const user = this.useremail;
        const bidd = this.cijena;
        var max = Math.max.apply(
          null,
          this.bidd.map(function (item) {
            return item.offer;
          })
        );
        if (this.cijena > this.slika.price && this.cijena > max) {
          let doc = await db.collection("offers").add({
            id: id,
            buynowprice: buyNow,
            offer: bidd,
            user: user,
            product: proizvod,
          });

          console.log("Spremljeno", doc);
          this.getoffers();
        } else {
          console.log("premali offer");
        }
      } catch (e) {
        console.error("Greška", e);
      }
    },
    getoffers() {
      console.log(this.bidd);

      db.collection("offers")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            if (this.cijena > this.slika.price && this.cijena > max) {
              const data = doc.data();

              this.bidd.push({
                id: doc.id,
                user: data.user,
                buyNow: data.buynowprice,
                offer: data.offer,
                product: data.product,
              });
            } else {
              console.log("premala ponuda");
            }
          });
        });

      var max = Math.max.apply(
        null,
        this.bidd.map(function (item) {
          return item.offer;
        })
      );

      console.log("max", max);
    },
    brisanje() {
      let groupBy = (array, key) => {
        return array.reduce((result, obj) => {
          (result[obj[key]] = result[obj[key]] || []).push(obj);
          return result;
        }, {});
      };
      let a = groupBy(this.bidd, "product_id");
      console.log(a);
    },
  },
};
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
