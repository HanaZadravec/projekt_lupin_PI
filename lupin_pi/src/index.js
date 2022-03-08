import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
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
    },
  },
});
