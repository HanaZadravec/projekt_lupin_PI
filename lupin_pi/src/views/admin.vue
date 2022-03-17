<template>
  <div>
    <navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1
            style="
              margin-top: 15px;
              margin-bottom: 20px;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 50px;
            "
          >
            <b>Post new auction</b>
          </h1>
          <form
            v-if="!loading"
            @submit.prevent="postNew()"
            class="center mb-5"
            style="width: 450px; margin-top: 30px"
          >
            <croppa
              :width="250"
              :height="250"
              v-model="imageReference"
              placeholder="upload image"
              class="center"
              style="width: 245px"
            ></croppa>
            <label for="newnaziv" style="margin-top: 15px" class="center"
              >Name:</label
            >
            <input
              v-model="newnaziv"
              class="form-control me-2 center"
              type="text"
              id="newnaziv"
              style="margin-top: 15px"
            />
            <label for="typeofproducts" style="margin-top: 15px" class="center"
              >Type of product</label
            >
            <select
              v-model="typeproduct"
              class="form-select center"
              aria-label="Default select example"
              style="margin-top: 7px; border-radius: 5px"
              id="typeodproduct"
            >
              <option value="Cards">Cards</option>
              <option value="Books">Books</option>
              <option value="Coins">Coins</option>
              <option value="Comics">Comics</option>
              <option value="Maps">Maps</option>
              <option value="Paintings">Paintings</option>
              <option value="Productssignedbycelebrities">
                Products signed by celebrities
              </option>
              <option value="Raresignatures">Rare signatures</option>
              <option value="Sculptures">Sculptures</option>
            </select>
            <label for="newproizvodac" style="margin-top: 15px" class="center"
              >Manufacturer</label
            >
            <input
              v-model="newproizvodac"
              class="form-control me-2 center"
              type="text"
              id="newproizvodac"
              style="margin-top: 15px"
            />
            <label for="newcijena" style="margin-top: 15px" class="center"
              >Price</label
            >
            <input
              v-model="newcijena"
              class="form-control me-2 center"
              type="number"
              id="newcijena"
              style="margin-top: 15px"
            />
            <label for="duedate" style="margin-top: 15px" class="center"
              >Due date</label
            >
            <input
              v-model="duedate"
              class="form-control me-2 center"
              type="text"
              id="duedate"
              style="margin-top: 15px"
            />
            <label for="startingbidd" style="margin-top: 15px" class="center"
              >Starting bid</label
            >
            <input
              v-model="starting"
              class="form-control me-2 center"
              type="number"
              id="startingbidd"
              style="margin-top: 15px"
            />

            <label for="desc" style="margin-top: 15px" class="center"
              >Product description</label
            >
            <textarea
              v-model="productdesc"
              class="form-control me-2 center"
              type="text"
              id="desc"
              style="margin-top: 15px"
            ></textarea>
            <button
              class="btn btn-outline-dark center"
              type="submit"
              style="height: 40px; margin-top: 15px; width: 70px"
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
  </div>
</template>

<script>
import navbar from "@/components/navbaradmin.vue";
import { db, storage } from "@/firebase.js";
import store from "@/store.js";

export default {
  name: "Admin",
  components: { navbar },
  data() {
    return {
      proizvod: [],
      newImageUrl: "",
      newnaziv: "",
      newproizvodac: "",
      newcijena: "",
      duedate: "",
      starting: "",
      imageReference: null,
      loading: false,
      productdesc: "",
      typeproduct: "",
      orders: [],
    };
  },
  methods: {
    // dohvacanje naruzbi
    getOrders() {
      console.log("firebase dohvat narudzbi");
      db.collection("orders")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            this.orders.push({
              id: data.id,
              user: data.user,
              product: data.product,
              address: data.address,
              zipcode: data.zipcode,
              mobile: data.mobile,
              shipping: data.shipping,
              payment: data.payment,
            });
          });
        });
    },
    //dohvacanje kategorije proizvoda
    //dohvacanje proizvoda
    //uređivanje proizvoda
    //objavljivanje proizvoda
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
        let url = await result.ref.getDownloadURL();

        const imagenaziv = this.newnaziv;
        const imageproizvodac = this.newproizvodac;
        const imagecijena = this.newcijena;
        const startingbidd = this.starting;
        const product = this.productdesc;
        const typeofproduct = this.typeproduct;
        let doc = await db.collection("proizvodi").add({
          url: url,
          desc: imagenaziv,
          manufacturer: imageproizvodac,
          price: imagecijena,
          startingbidd: startingbidd,
          posted_at: Date.now(),
          date: new Date(this.duedate).getTime(),
          productdesc: product,
          typeofproduct: typeofproduct,
        });
        console.log("Spremljeno", doc);
      } catch (e) {
        console.error("Greška", e);
      }
      this.newImageUrl = "";
      this.newnaziv = "";
      this.newproizvodac = "";
      this.newcijena = "";
      this.duedate = "";
      this.loading = false;
      this.starting = "";
      this.productdesc = "";
      this.typeproduct = "";
    },
  },
  mounted() {
    this.getOrders();
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
