<template>
  <div class="col-md-12" style="margin-top: 20px">
    <div class="card">
      <img :src="slika.url" class="card-img-top" style="margin: auto" />
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h6 class="card-title">{{ slika.description }}</h6>
            <p class="card-text">{{ slika.manufacturer }}</p>
            <p>{{ slika.price }}</p>
          </div>
          <div class="col-md-6">
            <span style="font-size: 120%; margin-right: 15px"
              ><b>Time remaining:</b></span
            >
            <vue-countdown-timer
              @start_callback="startCallBack('event started')"
              @end_callback="endCallBack('event ended')"
              :start-time="new Date().getTime()"
              :end-time="this.slika.date"
              :interval="1000"
              :end-text="'Order Delayed!'"
              :seconds-txt="'seconds'"
              :minutes-txt="'minutes'"
              :day-txt="'days'"
              :hour-txt="'hours'"
              style="display: inline-block"
            >
            </vue-countdown-timer>

            <button
              class="btn btn-outline-dark center w-70"
              type="button"
              style="height: 40px; margin-top: 28px"
            >
              Make an offer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slika"],
  name: "card",
};
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
