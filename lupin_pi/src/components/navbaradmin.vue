<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar"
      style="background-color: #d2c1a7"
    >
      <img src="@/assets/pozadina.jpg" style="width: 50px; height: 50px" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"
          ><i class="fas fa-bars fa-lg"></i
        ></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="logout()"
              style="color: black"
              ><b>Logout</b></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import store from "@/store.js";
import { firebase } from "@/firebase.js";
import card from "@/components/card.vue";
export default {
  name: "navbar_admin",
  components: {
    card,
  },

  data() {
    return {
      store: store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "Login" });
        });
    },
  },
};
</script>
