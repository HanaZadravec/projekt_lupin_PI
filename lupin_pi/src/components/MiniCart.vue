<template>
  <div>
    <div
      class="modal fade"
      id="miniCart"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">My cart</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Continue Shopping
              </button>
              <button type="button" class="btn btn-primary" @click="checkout()">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "miniCart",
  methods: {
    checkout() {
      $("#miniCart").modal("hide");
      this.$router.push("/checkout");
    },
  },
};
</script>
