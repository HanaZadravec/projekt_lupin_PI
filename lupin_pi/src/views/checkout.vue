<template>
  <div>
    <navbar />
    <div class="container mt-2 pt-2">
      <div class="row">
        <div class="col-md-9">
          <h4 class="py-4" style="font-family: Arial, Helvetica, sans-serif">
            <b>Checkout page</b>
          </h4>
          <div class="col-lg-12" v-if="this.$store.state.cart.length == 0">
            <img
              class="center"
              src="https://sethisbakery.com/assets/website/images/empty-cart.png"
            />
          </div>
          <div v-for="item in this.$store.state.cart" :key="item.id">
            <div class="media-body">
              <h5>
                Product title: {{ item.productName }}
                <span
                  class="float-right"
                  style="cursor: pointer"
                  @click="$store.commit('removeFromCart', item)"
                  >x</span
                >
              </h5>
              <img :src="item.url" style="width: 80px" />
              <p>
                Price : {{ item.productPrice }} $<br />Quantity:
                {{ item.productQuantity }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3" v-if="!this.$store.state.cart.length == 0">
          <p>Total price {{ this.$store.getters.totalPrice }} $</p>
          <form class="form-inline">
            <div class="center">
              <label for="shipping_type" style="font-size: 18px"
                >Shipping method:</label
              >
              <select
                v-model="shipping"
                class="form-select center"
                aria-label="Default select example"
                style="width: 140px; margin-top: 7px; border-radius: 5px"
                id="type_user"
              >
                <option value="gls">GLS</option>
                <option value="overseas">Overseas</option>
                <option value="hrv_posta">Hrvatska pošta</option>
              </select>
              <label
                for="shipping_type"
                style="font-size: 18px; margin-top: 15px"
                >Payment method:</label
              >
              <select
                v-model="payment"
                class="form-select center"
                aria-label="Default select example"
                style="width: 140px; margin-top: 7px; border-radius: 5px"
                id="type_user"
              >
                <option value="debit">Debit cart</option>
                <option value="cash">Cash on delivery</option>
              </select>
              <div v-if="this.payment == 'debit'" style="margin-top: 10px">
                <div class="row">
                  <div class="col-md-12">
                    <div class="left border">
                      <div class="row">
                        <span class="header" style="margin-left: 5px"
                          >Payment</span
                        >
                        <div class="icons" style="margin-left: 10px">
                          <img
                            src="https://img.icons8.com/color/48/000000/visa.png"
                          />
                        </div>
                      </div>
                      <form>
                        <span>Cardholder's name:</span>
                        <input placeholder="Linda Williams" /> <br />
                        <span>Card Number:</span>
                        <input placeholder="0125 6780 4567 9909" /><br />
                        <div>
                          <span>Expiry date:</span>
                          <input placeholder="YY/MM" />
                        </div>
                        <div><span>CVV:</span> <input id="cvv" /></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div class="center">
            <label for="address" style="margin-top: 15px">Address:</label>
            <input
              v-model="address"
              type="text"
              class="form-control"
              id="address"
              placeholder="Enter address..."
            />
            <label for="zipcode" style="margin-top: 15px">Zip code:</label>
            <input
              v-model="zipcode"
              type="text"
              class="form-control"
              id="zipcode"
              placeholder="Enter zip code..."
            />
            <label for="mobile_number" style="margin-top: 15px"
              >Mobile number:</label
            >
            <input
              v-model="mobile"
              type="text"
              class="form-control"
              id="mobile_number"
              placeholder="Enter your mobile number..."
            />
          </div>
          <button
            @click="spremiOrder()"
            class="btn btn-dark center"
            style="margin-top: 10px"
          >
            Order
          </button>
        </div>
        <div class="col-md-3" v-else>
          <p>Total price: 0$</p>
        </div>
      </div>
    </div>
    <footerapp />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import footerapp from "@/components/footerapp.vue";
import { db } from "@/firebase.js";
import store from "@/store.js";
export default {
  name: "Checkout",
  data() {
    return {
      shipping: "",
      payment: "",
      address: "",
      mobile: "",
      zipcode: "",
      useremail: "",
      orders: [],
    };
  },
  components: {
    navbar,
    footerapp,
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
    async spremiOrder() {
      try {
        let data = this.$store.state.cart.map((item) => ({
          id: item.productId,
          name: item.productName,
        }));
        let name = data.map((data) => data.name);
        let id = data.map((data) => data.id);
        console.log(data);
        let doc = await db.collection("orders").add({
          id: id,
          product: name,
          user: store.currentUser,
          shipping: this.shipping,
          address: this.address,
          zipcode: this.zipcode,
          payment: this.payment,
          mobile: this.mobile,
          totalprice: this.$store.getters.totalprice,
        });
        console.log("Spremljeno", doc);
        alert("Order confirmed");
        window.location.reload();
        localStorage.clear();
      } catch (e) {
        console.error("Greška", e);
      }
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
.left {
  background-color: #ffffff;
  padding: 2vh;
}
.header {
  font-size: 1.5rem;
}
</style>
