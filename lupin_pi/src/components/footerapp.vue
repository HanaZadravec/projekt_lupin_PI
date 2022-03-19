<template>
  <div style="background-color: #d2c1a7">
    <div
      class="container"
      style="
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 40px;
        padding: 64px 0 64px 0;
      "
    >
      <div
        class="row"
        style="
          width: 80%;
          height: 7%;
          background-color: #d2c1a7;
          color: black;
          margin: auto;
        "
      >
        <div class="col-md-4 col-4">
          <h2>About Us</h2>
          <a href="/ourstory">Our story</a> <br />
          <a href="/ourteam">Our team</a> <br />
          <a href="/termsofservice">Terms of service</a> <br />
        </div>
        <div class="col-md-4 col-4">
          <h2>Contact Us</h2>
          <a href="/contact">Contact</a> <br />
          <a href="/sponsors">Sponsors</a>
        </div>
        <div class="col-md-4 col-4">
          <h2>Social Media</h2>
          <a href="https://www.instagram.com">Instagram</a> <br />
          <a href="https://www.facebook.com">Facebook</a> <br />
          <a href="https://twitter.com">Twitter</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" style="text-align: center">
        <div class="col-md-12 col-12">
          <p>© 2022 Lupin</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.col-md-4 h2 {
  margin-bottom: 24px;
  font-size: 180%;
}
.col-md-4 a {
  text-decoration: none;
  color: black;
  margin-bottom: 6px;
}
.col-md-4 a:hover {
  color: white;
  text-decoration: none;
  transition: 0.4s;
}
</style>
<script>
export default {
  name: "footer_app",
};
</script>
