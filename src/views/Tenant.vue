<template>
  <div class="landlord">
    <div class="hero">
      <img alt="Vue logo" src="../assets/logo.png" class="logo" style="width:130px">
      <!-- <img src="../assets/image7.jpg" alt> -->
      <h2>Tenant</h2>
      <h3>The right tenants</h3>
      <p>
        We believe a house should feel like home. That’s why we are committed to providing properties that are kept in immaculate condition and shared by friendly people. We only rent to working professionals and mature students whose priority is
        to live in a high-quality and comfortable house with like-minded housemates.
      </p>
      <h3>Why use us?</h3>
      <ul>
        <li>Fully furnished and neutrally decorated rooms</li>
        <li>Lounge with a large flat screen TV and comfy sofa.</li>
        <li>Bedrooms include a wardrobe and a desk</li>
        <li>High-speed broadband</li>
        <li>Fitted with smoke alarms and fire doors</li>
        <li>Fortnightly professional cleaning</li>
        <li>Close to amenities and transport links</li>
        <li>All bills included , no hidden fees​</li>
      </ul>
      <p>We’re here to help so contact our experienced team today on 0754 079 4348 to discuss your personal requirements</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tenant"
};
</script>

<style scopped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,700,900|Quattrocento+Sans:400,700");
.landlord {
  text-align: center;
}
.landlord img {
  margin-top: 20px;
  width: 100%;
  height: auto;
  padding: 2px;
}
.landlord h2 {
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 1.5em;
  text-transform: capitalize;
  color: #30336b;
  margin-left: 15px;
  text-align: left;
}
.landlord h3 {
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 1em;
  text-transform: capitalize;
  color: #30336b;
  margin-left: 15px;
  text-align: left;
}
.landlord p {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 0.9em;
  padding-left: 15px;
  padding-right: 15px;
}
ul {
  text-align: left;
}
ul li {
  margin-top: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 0.9em;
}
</style>


