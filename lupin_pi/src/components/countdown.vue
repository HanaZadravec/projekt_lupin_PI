<template>
  <div>
    {{ displayDays }} : {{ displayHours }} : {{ displayMinutes }} :
    {{ displaySeconds }}
  </div>
</template>

<script>
export default {
  name: "countdown",
  data: () => {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
    };
  },
  computed: {
    seconds: () => 1000,
    minutes: () => {
      return this.seconds * 60;
    },
    hours: () => {
      return this.minutes * 60;
    },
    days: () => {
      return this.hours * 24;
    },
    mounted: function () {
      this.showTime();
    },
    methods: {
      showTime() {
        const timer = setInterval(() => {
          const now = Date.now();
          const end = new Date(2021, 12, 25, 10, 10, 10);
          const gap = end.getTime() - now;

          if (gap < 0) {
            clearInterval(timer);
          }

          this.displayDays = Math.floor(gap / this.days);
          this.displayHours = Math.floor((gap % this.days) / this.hours);
          this.displayMinutes = Math.floor((gap % this.hours) / this.minutes);
          this.displaySeconds = Math.floor((gap % this.minutes) / this.seconds);
        });
      },
    },
  },
};
</script>
