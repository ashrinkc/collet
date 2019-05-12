<template>
  <div class="landlord">
    <div class="hero">
      <img alt="Vue logo" src="../assets/logo.png" class="logo" style="width:130px">
      <!-- <img src="../assets/image7.jpg" alt> -->
      <h2>Landlords</h2>
      <h3>The right tenants</h3>
      <p>We have expertise in handling multiple tenants in one property. We take every care to source the right tenants in the first place, renting only to young professionals in full-time employment and mature students, and we organise deposits and registrations.</p>
      <h3>Guaranteed rents</h3>
      <p>
        By leasing your property to Big Egg Properties for a minimum period of three years, you will receive rent on time every month direct from us. That means no more chasing late or missed payments, no more dealings with problem tenants and no more rental
        voids. All utility bills will also be paid from our bank account.
      </p>
      <h3>Property maintenance</h3>
      <p>
        As a professional property share company, it is our mission to provide a supreme level of professional care and management for both Landlords, agents and residents. We have established a trusted community where residents can enjoy
        a positive and social environment and where landlords and investors can enjoy peace of mind with financial security.
      </p>
      <p>
        We provide fortnightly cleaning services at our properties, plus regular gardening services if required. Small repairs and maintenance issues will also be taken care of as they arise.
        We carry out regular property inspections every two months. When required, we will lightly refurbish your property and liaise with you to address larger maintenance issues.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Landlords"
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
  font-size: 0.8em;
  padding-left: 15px;
  padding-right: 15px;
}
</style>

