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
            <b>Products signed by celebrities</b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-12 col-12">
          <card v-for="karte in filteredCards" :key="karte.id" :slika="karte" />

          <div class="col-md-3">
            <div class="col-md-4 tag-container"></div>
          </div>
        </div>
      </div>
    </div>

    <footerapp />
  </div>
</template>

<script>
import navbarbuyer from "@/components/navbarbuyer.vue";
import footerapp from "@/components/footerapp.vue";
import card from "@/components/card.vue";
import store from "@/store.js";
import { db } from "@/firebase.js";

export default {
  name: "ProductsSignedByCelebrities",

  data() {
    return {
      proizvod: [],
      store,
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
            if (data.typeofproduct == "Productssignedbycelebrities")
              this.proizvod.push({
                id: doc.id,
                description: data.desc,
                typeofproduct: data.typeofproduct,
                manufacturer: data.manufacturer,
                price: data.price,
                startingbidd: data.startingbidd,
                url: data.url,
                time: data.posted_at,
                date: data.date,
                productdesc: data.productdesc,
              });
          });
        });
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
