<template>
  <div class="landlord">
    <div class="hero">
      <img alt="Vue logo" src="../assets/logo.png" class="logo" style="width:130px">
      <!-- <img src="../assets/image7.jpg" alt> -->
      <h2>Corporate</h2>
      <h3>Dedicated property management services for commercial property occupiers</h3>
      <p>We pride ourselves on our innovative, integrated approach to property management and our leading software and proprietary systems. Regardless of the size, sector or location of your asset or portfolio, maximising the value of your expenditure lies at the heart of what we do.</p>

      <h3>Why us</h3>
      <p>
        Whether seeking to review the management obligations of your landlord or investigate the requirements associated with subleasing excess space, our multi-disciplined team provide a comprehensive range of services to support you.
        Working closely with other occupier focused consultants with us, we provide tailored solutions that improve occupational efficiencies, protect your brand image and reduce operating costs.
      </p>

      <h3>Our Services</h3>
      <p>Our dedicated teams of surveyors, accountants and facilities managers provide a complete range of management and consultancy services to clients.</p>

      <h3>Accounting and treasury facilities</h3>
      <p>Managing all property related payment and collection of monies due, providing full 24/7 reporting via our web-based software.</p>
      <h3>Lease cost audit</h3>
      <p>Reviewing leases, sinking funds and service charges to ensure historical and on-going accuracy and to recover erroneous payments made to landlords, as well as ensuring comprehensive recovery from sub-tenants (if applicable).</p>
      <h3>Service charge audit</h3>
      <p>Ensuring that service charges are administered in accordance with RICS best practice and acting on your behalf should any disputes arise as a result of our investigations.</p>
      <h3>Benchmarking service charge and insurance costs</h3>
      <p>Ensuring that you are getting best value for money from the services delivered by your landlord.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Corporate"
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


