<template>
  <div class="FAQ">
    <div class="hero">
      <img alt="Vue logo" src="../assets/logo.png" class="logo" style="width:130px">
      <!-- <img src="../assets/image7.jpg" alt> -->
      <h2>TENANTS FAQ's</h2>
      <h3>​Do you reference and credit check? How much does this cost?​</h3>
      <p>
        Yes we do, on application we will check your references with your employer
        and current/previous landlords/agencies. We will also do a credit check.
        This costs a total of £200 which is non-returnable
      </p>

      <h3>Do I need to pay a deposit?</h3>
      <p>Yes, the deposit is equal to one month’s rent.</p>

      <h3>Do the bedrooms have locks?</h3>
      <p>All of our bedrooms have locks on the door. We know it can be daunting moving into a new household, and want to make the move as easy as possible for you.</p>

      <h3>What happens when I want to leave?</h3>
      <p>Once you are out of your initial six-month contract all you need to do is give us one calendar month’s notice. We will advertise your room and give you a minimum of 24-hours notice that someone is coming to view your room.</p>

      <h3>What's your minimum contract length?</h3>
      <p>We normally ask for a minimum of six months, which then rolls month-by-month after your initial fixed term. If you have a short contract term at work we can arrange for a shorter contract length to suit</p>

      <h3>Are there any other fees or charges?</h3>
      <p>No. The only fee you will pay is the £200 for the reference and credit check .</p>

      <h3>Do you have any rooms for couples?</h3>
      <p>Currently, no-rooms are for single occupancy only because we don’t want to overcrowd our properties and want to make sure there are enough bathroom facilities to comfortably accommodate our tenants.</p>

      <h3>Do you allow pets?</h3>
      <p>None of our properties allow pets; this is for the comfort of all of the other house-mates.</p>

      <h3>Which bills are included?</h3>
      <p>All of them. That’s gas, electricity, water, council tax, broadband and TV licence. We even throw in a fortnightly cleaner of communal areas free of charge. On occasion a gardener may pay also pay a visit to our garden properties.</p>

      <h3>How do I pay the rent?</h3>
      <p>Rent is paid via a standing order, set up to reach our account on the 1st of every month.</p>

      <h3>How do I make an appointment to book viewing?</h3>
      <p>Contact us on 0798 458 8087 to arrange a viewing. A phone call or text is fine. Please be aware we must give our current tenants 24-hours notice, so don’t expect a viewing the same day that you ring up.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FAQ"
};
</script>

<style scopped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,700,900|Quattrocento+Sans:400,700");
.FAQ {
  text-align: center;
}
.FAQ img {
  margin-top: 20px;
  width: 100%;
  height: auto;
  padding: 2px;
}
.FAQ h2 {
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 1.5em;
  text-transform: capitalize;
  color: #30336b;
  margin-left: 15px;
  text-align: left;
}
.FAQ h3 {
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 1.2em;
  text-transform: capitalize;
  color: #30336b;
  margin-left: 15px;
  text-align: left;
  margin-top: 35px;
  margin-bottom: 26px;
}
.FAQ p {
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


