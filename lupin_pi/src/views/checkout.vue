<template>
  <div>
    <navbar />
    <div class="container mt-2 pt-2">
      <div class="row">
        <div class="col-md-9">
          <h4 class="py-4" style="font-family: Arial, Helvetica, sans-serif">
            <b>Checkout page</b>
          </h4>
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
        <div class="col-md-3">Total price</div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbarbuyer.vue";
export default {
  name: "Checkout",
  components: {
    navbar,
  },
};
</script>
