<template>
  <div>
    <multiselect
      v-model="value"
      :options="options"
      :options-limit="4"
      track-by="desc"
      label="desc"
      placeholder="Search for a product.."
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { db } from "@/firebase.js";
import router from "@/router";
export default {
  components: { Multiselect },
  data() {
    return {
      value: null,
      options: [],
    };
  },
  async mounted() {
    await this.Products();
  },
  methods: {
    async Products() {
      let uzimanje = await db.collection("proizvodi").orderBy("price").get();
      this.options = [];
      uzimanje.docs.forEach((doc) => {
        this.options.push({
          id: doc.id,
          desc: doc.data().desc,
        });
      });
    },
  },
  watch: {
    value() {
      router.push({ name: "proizvodi", params: { product_id: this.value.id } });
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
