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
              >Manufacturer/artist</label
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
          <hr style="border: 0.5px solid black" />
          <h1
            style="
              margin-top: 15px;
              margin-bottom: 20px;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 50px;
            "
          >
            <b>Delete products</b>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="products in proizvod" :key="products.id">
                <td>{{ products.description }}</td>
                <td>{{ products.price }}</td>
                <td>
                  <button
                    @click="deleteProduct(products.id)"
                    class="btn btn-dark"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <h1
            style="
              margin-top: 15px;
              margin-bottom: 20px;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 50px;
            "
          >
            <hr style="border: 0.5px solid black" />
            <b>Orders</b>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Address</th>
                <th>Zipcode</th>
                <th>Mobile number</th>
                <th>Products</th>
                <th>Payment</th>
                <th>Total price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="narudzba in orders" :key="narudzba.id[0]">
                <td>{{ narudzba.user }}</td>
                <td>{{ narudzba.address }}</td>
                <td>{{ narudzba.zipcode }}</td>
                <td>{{ narudzba.mobile }}</td>
                <td>{{ narudzba.product }}</td>
                <td>{{ narudzba.payment }}</td>
                <td>{{ narudzba.totalprice }}$</td>
              </tr>
            </tbody>
          </table>
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
              totalprice: data.totalprice,
            });
          });
        });
    },
    //brisanje proizvoda
    deleteProduct(doc) {
      if (confirm("Are you sure?")) {
        db.collection("proizvodi")
          .doc(doc)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
      window.location.reload();
    },
    //dohvacanje proizvoda
    getPosts() {
      console.log("firebase dohvat");
      db.collection("proizvodi")
        .orderBy("posted_at", "desc")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();

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
    //objavljivanje proizvoda
    getImage() {
      return new Promise((resolveFn, errorFn) => {
        this.imageReference.generateBlob((data) => {
          resolveFn(data);
        });
      });
    },
    async postNew() {
      if (
        confirm("Are you sure? Please check if all the information is right!")
      ) {
        if (this.starting < this.newcijena) {
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
          window.location.reload();
        } else {
          alert("Starting bidd can't be bigger than buy now price");
        }
      }
    },
  },
  mounted() {
    this.getOrders();
    this.getPosts();
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
