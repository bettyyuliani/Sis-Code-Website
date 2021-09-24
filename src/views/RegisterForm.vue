<!-- This component is a whole page static component,
which contains a form prompting for user's register details.
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
    <div class="container" style="margin-top: 60px">
      <!-- dcorative image container -->
      <div class="decorative_image">
        <img src="../assets/decorative.png" />
      </div>

      <!-- register box container -->
      <div id="register_container">
        <form>
          <!-- full name container -->
          <div class="input_container" style="margin-top: 10%;">
            <div class="input_heading">
              <!-- label for user full name input box -->
              <label for="name_input">Full Name</label>
            </div>
            <!-- user input box -->
            <input class="user_input" name="name_input" placeholder="Betty Yuliani" />
          </div>
          <!-- phone number container -->
          <div class="input_container">
            <!-- label for user phone number input box -->
            <div class="input_heading">
              <label for="number_input">Phone Number</label>
            </div>
            <!-- user input box -->
            <input class="user_input" name="number_input" placeholder="12344232" />
          </div>
          <!-- password container -->
          <div class="input_container">
            <!-- label for user password input box -->
            <div class="input_heading">
              <label for="pass_input">Password</label>
            </div>
            <!-- user input box -->
            <input class="user_input" name="pass_input" type="password" placeholder="***********" />
          </div>

          <!-- description for password -->
          <p id="password_description">
            Password should contain a mix of upper and lowercase letters, numbers,
            <br />
            and at least one non-alphanumeric character (.!*)
          </p>

          <!-- confirm password container -->
          <div class="input_container">
            <!-- label for confirm password input box -->
            <div class="input_heading">
              <label for="pass_input">Password</label>
            </div>
            <!-- user input box -->
            <input class="user_input" name="pass_input" type="password" placeholder="***********" />
          </div>
          <!-- button container -->
          <div id="button_container">
            <!-- routes to next page -->
            <router-link class="link" to="/login" style="margin-top:20px;">
              <button id="register_button" type="submit">
                Register
              </button>
            </router-link>
          </div>
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
/* container for decorative image */
.decorative_image {
  margin-top: 150px;
  width: 40%;
  height: 40%;
}

/* styles size of image */
.decorative_image img {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

/* content container */
.container {
  display: flex;
  flex-direction: row;
}

/* register box container */
#register_container {
  margin-top: 7%;
  height: 600px;
  width: 500px;
  max-width: 70%;
  border: 15px solid rgba(102, 72, 149, 1);
  border-radius: 20px;
  box-shadow: 5px 10px 5px #888888;
  padding-left: 2%;
  padding-right: 2%;
  margin-right: 7%;
  margin-left: 10%;
}

/* container for each user input */
.input_container {
  margin: 5% 5% 0% 5%;
}

/* label for each input box */
.input_heading {
  color: rgba(102, 72, 149, 1);
  font-weight: 600;
  font-size: 1.6em;
}

/* user input box */
.user_input {
  background-color: rgba(102, 72, 149, 1);
  width: 100%;
  height: 40px;
  border-radius: 40px;
  color: white;
  font-size: 1.5em;
  opacity: 1;
  padding-left: 6%;
  border: none;
}

/* effect when user input box is clicked */
.user_input:focus {
  outline: none;
  box-shadow: 0 0 10px grey;
}

/* positioning container of button */
#button_container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}

/* styles for button */
#register_button {
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

/* effect when button is hovered on */
#register_button:hover {
  color: rgba(102, 72, 149, 1);
  background-color: grey;
  cursor: pointer;
}

/* positioning for text of describing password */
#password_description {
  margin-left: 25px;
  margin-top: 2%;
  color: rgba(102, 72, 149, 1);
}

@media only screen and (max-width: 1000px) {
  .decorative_image {
    display: none;
  }

  .container {
    align-items: center;
    justify-content: center;
    margin: 0;
  }
}
</style>
