<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-top: 50px; margin-bottom: 15px">
          <h1
            style="
              font-family: Arial, Helvetica, sans-serif;
              text-align: center;
            "
          >
            <b>Add new address</b>
          </h1>
        </div>
        <div class="col-md-12">
          <form style="margin-top: 15px">
            <div class="form-group">
              <label for="name_address" class="center">Name:</label>
              <input
                v-model="name"
                type="text"
                class="form-control center"
                id="name_address"
                placeholder="Enter your name..."
              />
            </div>
            <div class="form-group">
              <label for="surname_address" class="center">Surname:</label>
              <input
                v-model="surname"
                type="text"
                class="form-control center"
                id="surname_address"
                placeholder="Enter your surname..."
              />
            </div>
            <div class="form-group">
              <label for="address" class="center">Address:</label>
              <input
                v-model="address"
                type="text"
                class="form-control center"
                id="address"
                placeholder="Enter your address..."
              />
            </div>
            <div class="form-group">
              <label for="address_city" class="center">City:</label>
              <input
                v-model="city"
                type="text"
                class="form-control center"
                id="address_city"
                placeholder="Enter your city..."
              />
            </div>
            <div class="form-group">
              <label for="address_zipcode" class="center">Zip code:</label>
              <input
                v-model="zipcode"
                type="text"
                class="form-control center"
                id="address_zipcode"
                placeholder="Enter your zip code..."
              />
            </div>

            <div class="form-group" style="margin-bottom: 25px">
              <label for="address_mobile" class="center">Mobile number:</label>
              <input
                v-model="mobilenumber"
                type="text"
                class="form-control center"
                id="address_mobile"
                placeholder="Enter your mobile phone number..."
              />
            </div>
            <button
              @click="postnewaddress"
              type="button"
              class="btn btn-dark center"
              style="width: 80px"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
    <footerapp />
  </div>
</template>

<script>
import navbarbuyer from "@/components/navbarbuyer.vue";
import footerapp from "@/components/footerapp.vue";
import store from "@/store.js";
import { db } from "@/firebase.js";
export default {
  name: "Add new address",
  components: {
    navbarbuyer,
    footerapp,
  },
  data() {
    return {
      name: "",
      surname: "",
      address: "",
      city: "",
      zipcode: "",
      mobilenumber: "",
      adrese: [],
    };
  },
  methods: {
    postnewaddress() {
      db.collection("adrese" + " " + store.currentUser).add({
        name: this.name,
        surname: this.surname,
        address: this.address,
        city: this.city,
        mobile: this.mobilenumber,
      });
    },
  },
};
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
input {
  width: 50%;
}
label {
  font-size: 23px;
}
</style>
