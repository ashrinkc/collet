<template>
  <div class="home">
    <div class="about-bg">
      <div class="hero-title">
        <h1>About us</h1>
        <h2>Property Management. Let Us Do the work</h2>
      </div>
    </div>

    <div class="site">
      <h2>About us</h2>
      <div class="about-section-1">
        <div class="details">
          <h3>COLLET</h3>
          <p>
            Collet Properties is a unique London based property investment company operating on multiple levels. We are not only passionate about property, but also have the skills, expertise, and experience to deliver a high quality service to both our landlords and clients. We work closely with independent and corporate agents to provide a home for professional individuals for a superior way of living within the Capital.
            As a professional property share company, it is our mission to provide a supreme level of professional care and management for both Landlords, agents and residents. We have established a trusted community where residents can enjoy a postive and social environment and where landlords and investors can enjoy peace of mind with financial security.
            ​We are looking for new homes in great locations for long term tenancies that guarantees your landlords security of tenancy.
            ​We create and design exclusive homes for working professional residents, the properties are taken care of by our experienced property managers and we provide the support and cleaning services to encourage the continued maintenance of your property.
          </p>
          <button class="button">Find Out More</button>
        </div>
        <img src="../assets/about-1.jpeg" alt>
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
.about-bg {
  background: url("../assets/about.jpeg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}

.hero-title {
  position: absolute;
  top: 80%;
  left: 49%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.hero-title h1 {
  text-transform: uppercase;
  font-size: 4em;
  text-align: center;
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
.about-section-1 {
  display: grid;
  grid-template-columns: repeat(2, 800px);
  grid-template-rows: repeat(1, 700px);
  grid-gap: 20px;
  margin-top: 40px;
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
</style>


