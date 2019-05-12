
<template>
  <div class="home">
    <div class="contact-bg">
      <div class="hero-title">
        <h1>contact us</h1>
        <h2>Property Management. Let Us Do the work</h2>
      </div>
    </div>

    <div class="site">
      <h2>Contact</h2>
      <div class="contact-section-1">
        <div class="details">
          <p>To enquire about the availability of any of our rooms, or for more information about what we do, please contact by either calling us, sending us an email or simply fill out the form below</p>
          <h3>Email us</h3>
          <p>For any enquires click on the following email address to email us</p>
          <a href="mailto:someone@yoursite.com">someone@yoursite.com</a>
          <button class="button">Find Out More</button>
        </div>
        <img src="../assets/contact-img.jpeg" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style >
@import url("https://fonts.googleapis.com/css?family=Poppins:400,700,900|Quattrocento+Sans:400,700");
.contact-bg {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/contact.jpeg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}

.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.hero-title h1 {
  text-transform: uppercase;
  font-size: 4em;
}
.hero-title h2 {
  text-transform: capitalize;
  font-size: 1.6em;
}
.site {
  width: 95%;
  margin: 0 auto;
}

.site h2 {
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 1.5em;
  text-transform: capitalize;
  color: #30336b;
  text-align: left;
  margin-left: 30px;
}
.button {
  background-color: #30336b;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 42px;
  cursor: pointer;
}
.site img {
  width: 100%;
  height: auto;
  padding: 2px;
}
.site h2 {
  text-align: center;
  margin-top: 90px;
  margin-bottom: 90px;
  font-weight: 600;
  font-size: 1.8em;
}

/* section */
.contact-section-1 {
  display: grid;
  grid-template-columns: repeat(2, 700px);
  grid-template-rows: repeat(1, 500px);
}
.details {
  display: grid;
  align-content: center;
}
.details button {
  width: 170px;
  margin-left: 30px;
}
.details p {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 0.95em;
  padding: 15px;
  margin-left: 20px;
  width: 80%;
  font-weight: 400;
  line-height: 2;
}
.details h3 {
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 1.3em;
  text-transform: capitalize;
  color: #30336b;
  text-align: left;
  margin-left: 35px;
  font-weight: 600;
}
.details a {
  color: #30336b;
  text-decoration: none;
  text-align: left;
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 1.3em;
  margin-left: 30px;
  margin-bottom: 20px;
}
.details a:hover {
  cursor: pointer;
}
</style>







