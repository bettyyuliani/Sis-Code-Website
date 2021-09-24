<!-- This component is a static webpage which makes up a section in the home page. 

vue concepts in this component:
1. router
2. single file component
-->
<template>
  <!-- container for the mentor page on the webpage -->
  <div id="forthpage" style="text-align: center; color: rgba(102, 72, 149, 1)">
    <!-- title of section -->
    <p class="mentortitle" style="font-size: 2.5rem; font-weight: 600; margin-bottom: 0; padding-top: 30px;">
      We believe, everyone can be a mentor!
    </p>
    <!-- description of section -->
    <p class="mentordesc">With 3 simple steps!</p>
    <!-- image which explains steps -->
    <img src="../assets/mentorsteps.png" />
    <!-- afterwords -->
    <p style="padding-bottom: 20px; margin-bottom: 0; font-weight: 500;">
      Once your mentor tickets are booked, we will be in contact with you!
      <br>
      Shall you have any queries regarding mentoring, contact us
      <router-link class="link" to="/contactform">here</router-link>
    </p>
  </div>
</template>

<style scoped>
/* styling for mentor page */

#forthpage {
  background-color: rgb(235, 235, 235);
}

#forthpage img {
  width: 50%;
}

/* adding responsiveness for mentor page */
@media screen and (max-width: 1000px) {
  .mentortitle {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 1.8rem !important;
  }

  #forthpage p {
    font-size: 0.8rem;
  }
}
</style>
