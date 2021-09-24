<!-- This component is a whole page static component,
which contains a form prompting for user's email.
to stay within the scope of sit120, the page is completely front-end
and form is not submitted to any database.

Vue concepts in this component:
1. single file component
2. component registration
 -->

<template>
  <!-- entire page container -->
  <div>
    <!-- navbar -->
    <BasicNavbar></BasicNavbar>
    <!-- content container -->
    <div class="container">
      <!-- decorative image container -->
      <div class="decorative_image">
        <img src="@/assets/decorative.png" />
      </div>
      <!-- register box container -->
      <div id="register_container">
        <form>
          <!-- container for email -->
          <div class="input_container">
            <!-- label for input -->
            <div class="input_heading">
              <label for="email_input">Email</label>
            </div>
            <!-- input box -->
            <input class="user_input" placeholder="byuliani@deakin.edu.au" />
          </div>
          <!-- container for button -->
          <div id="button_container">
            <!-- routes to next configuration -->
            <router-link class="link" to="/otp" style="margin-top:20px;">
              <button id="register_button" type="submit">
                Next
              </button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// imports child component
import BasicNavbar from '../components/BasicNavbar.vue'

export default {
  // register component
  components: {
    BasicNavbar,
  },
}
</script>

<style scoped>
/* styles container for decorative image */
.decorative_image {
  margin-top: 150px;
  width: 40%;
  height: 40%;
}

/* sizes and position of image */
.decorative_image img {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

/* content box */
.container {
  display: flex;
  flex-direction: row;
}

/* style for register box */
#register_container {
  margin-top: 250px;
  height: 280px;
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

/* stlyes input = email */
.input_container {
  margin: 8% 5% 0% 5%;
}

/* text or label for input */
.input_heading {
  color: rgba(102, 72, 149, 1);
  font-weight: 600;
  font-size: 2em;
}

/* user input box */
.user_input {
  background-color: rgba(102, 72, 149, 1);
  margin-top: 4%;
  width: 100%;
  height: 60px;
  border-radius: 40px;
  color: white;
  font-size: 1.5em;
  opacity: 1;
  padding-left: 6%;
  border: none;
  margin-bottom: 1%;
}

/* effect whe input box is clicked */
.user_input:focus {
  outline: none;
  box-shadow: 0 0 10px grey;
}

/* positioning of button container */
#button_container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}

/* button styling */
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

/* effect when button is hovered pn */
#register_button:hover {
  color: rgba(102, 72, 149, 1);
  background-color: grey;
  cursor: pointer;
}

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
