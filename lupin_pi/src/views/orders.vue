<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-top: 50px; margin-bottom: 30px">
          <h1 style="font-family: Arial, Helvetica, sans-serif">
            <b
              >My profile<i
                class="fas fa-user-circle fa-sm nav-link active"
                style="color: black; display: inline-block"
              ></i
            ></b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <menumyprofile />
        </div>
        <div class="col-md-1 vl"></div>
        <div v-if="this.orders.length > 0">
          <table class="table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Zipcode</th>
                <th>Products</th>
                <th>Total price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="narudzba in orders" :key="narudzba.id[0]">
                <td>{{ narudzba.address }}</td>
                <td>{{ narudzba.zipcode }}</td>
                <td>{{ narudzba.product }}</td>
                <td>{{ narudzba.totalprice }}$</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-7" v-else>
          <h2 style="font-family: Arial, Helvetica, sans-serif">
            <b>Order history</b>
          </h2>
          <div>
            <img
              src="@/assets/myprofile.png"
              class="center"
              style="width: 80%; margin-top: 30px"
            />
            <p
              style="
                font-size: 40px;
                text-align: center;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              <b>No orders yet</b>
            </p>
            <p
              style="
                font-size: 23px;
                text-align: center;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              Check out various vintage and collectible items just by clicking
              the button down below
            </p>
            <a href="/" class="btn-dark" style="text-decoration: none"
              ><button
                type="button"
                class="btn btn-dark center"
                style="width: 170px"
              >
                Go to the store
              </button></a
            >
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
import menumyprofile from "@/components/menumyprofile.vue";
import store from "@/store.js";
import { db } from "@/firebase.js";
export default {
  name: "Myprofile",
  components: {
    navbarbuyer,
    footerapp,
    menumyprofile,
  },
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    user() {
      for (let i = 0; i < this.orders.length; i++) {
        console.log(this.orders[i]);
        if (store.currentUser === this.orders[i].user) {
          return true;
        }
      }
    },
    getOrders() {
      console.log("firebase dohvat narudzbi");
      db.collection("orders")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            if (store.currentUser == data.user) {
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
            }
          });
        });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
<style scoped>
.vl {
  border-left: 2px solid black;
  height: 500px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
@media screen and (max-width: 767.5px) {
  .col-md-1 {
    display: none;
  }
  .col-md-7 {
    margin-top: 30px;
  }
}
</style>
