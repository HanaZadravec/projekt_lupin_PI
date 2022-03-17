<template>
  <router-view />
</template>

<script>
import { firebase } from "@/firebase.js";
import store from "@/store.js";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    console.log("*** User", user.email);
    store.currentUser = user.email;
    console.log(store.currentUser);
    if (store.currentUser == "admin@gmail.com") {
      if (router.currentRoute.name != "Admin") {
        router.push({ name: "Admin" });
      }
    } else if (!currentRoute.meta.needsUser) {
      router.push({ name: "Home" });
    }
  } else {
    console.log("*** No user");
    store.currentUser = null;
    if (currentRoute.meta.needsUser) {
      router.push({ name: "Login" });
    }
  }
});
export default {
  name: "app",
};
</script>
