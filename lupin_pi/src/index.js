import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let cart = window.localStorage.getItem("cart");

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
  },
  mutations: {
    AddToCart(state, item) {
      let found = state.cart.find(
        (product) => product.productId == item.productId
      );
      if (found) {
        alert("Item already added!");
      } else {
        state.cart.push(item);
      }
      this.commit("saveData");
    },
    saveData(state) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, item) {
      let product = state.cart.indexOf(item);
      state.cart.splice(product, 1);
      this.commit("saveData");
    },
  },
  getters: {
    totalPrice: (state) => {
      let total = 0;
      state.cart.filter((item) => {
        total += item.productPrice * item.productQuantity;
      });

      return total;
    },
  },
});
