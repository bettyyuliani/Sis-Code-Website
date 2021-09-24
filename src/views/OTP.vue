<!-- This component is a whole page static component,
which contains a form prompting for OTP.
to stay within the scope of sit120, the page is completely front-end
and form is not submitted to any database.

Vue concepts in this component:
1. single file component
2. component registration
 -->

<template>
  <!-- entire page container -->
  <div>
    <!-- dynamic component for navbar -->
    <component :is="'BasicNavbar'"></component>
    <!-- content container -->
    <div class="container">
      <!-- decorative image container -->
      <div class="decorative_image">
        <img src="../assets/decorative.png" />
      </div>

      <!-- register box container -->
      <div id="register_container">
        <!-- title -->
        <p id="verify">Verifying OTP</p>
        <!-- description -->
        <p id="description">
          Please enter the 4 digit OTP code that we have sent to your email
        </p>
        <!-- creates 4 square input boxes -->
        <form>
          <div class="input_container">
            <!-- input box 1 -->
            <input id="codeBox1" type="number" maxlength="1" onkeyup="onKeyUpEvent(1, event)" onfocus="onFocusEvent(1)">
            <!-- input box 2 -->
            <input id="codeBox2" type="number" maxlength="1" onkeyup="onKeyUpEvent(2, event)" onfocus="onFocusEvent(2)">
            <!-- input box 3 -->
            <input id="codeBox3" type="number" maxlength="1" onkeyup="onKeyUpEvent(3, event)" onfocus="onFocusEvent(3)">
            <!-- input box 4 -->
            <input id="codeBox4" type="number" maxlength="1" onkeyup="onKeyUpEvent(4, event)" onfocus="onFocusEvent(4)">
          </div>
          <!-- container for button  -->
          <div id="button_container">
            <router-link class="link" to="/registerform" style="margin-top:20px;">
              <button id="verify_button" type="submit">Verify</button>
            </router-link>
          </div>
          <!-- redirects to other page when user wishes to resend OTP -->
          <a href=""><p id="resend">Resend OTP</p></a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import child components
import BasicNavbar from '../components/BasicNavbar.vue'

export default {
  // register component
  components: {
    BasicNavbar,
  },
}
</script>

<style scoped>
/* position container for decorative image */
.decorative_image {
  margin-top: 150px;
  width: 40%;
  height: 40%;
}

/* styles for decorative image */
.decorative_image img {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

/* layout for content container */
.container {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

/* text for resend otp */
#resend {
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
}

/* register box */
#register_container {
  margin-top: 200px;
  height: 390px;
  width: 500px;
  max-width: 70%;
  border: 15px solid rgba(102, 72, 149, 1);
  border-radius: 20px;
  box-shadow: 5px 10px 5px #888888;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 7%;
  margin-left: 10%;
}

/* title */
#verify {
  color: rgba(102, 72, 149, 1);
  font-weight: 600;
  font-size: 1.6em;
  font-weight: 700;
  margin: 20px;
}

/* description of box */
#description {
  color: rgba(102, 72, 149, 1);
  font-weight: 400;
  font-size: 1.2em;
  margin-left: 20px;
}

/* styles for 4 boxes */
.input_container {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* styles for each box */
input[type='number'] {
  height: 70px;
  width: 70px;
  font-size: 25px;
  text-align: center;
  background-color: rgba(102, 72, 149, 1);
  color: white;
  border-radius: 8px;
  margin: 30px 10px 10px 0;
  font-size: 2.5em;
  border: none;
}

/* uses platform native styling for the input box */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* positions container for button */
#button_container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}

/* style for verifying button */
#verify_button {
  font-size: 1.5em;
  color: white;
  background-color: rgba(102, 72, 149, 1);
  margin-top: 6%;
  width: 170px;
  height: 60px;
  font-weight: 550;
  border-radius: 30px;
  border: none;
}

/* effect when button is hovered */
#verify_button:hover {
  color: rgba(102, 72, 149, 1);
  background-color: grey;
  cursor: pointer;
}

/* media query for responsiveness. applies when screen is under 1000px */
@media only screen and (max-width: 1000px) {
  .decorative_image {
    display: none;
  }

  .container {
    align-items: center;
    justify-content: center;
  }

  #register_container {
    align-items: center;
  }
}
</style>
