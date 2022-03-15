<template>
  <div>
    <navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 style="text-align: left; margin-top: 20px">Our story</h1>
        </div>
        <div class="col-md-12">
          <p
            style="
              text-align: justify;
              text-justify: inter-word;
              font-size: 18px;
              margin-top: 20px;
            "
          >
            Welcome to Lupin, your number one source for auctionining products.
            We're dedicated to giving you the very best experience of
            auctioning, with a focus on simplicity, efficiency, minimalism.
            Lupin was founded in 2021 with a simple mission, which is to bring
            the world of auction closer to all people. Founded in 2021 with a
            simple mission, which is to bring the world of auction closer to all
            people, by Hana Zadravec and Matija Kelemenić, Lupin has come a long
            way from its beginnings in Pula. When Hana and Matija first started
            out, their passion for auctioning drove them to do tons of research
            so that Lupin can offer you the world's most advanced auctioning web
            application. We now have customers all over country that are
            thrilled that we're able to turn our passion into our own website.
            We hope you enjoy our website as much as we enjoy offering easy
            auctioning to you. If you have any questions, please don't hesitate
            to contact us.
            <br />
            <br />
            Sincerely, <i>Matija and Hana</i>
          </p>
        </div>
        <div class="col-md-12">
          <img
            src="@/assets/mi.jpg"
            class="center"
            style="margin-top: 15px; width: 300px"
          />
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
  name: "Our story",
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
