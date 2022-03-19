<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <a href="/changepass" style="color: black; font-size: 21px"
          >Change password</a
        ><br />
        <a href="/orders" style="color: black; font-size: 21px"
          >Order history</a
        >
        <br />
        <a href="/contact" style="color: black; font-size: 21px">Contact</a>
        <br />
        <a
          @click.prevent="logout()"
          href="#"
          style="color: black; font-size: 21px"
          ><b>Logout</b></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase.js";
export default {
  name: "menumyprofile",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>
