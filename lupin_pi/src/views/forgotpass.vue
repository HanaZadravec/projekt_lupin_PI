<template>
  <div>
    <multiselect v-model="selected" :options="options"> </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "Forgot password",
  components: { Multiselect },
  data() {
    return {
      selected: null,
      options: ["list", "of", "options"],
    };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
