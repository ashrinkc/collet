<template>
  <div class="landlord">
    <div class="hero">
      <img alt="Vue logo" src="../assets/logo.png" class="logo" style="width:130px">
      <!-- <img src="../assets/image7.jpg" alt> -->
      <h2>Estate Agents</h2>
      <h3>we work with some of the most reputable estate agents in london</h3>
      <p>With locations all around we are constantly searching for new properties to add to our expanding portfolio. We primarily focus on properties located in Central London and surroundings areas. Our business approach reflects our core values about creating win-win relationships and providing complete business transparency and professionalism. This is what we offer to Estate Agents across London. When you choose to rent your properties with us, we guarantee peace of mind, regular monthly rental payments as well as property maintenance conducted by our team of experienced and trained professionals. We provide all the required references and additional information necessary in order to ensure we build a trusted partnership. If you would like to discuss a business opportunity with us or wish to know more about our company, please contact us via email on: info@christopherneilpm.co.uk</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Agent"
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
  font-size: 1.2em;
  text-transform: capitalize;
  color: #30336b;
  margin-left: 15px;
  text-align: left;
  margin-top: 35px;
  margin-bottom: 26px;
}
.landlord p {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 0.9em;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 2.2;
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


