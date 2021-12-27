<template>
  <div>
    <navbarbuyer />
    <multiselect
      v-model="value"
      :options="options"
      :options-limit="4"
      track-by="name"
      label="name"
      placeholder="Search for a product.."
    ></multiselect>
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
            <b>Sculptures</b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/alien2face.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Alien 2Face</h5>
              <p class="card-text">Leo Labelle</p>
              <p>7 700 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/lespompesdeclaire.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Les Pompes de Claire</h5>
              <p class="card-text">César Baldaccini</p>
              <p>442 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/ornuteros.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Ornuteros</h5>
              <p class="card-text">Philippe Hiquily</p>
              <p>191 500 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/visage.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Visage Brun-Bleu</h5>
              <p class="card-text">Pablo Picasso</p>
              <p>35 000 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/revolvingkiddushcup.jpg"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Revolving Kiddush Cup</h5>
              <p class="card-text">Yaacov Agam</p>
              <p>1 750 $</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6" style="margin-top: 20px">
          <div class="card">
            <img
              src="@/assets/meltingDOB.png"
              class="card-img-top"
              style="margin: auto"
            />
            <div class="card-body">
              <h5 class="card-title">Melting DOB</h5>
              <p class="card-text">Takashi Murakami</p>
              <p>6 200 $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerapp />
  </div>
</template>

<script>
// @ is an alias to /src
import navbarbuyer from "@/components/navbarbuyer.vue";
import footerapp from "@/components/footerapp.vue";
import Multiselect from "vue-multiselect";
export default {
  name: "Sculptures",
  components: {
    navbarbuyer,
    footerapp,
    Multiselect,
  },
  data() {
    return {
      value: null,
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
      ],
    };
  },
  methods: {
    nameWithLang({ name, language }) {
      return `${name} — [${language}]`;
    },
  },
};
</script>

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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
