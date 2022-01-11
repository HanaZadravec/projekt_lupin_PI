<template>
  <div class="col-md-12" style="margin-top: 20px">
    <div class="card">
      <img :src="slika.url" class="card-img-top" style="margin: auto" />
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h6 class="card-title">
              {{ slika.description }}
            </h6>
            <p class="card-text">{{ slika.manufacturer }}</p>
            <p>{{ slika.price }}</p>
          </div>
          <div class="col-md-6">
            <span style="font-size: 130%; margin-right: 15px"
              ><b>Time remaining:</b></span
            >
            <vue-countdown-timer
              :start-time="new Date().getTime()"
              :end-time="this.slika.date"
              :interval="1000"
              :end-text="'Auction is over!'"
              :seconds-txt="'seconds'"
              :minutes-txt="'minutes'"
              :day-txt="'days'"
              :hour-txt="'hours'"
              style="display: inline-block; font-size: 110%"
            >
            </vue-countdown-timer>
            <div style="font-size: 130%; margin-right: 15px">
              <b>Best offer:</b>
            </div>
            <div style="font-size: 130%; margin-right: 15px">
              <b>Buy now price:</b>
              {{ slika.price }}
            </div>
            <button
              @click="doSomething"
              class="btn btn-outline-dark w-70"
              type="button"
              style="height: 40px; margin-top: 15px"
            >
              Buy Now
            </button>
            <form style="margin-top: 15px">
              <input
                v-model="cijena"
                class="form-control me-2 center"
                type="number"
                id="newnaziv"
                style="margin-top: 5px; width: 300px"
                placeholder="Make an offer..."
                min="1"
              />
              <button
                @click="checkbox"
                class="btn btn-outline-dark center w-70"
                type="button"
                style="height: 40px; margin-top: 15px"
              >
                Make an offer
              </button>
            </form>
          </div>
          <div
            class="col-md-12"
            style="
              border-style: solid;
              border-width: 2px;
              border-color: black;
              margin-top: 75px;
            "
          >
            {{ slika.description }}
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
  data() {
    return {
      cijena: "",
    };
  },
  methods: {
    doSomething() {
      this.$emit("alert");
    },
    checkbox() {
      this.$emit("cijena", this.cijena);
      this.$emit("id", this.slika.id);
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
