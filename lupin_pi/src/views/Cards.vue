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
          <form @submit.prevent="postNew()" class="form-inline mb-5">
            <label for="newImageUrl">Image URL:</label>
            <input
              v-model="newImageUrl"
              class="form-control me-2"
              type="text"
              id="newImageUrl"
              style="margin-top: 5px"
            />
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
            <button
              class="btn btn-outline-dark center"
              type="submit"
              style="height: 40px; margin-top: 5px; width: 70px"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-12 col-12">
          <card
            v-for="karte in filteredCards"
            :key="karte.url"
            :slika="karte"
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
  height: calc(100vh / 1.7);
}
</style>

<script>
// @ is an alias to /src
import navbarbuyer from "@/components/navbarbuyer.vue";
import footerapp from "@/components/footerapp.vue";
import card from "@/components/card.vue";
import store from "@/store.js";
import { db } from "@/firebase.js";

/* proizvod = [
  {
    url: "https://picsum.photos/id/2/400/400",
    naziv: "Mickey Mantle 1952",
    cijena: "5.2 mil $",
    proizvodac: "Topps",
  },
  {
    url: "https://picsum.photos/id/1/400/400",
    naziv: "Luka Doncic 2018/19 Logoman 1/1",
    cijena: "4.6 mil $",
    proizvodac: "Panini",
  },
  {
    url: "https://picsum.photos/id/3/400/400",
    naziv: "Giannis Antetokounmpo 2013/2014",
    cijena: "1.8 mil $",
    proizvodac: "Panini",
  },
];*/

export default {
  name: "Cards",
  data: function () {
    return {
      proizvod: [],
      store,
      newImageUrl: "",
      newnaziv: "",
      newproizvodac: "",
      newcijena: "",
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("firebase dohvat");
    },
    postNew() {
      const imageUrl = this.newImageUrl;
      const imagenaziv = this.newnaziv;
      const imageproizvodac = this.newproizvodac;
      const imagecijena = this.newcijena;
      db.collection("proizvodi")
        .add({
          url: imageUrl,
          desc: imagenaziv,
          manufacturer: imageproizvodac,
          price: imagecijena,
          email: store.currentUser,
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newImageUrl = "";
          this.newnaziv = "";
          this.newproizvodac = "";
          this.newcijena = "";
        })
        .catch((error) => {
          console.error("Greska", error);
        });
    },
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      let newCards = [];
      for (let karte of this.proizvod) {
        if (
          karte.naziv.toLowerCase().indexOf(termin.toLowerCase()) >= 0 ||
          karte.proizvodac.toLowerCase().indexOf(termin.toLowerCase()) >= 0
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
