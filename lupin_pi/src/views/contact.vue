<template>
  <div style="background-color: #f7f7f7">
    <navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-top: 20px">
          <h1>Contact Us !</h1>
        </div>
        <div class="col-md-12" style="margin-top: 20px">
          <h2 style="text-align: center">Welcome to Lupin!</h2>
          <h5 style="text-align: center">Have any questions ???</h5>
          <img src="@/assets/talking.png" class="center" style="width: 50%" />
          <p style="font-size: 17px; text-align: center">
            Don't hesitate to email or call us if you have any queries about the
            site, advertising, or anything else.
          </p>

          <img
            class="center"
            alt="contact-us"
            height="87"
            src="@/assets/email.png"
            width="320"
          />

          <i
            class="fas fa-envelope-open-text center"
            style="
              color: #2c3e50;
              font-size: 20px;
              text-align: center;
              margin-top: 10px;
              margin-bottom: 10px;
            "
            ><a
              href="mailto:lupinauctioning@gmail.com"
              style="text-decoration: none; color: black"
              >lupinauctioning@gmail.com</a
            >
            <img
              class="center"
              alt="contact-us"
              height="87"
              src="@/assets/call.png"
              width="320"
              style="margin-top: 10px; margin-bottom: 10px"
            />
          </i>
          <i
            class="fas fa-phone-square-alt fa-lg center"
            style="text-align: center; margin-top: 5px; margin-bottom: 5px"
            >0981866607</i
          >
          <h3 style="color: #3e005d; text-align: center">
            We will revert you as soon as possible...!
          </h3>
          <p style="text-align: center; color: #3e005d">
            Thank you for contacting us! <br /><b>Have a great day</b>
          </p>
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
  name: "Contact",
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
