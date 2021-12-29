<template>
  <div>
    <navbarbuyer />
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12 col-sm-12">
          <img src="@/assets/stephencurry.jpg" style="width: 100%" />
        </div>
        <div class="col-md-6 col-12 col-sm-12" style="margin-top: 50px">
          <h2>Stephen Curry, Panini, 2009/10</h2>
          <hr />
          <span style="font-size: 20px; margin-right: 15px" class="tekst"
            ><b>Buy now price:600 000 $</b></span
          >
          <button type="button" class="btn btn-dark" style="width: 90px">
            Buy now
          </button>
          <hr />
          <p style="font-size: 120%"><b>Best offer:</b></p>
          <div style="margin-top: 100px">
            <span
              v-if="loaded"
              style="font-size: 120%; margin-right: 15px"
              id="time"
              ><b>Time remaining:</b></span
            >
            <span>
              <span v-if="loaded">Day: </span>
              <span class="day"></span>
              <span v-if="loaded"> Hour: </span>
              <span class="hour"></span>
              <span v-if="loaded"> Minute: </span>
              <span class="minute"></span>
              <span v-if="loaded"> Second: </span>
              <span class="seconds"></span>
            </span>
            <div style="margin-top: 20px">
              <button
                type="button"
                class="btn btn-dark center"
                style="width: 125px"
              >
                Make an offer
              </button>
            </div>
          </div>
        </div>
        <div
          class="col-md-12 col-12 col-sm-12"
          style="
            border-style: solid;
            border-width: 2px;
            border-color: black;
            margin-top: 75px;
          "
        >
          <p style="margin-top: 7px"><b>Description</b></p>
          <p>
            What makes the card especially rare is a part of Curry's jersey
            number that is visible on the patch, giving memorabilia-enthusiasts
            even more reason to bask in it's authenticity. Listed as a 2009/10
            Panini National Treasures "Century Gold" Stephen Curry signed patch
            rookie card, the card is one of only 25 editions ever made.
          </p>
        </div>
      </div>
    </div>
    <footerapp />
  </div>
</template>

<script>
// @ is an alias to /src
import navbarbuyer from "@/components/navbarbuyer.vue";
import footerapp from "@/components/footerapp.vue";

export default {
  name: "Stephen Curry card",
  components: {
    navbarbuyer,
    footerapp,
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    setInterval(this.countDown, 1000);
  },
  methods: {
    countDown() {
      this.loaded = true;
      const countDate = new Date("December 25,2021 00:00:00").getTime();
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      document.querySelector(".day").innerText = textDay;
      document.querySelector(".hour").innerText = textHour;
      document.querySelector(".minute").innerText = textMinute;
      document.querySelector(".seconds").innerText = textSecond;
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
hr {
  height: 2px;
  color: black;
  background-color: black;
  border: none;
  width: 90%;
}
.hour,
.minute,
.day,
.seconds {
  font-size: 18px;
}
</style>
