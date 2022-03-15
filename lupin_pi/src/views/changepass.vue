<template>
  <div>
    <navbar />
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
        <div class="col-md-7">
          <h2 style="font-family: Arial, Helvetica, sans-serif">
            <b>Change password</b>
          </h2>
          <p style="margin-top: 10px">
            <i>
              When you click the "Update" button, an email will be sent to your
              default email address, allowing you to change your password.</i
            >
          </p>
          <input
            type="button"
            class="btn btn-dark center"
            style="width: 80px"
            value="Update"
            @click="resetPass()"
          />
        </div>
      </div>
    </div>
    <footerapp />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import footerapp from "@/components/footerapp.vue";
import menumyprofile from "@/components/menumyprofile.vue";
import { firebase } from "@/firebase.js";

export default {
  name: "Changepassword",
  components: {
    navbar,
    footerapp,
    menumyprofile,
  },
  methods: {
    resetPass() {
      const auth = firebase.auth();
      auth
        .sendPasswordResetEmail(auth.currentUser.email)
        .then(() => {
          alert("Email sent");
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
