<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row"></div>
      <div class="col-md-12">
        <h1 style="text-align: left; margin-top: 20px; font-size: 53px">
          Our team
        </h1>
      </div>
      <div class="col-md-6" style="margin-top: 40px">
        <img
          src="@/assets/hana.jpg"
          style="border-radius: 50%; width: 300px; height: 300px"
          class="center"
        />
        <p style="margin-top: 20px; text-align: center; font-size: 20px">
          <i><b>Hana Zadravec</b></i>
        </p>
        <p style="text-align: center; font-size: 16px">CEO & Founder</p>
      </div>
      <div class="col-md-6"></div>
      <div class="col-md-12" style="margin-top: 60px">
        <img
          src="@/assets/strucnjakantikviteta.jpeg"
          style="border-radius: 50%; width: 300px; height: 300px"
          class="center"
        />
        <p style="margin-top: 20px; text-align: center; font-size: 20px">
          <i><b>Neil Hamer</b></i>
        </p>
        <p style="text-align: center; font-size: 16px">Antiques expert</p>
      </div>
    </div>
    <footerapp />
  </div>
</template>

<script>
import navbarbuyer from "@/components/navbarbuyer.vue";
import footerapp from "@/components/footerapp.vue";

export default {
  name: "Our team",
  components: {
    navbarbuyer,
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
