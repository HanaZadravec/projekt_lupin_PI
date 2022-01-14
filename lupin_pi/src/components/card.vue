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
            <p>Pocetni bidd : {{ slika.startingbidd }}</p>
            <p class="card-text" v-for="data in this.offers" :key="data.id">
              <b>{{ data.offer }} $</b>
              {{ data.email }}
            </p>
          </div>
          <div class="col-md-6">
            <span style="font-size: 130%; margin-right: 15px"
              ><b>Time remaining:</b></span
            >
            <vue-countdown-timer
              @end_callback="endCallBack()"
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
                @click="postOffer()"
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
import store from "@/store.js";
export default {
  props: ["slika"],
  name: "card",
  data() {
    return {
      cijena: "",
      offers: [],
      maxbidd: "",
      maxuser: "",
    };
  },
  methods: {
    endCallBack() {
      if (store.currentUser === this.maxuser) {
        console.log("pobjednik", this.slika.description);
      }
    },
    async postOffer() {
      for (let i = 0; i < this.offers.length; i++) {
        this.maxbidd = this.offers[0].offer;
        if (this.maxbidd < this.offers[i].offer) {
          this.maxbidd = this.offers[i].offer;
        }

        console.log(this.maxbidd);
      }

      try {
        if (
          this.cijena > this.slika.startingbidd &&
          this.cijena > this.maxbidd
        ) {
          let doc = await db
            .collection("proizvodi")
            .doc(this.slika.id)
            .collection("offers")
            .add({
              user: store.currentUser,
              offer: this.cijena,
            });
          console.log("Spremljeno", doc);

          this.getOffers();
        } else {
          console.log("premali offer");
          alert("premali offer");
          console.log(this.maxuser);
        }
      } catch (e) {
        console.error("Greška", e);
      }

      this.cijena = "";
    },
    getOffers() {
      db.collection("proizvodi")
        .doc(this.slika.id)
        .collection("offers")
        .orderBy("offer", "desc")
        .limit(1)
        .get()
        .then((query) => {
          this.offers = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.maxuser = data.user;
            console.log(this.maxuser);
            this.offers.push({
              offer: data.offer,
              email: data.user,
            });
          });
        });
    },
  },
  mounted() {
    this.getOffers();
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
