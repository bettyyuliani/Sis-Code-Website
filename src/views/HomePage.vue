<!-- This component is a whole page static component,
which pieces each page section components together each section components. 

Vue concepts in this component:
1. single file component
2. component registration
 -->
<template>
  <div id="homepage">
    <!-- navbar-->
    <GuestNavbar></GuestNavbar>
    <!-- renders page sections -->
    <FirstPage></FirstPage>
    <SecondPage></SecondPage>
    <ThirdPage></ThirdPage>
    <ForthPage></ForthPage>
    <Footer></Footer>
    <router-view />
  </div>
</template>

<script>
// import child components
import GuestNavbar from '../components/GuestNavbar.vue'
import FirstPage from '../components/FirstPage.vue'
import SecondPage from '../components/SecondPage.vue'
import ThirdPage from '../components/ThirdPage.vue'
import ForthPage from '../components/ForthPage.vue'
import Footer from '../components/Footer.vue'
export default {
  // register components
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    ForthPage,
    Footer,
    GuestNavbar,
  },
}
</script>

<style>
/* importing font that will be used in the project */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap');

/* style for entire page */
#homepage {
  font-family: 'Raleway';
  padding: 0;
  margin: 0;
}
</style>
