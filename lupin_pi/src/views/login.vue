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
              font-size: 70px;
              text-align: center;
              text-shadow: 6px 6px 8px #a0a0a0;
              font-family: Papyrus Copperplate Fantasy;
            "
          >
            Welcome to Lupin
          </h1>
        </div>
        <div class="col-md-12" style="margin-top: 30px">
          <h1
            style="
              text-align: center;
              text-shadow: 6px 6px 8px #a0a0a0;
              font-family: Papyrus Copperplate Fantasy;
            "
          >
            Login
          </h1>
          <form style="margin-top: 15px">
            <div class="form-group">
              <label for="email_login" class="center">Email:</label>
              <input
                v-model="email"
                type="email"
                class="form-control center"
                id="email_login"
                placeholder="Enter email..."
                style="height: 48px"
              />
            </div>
            <div class="form-group">
              <label for="pass_login" class="center">Password:</label>
              <input
                v-model="password"
                type="password"
                class="form-control center"
                id="pass_login"
                data_toggle="password"
                placeholder="Enter password..."
                style="height: 48px"
              />
            </div>

            <button
              @click="login()"
              class="btn btn-outline-dark center"
              type="button"
              style="height: 40px; margin-top: 25px; width: 70px"
            >
              Login
            </button>
            <p style="text-align: center; font-size: 22px; margin-top: 15px">
              Don´t have an account?
              <b
                ><i
                  ><u
                    ><a
                      href="/signup"
                      style="text-decoration: none; color: black"
                      >Sign up</a
                    ></u
                  ></i
                ></b
              >
            </p>
          </form>
          <div style="margin-top: 20px">
            <a
              href="/forgotpass"
              style="
                text-decoration: none;
                color: black;
                text-align: center;
                font-size: 19px;
              "
              ><p>
                <b><u>Forgot your password?</u></b>
              </p></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="slika_centrirano">
      <img src="@/assets/logo.jpg" style="margin-top: 17px" />
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase.js";
export default {
  name: "Login",
  data() {
    return {
      password: "",
      email: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.email);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("uspjesna prijava", result);
        })
        .catch((e) => {
          console.error("greška", e);
        });
      if (this.email === "" || this.password === "") {
        alert("You didn't fill out everything");
      }
      if (this.password.length < 6) {
        alert("Password should be at least 6 charachters long!");
      }
    },
  },
};
</script>

<style scoped>
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
.boja {
  background-color: #ebebeb;
}

label {
  font-size: 20px;
}
</style>
