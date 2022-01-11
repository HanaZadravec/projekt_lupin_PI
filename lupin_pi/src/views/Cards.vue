<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1
            style="
              margin-top: 15px;
              margin-bottom: 20px;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 55px;
            "
          >
            <b>Cards</b>
          </h1>
          <form
            v-if="!loading"
            @submit.prevent="postNew()"
            class="form-inline mb-5"
          >
            <croppa
              :width="250"
              :height="250"
              v-model="imageReference"
              placeholder="upload image"
            ></croppa>
            <label for="newnaziv">Naziv</label>
            <input
              v-model="newnaziv"
              class="form-control me-2"
              type="text"
              id="newnaziv"
              style="margin-top: 5px"
            />
            <label for="newproizvodac">Manufacturer</label>
            <input
              v-model="newproizvodac"
              class="form-control me-2"
              type="text"
              id="newproizvodac"
              style="margin-top: 5px"
            />
            <label for="newcijena">Price</label>
            <input
              v-model="newcijena"
              class="form-control me-2"
              type="text"
              id="newcijena"
              style="margin-top: 5px"
            />
            <label for="duedate">Due date</label>
            <input
              v-model="duedate"
              class="form-control me-2"
              type="text"
              id="duedate"
              style="margin-top: 5px"
            />
            <button
              class="btn btn-outline-dark center"
              type="submit"
              style="height: 40px; margin-top: 5px; width: 70px"
            >
              Post
            </button>
          </form>
          <img
            class="loading center"
            v-if="loading"
            :src="require('@/assets/loading.gif')"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-12 col-12">
          <card
            v-for="karte in filteredCards"
            :key="karte.id"
            :slika="karte"
            @alert="sayHi"
            v-on:cijena="sayHi($event)"
            v-on:id="sayby($event)"
          />

          <div class="col-md-3">
            <div class="col-md-4 tag-container"></div>
          </div>
        </div>
      </div>
    </div>

    <footerapp />
  </div>
</template>

<style>
.card-img-top {
  width: 100%;
  height: 31vh;
  object-fit: contain;
}
.card {
  height: calc(100vh / 1);
}
</style>

<script>
// @ is an alias to /src
import navbarbuyer from "@/components/navbarbuyer.vue";
import footerapp from "@/components/footerapp.vue";
import card from "@/components/card.vue";
import store from "@/store.js";
import { db, storage } from "@/firebase.js";

export default {
  name: "Cards",
  data() {
    return {
      proizvod: [],
      offers: [],
      store,
      newImageUrl: "",
      newnaziv: "",
      newproizvodac: "",
      newcijena: "",
      duedate: "",
      imageReference: null,
      loading: false,
      fromChild: "",
      id: "",
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("firebase dohvat");

      db.collection("proizvodi")
        .orderBy("posted_at", "desc")
        .get()
        .then((query) => {
          this.proizvod = [];
          query.forEach((doc) => {
            const data = doc.data();

            this.proizvod.push({
              id: doc.id,
              description: data.desc,
              email: data.email,
              manufacturer: data.manufacturer,
              price: data.price,
              url: data.url,
              time: data.posted_at,
              date: data.date,
            });
          });
        });
    },

    getImage() {
      return new Promise((resolveFn, errorFn) => {
        this.imageReference.generateBlob((data) => {
          resolveFn(data);
        });
      });
    },
    async postNew() {
      try {
        this.loading = true;
        let blobData = await this.getImage();
        let imageName =
          "posts/" + store.currentUser + "/" + Date.now() + ".png";
        let result = await storage.ref(imageName).put(blobData);
        let url = await result.ref.getDownloadURL(); // Promise

        const imagenaziv = this.newnaziv;
        const imageproizvodac = this.newproizvodac;
        const imagecijena = this.newcijena;

        let doc = await db.collection("proizvodi").add({
          url: url,
          desc: imagenaziv,
          manufacturer: imageproizvodac,
          price: imagecijena,
          email: store.currentUser,
          posted_at: Date.now(),
          date: new Date(this.duedate).getTime(),
        });
        console.log("Spremljeno", doc);

        this.getPosts();
      } catch (e) {
        console.error("Greška", e);
      }
      this.loading = false;
    },
    async sayHi(value) {
      try {
        let doc = await db
          .collection("proizvodi")
          .doc(this.sayby(value))
          .collection("offers")
          .add({
            user: store.currentUser,
            offer: value,
          });
        console.log("Spremljeno", doc);

        this.getOffers();
      } catch (e) {
        console.error("Greška", e);
      }
      console.log(value);
      console.log("Hi");
    },
    getOffers() {
      console.log("firebase dohvat");
      db.collection("proizvodi")
        .doc(this.sayby(value))
        .collection("offers")
        .get()
        .then((query) => {
          this.offers = [];
          query.forEach((doc) => {
            const data = doc.data();

            this.offers.push({
              offer: data.offer,
              email: data.email,
            });
          });
        });
    },
    sayby(id) {
      console.log(id);
    },
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      let newCards = [];
      for (let karte of this.proizvod) {
        if (
          karte.description.toLowerCase().indexOf(termin.toLowerCase()) >= 0 ||
          karte.manufacturer.toLowerCase().indexOf(termin.toLowerCase()) >= 0
        ) {
          newCards.push(karte);
        }
        console.log(newCards);
      }
      return newCards;
    },
  },

  components: {
    navbarbuyer,
    footerapp,
    card,
  },
};
</script>

<style scoped>
.loading {
  width: 400px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
