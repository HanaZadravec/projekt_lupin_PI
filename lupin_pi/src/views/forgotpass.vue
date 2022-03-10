<template>
  <div class="boja">
    <div class="container">
      <div class="row">
        <div
          class="col-md-12 col-12"
          style="margin-top: 50px; margin-bottom: 15px"
        >
          <h1
            style="
              font-size: 75px;
              text-align: center;
              text-shadow: 6px 6px 8px #a0a0a0;
              font-family: Papyrus Copperplate Fantasy;
            "
          >
            Reset password
          </h1>
        </div>
        <div class="col-md-12">
          <form style="margin-top: 15px">
            <div class="form-group">
              <p style="text-align: center; font-size: 17px">
                <i>We will send you an email in order to reset your password</i>
              </p>

              <input
                v-model="email"
                type="text"
                class="form-control center"
                id="email"
                placeholder="Enter email..."
                style="height: 48px; margin-top: 25px"
              />
            </div>
            <input
              type="button"
              class="btn btn-dark center"
              style="width: 80px"
              value="Reset"
              @click="resetPass()"
            />
          </form>
        </div>
      </div>
    </div>
    <div class="slika_centrirano">
      <img src="@/assets/logo.jpg" style="margin-top: 100px" />
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase.js";
export default {
  name: "forgotpass",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    resetPass() {
      const auth = firebase.auth();
      auth
        .sendPasswordResetEmail(this.email)
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
.boja {
  background-color: #ebebeb;
}
.slika_centrirano {
  display: flex;
  justify-content: center;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
</style>
