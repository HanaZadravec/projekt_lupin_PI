<template>
  <div>
    <navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 style="margin-bottom: 30px; margin-top: 20px">Sponsors</h1>
        </div>
        <div class="col-md-12">
          <h4 style="margin-bottom: 30px">Title sponsor</h4>
          <img
            src="@/assets/alliance.png"
            class="center"
            style="margin-bottom: 30px"
          />
          <h4 style="margin-bottom: 30px">Premium sponsors</h4>
          <img src="@/assets/premium.png" class="center" />
          <h4 style="margin-bottom: 30px">Corporate sponsors</h4>
        </div>
        <div class="col-md-6" style="text-align: center">
          <p><i>Choctaw Times</i></p>
          <p><i>Davis paint and Collision</i></p>
          <p><i>Dr. Tracy Gasbarra</i></p>
        </div>
        <div class="col-md-6" style="text-align: center">
          <p><i>SWM & Son's</i></p>
          <p><i>Waste connections</i></p>
          <p><i>Auction Therapy</i></p>
        </div>
      </div>
    </div>
    <footerapp />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import footerapp from "@/components/footerapp.vue";
export default {
  name: "Sponsors",
  components: {
    navbar,
    footerapp,
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
