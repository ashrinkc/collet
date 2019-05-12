<template>
  <div class="home">
    <div class="bg">
      <div class="hero-title">
        <h1>collect</h1>
        <h2>Property Management. Let Us Do the work</h2>
      </div>
    </div>

    <div class="site">
      <h2>About us</h2>
      <div class="section-1">
        <div class="details">
          <h3>Who we are (what the name represents)</h3>
          <p>
            COLETT is a brand of trust. We work in Synergy and co-work with different sections of our
            team to reach the goal. We believe in stronger foundation for
            a higher growth and the pillar lies in satisfying our clients and customers.
            We are London based company with in-depth experience in manging residential properties.
            We work to create a sound living space where our tenant can call it a
            ‘home’ and build their dreams in it. We aspire to keep our tenants happy,
            producing an appeasing environment uplifting the space and the community.
          </p>
          <button class="button">Find Out More</button>
        </div>
        <img src="../assets/section-1.jpg" alt>
      </div>
      <h2>where can we help</h2>
      <div class="section-1">
        <img src="../assets/detail2.jpeg" alt>
        <div class="details">
          <h3>Landlords</h3>
          <p>
            We have expertise in handling multiple tenants in one property.
            We take every care to source the right tenants in the first place,
            renting only to young professionals
            in full-time employment and mature students,
            and we organise deposits and registrations.
          </p>

          <h3>Tenants</h3>
          <p>
            We believe a house should feel like home.
            That’s why we are committed to providing properties
            that are kept in immaculate condition and shared by
            friendly people. We only rent to working professionals and mature students whose priority is to live in a high-quality and comfortable house with like-minded housemates
          </p>
          <h3>Estate Agents</h3>
          <p>we are proud to work with some of the most reputable estate agents in london</p>
          <button class="button">Find Out More</button>
        </div>
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
.bg {
  background: url("../assets/bg-3.jpg") no-repeat center center;
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
.section-1 {
  display: grid;
  grid-template-columns: repeat(2, 800px);
  grid-template-rows: repeat(1, auto);
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

