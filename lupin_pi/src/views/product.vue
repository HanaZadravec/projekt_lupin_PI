<template>
  <div>
    <navbar />
    <div class="row">
      <div class="col-4">
        <img
          src="https://via.placeholder.com/150x100"
          class="w-100"
          style="margin-top: 30px; margin-left: 30px"
        />
      </div>
      <div class="col-8">
        <h1 style="text-align: center">Product title</h1>
        <h3 style="text-align: center">Price</h3>
        <input
          type="number"
          value="1"
          max="1"
          min="1"
          style="margin-right: 13px"
          class="center"
        />
        <button class="btn btn-dark center">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbarbuyer.vue";
export default {
  name: "product",
  components: { navbar },
  props: ["id"],
};
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
