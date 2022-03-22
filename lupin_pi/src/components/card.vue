<template>
  <div class="col-md-12" style="margin-top: 20px">
    <div v-if="this.usporedba() == true" class="card">
      <img :src="slika.url" class="card-img-top" style="margin: auto" />
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h4 class="card-title">
              {{ slika.description }}
            </h4>
            <p class="card-text" style="font-size: 19px; color: #70736b">
              {{ slika.manufacturer }}
            </p>
            <p style="font-size: 19px">Ordered!!!!</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="card">
      <img :src="slika.url" class="card-img-top" style="margin: auto" />
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-title">
              {{ slika.description }}
            </h5>
            <p class="card-text" style="font-size: 19px; color: #70736b">
              {{ slika.manufacturer }}
            </p>
            <p style="font-size: 18px">
              <b>Starting bidd :</b> {{ slika.startingbidd }}$
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
            <div style="margin-right: 15px">
              <b style="font-size: 130%">Best offer:</b>
              <span
                style="margin-left: 8px"
                class="card-text"
                v-for="data in this.offers"
                :key="data.id"
              >
                <b>{{ data.offer }} $</b>
                {{ data.email }}
              </span>
            </div>
            <div style="font-size: 130%; margin-right: 15px">
              <b>Buy now price:</b>
              {{ slika.price }}$
            </div>
            <buyNow
              v-if="
                this.done && Number(this.maxbidd) < Number(this.slika.price)
              "
              :name="this.slika.description"
              :price="this.slika.price"
              :id="this.slika.time"
              :url="this.slika.url"
            />
            <form style="margin-top: 15px">
              <input
                v-if="this.done"
                v-model="cijena"
                class="form-control me-2 center"
                type="number"
                style="margin-top: 5px; width: 300px"
                placeholder="Make an offer..."
                :min="this.slika.startingbidd"
              />

              <button
                v-if="this.done"
                @click="postOffer()"
                class="btn btn-outline-dark center w-70"
                type="button"
                style="height: 40px; margin-top: 15px"
              >
                Make an offer
              </button>

              <AddToCart
                v-if="!this.done && this.winner"
                :name="this.slika.description"
                :price="this.maxbidd"
                :id="this.slika.time"
                :url="this.slika.url"
              />
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
            {{ slika.productdesc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import store from "@/store.js";
import AddToCart from "@/components/AddToCart.vue";
import buyNow from "@/components/buyNow.vue";

export default {
  props: ["slika"],
  name: "card",
  components: {
    AddToCart,
    buyNow,
  },
  data() {
    return {
      cijena: null,
      offers: [],
      maxbidd: null,
      maxuser: "",
      winner: false,
      done: true,
      orders: [],
      store,
    };
  },

  methods: {
    getOrders() {
      console.log("firebase dohvat");
      db.collection("orders")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            this.orders.push({
              id: data.id,
              email: data.user,
              name: data.product,
            });
          });
        });
    },
    usporedba() {
      for (let i = 0; i < JSON.parse(JSON.stringify(this.orders.length)); i++) {
        for (
          let j = 0;
          j < JSON.parse(JSON.stringify(this.orders[i].id.length));
          j++
        ) {
          if (this.slika.time == this.orders[i].id[j]) {
            console.log(this.slika.time);
            return true;
          }
        }
      }
    },
    endCallBack() {
      if (store.currentUser === this.maxuser) {
        console.log("pobjednik", this.slika.description);
        this.winner = true;
      }
      this.done = false;
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
          Number(this.cijena) > Number(this.slika.startingbidd) &&
          Number(this.cijena) > Number(this.maxbidd)
        ) {
          let doc = await db
            .collection("proizvodi")
            .doc(this.slika.id)
            .collection("offers")
            .add({
              user: store.currentUser,
              offer: Number(this.cijena),
            });
          console.log("Spremljeno", doc);

          this.getOffers();
        } else {
          console.log("premali offer");
          alert("premali offer" + this.maxbidd + this.slika.startingbidd);
          console.log(typeof this.cijena);
          console.log(typeof this.maxbidd);
          console.log(typeof this.slika.startingbidd);
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
            this.maxbidd = Number(data.offer);
            console.log(this.maxuser);
            this.offers.push({
              offer: Number(data.offer),
              email: data.user,
            });
          });
        });
    },
  },
  mounted() {
    this.getOffers();
    this.getOrders();
    this.usporedba();
  },
};
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card-img-top {
  width: 50%;
  height: 31vh;
  object-fit: contain;
}
</style>
