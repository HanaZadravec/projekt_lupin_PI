<template>
  <div>
    <button
      class="btn btn-outline-dark center w-70 add-cart"
      type="button"
      style="height: 40px; margin-top: 15px"
      @click="AddToCart()"
    >
      Buy now
    </button>
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  props: {
    name: String,
    price: String,
    id: Number,
    url: String,
  },
  data() {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        productId: this.id,
        url: this.url,
        productQuantity: 1,
      },
    };
  },
  methods: {
    AddToCart() {
      this.$store.commit("AddToCart", this.item);
      $("#miniCart").modal("show");
    },
  },
};
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
