<!-- This component is a whole page static component,
which contains a login form prompting for user's login details.
to stay within the scope of sit120, the page is completely front-end
and form is not submitted to any database.

Vue concepts in this component:
1. single file component
2. component registration
 -->
<template>
  <!-- page container -->
  <div>
    <!-- navbar -->
    <BasicNavbar></BasicNavbar>
    <!-- content container -->
    <div class="container">
      <!-- decorative image container -->
      <div class="decorative_image">
        <img src="@/assets/decorative.png" />
      </div>

      <!-- login box container -->
      <div id="login_container">
        <form>
          <!-- email container -->
          <div class="input_container" style="margin-top: 35px;">
            <!-- labelling input -->
            <div class="input_heading">
              <label for="email_input">Email</label>
            </div>
            <!-- input box -->
            <input class="user_input" name="email_input" placeholder="byuliani@deakin.edu.au" />
          </div>

          <!-- password container -->
          <div class="input_container">
            <div class="input_heading">
              <!-- labelling input -->
              <label for="pass_input">Password</label>
            </div>
            <!-- input box -->
            <input class="user_input" name="pass_input" type="password" placeholder="***********" />
          </div>
          <!-- button container -->
          <div id="button_container">
            <!-- redirects to dashboard page when successfully logged in -->
            <router-link class="link" to="/dashboard" style="margin-top:20px;">
              <button id="login_button" type="submit">
                Sign In
              </button>
            </router-link>
          </div>
          <!-- extra texts -->
          <p class="register">Don't have an account?</p>
          <router-link class="link" to="/register">
            <button class="register">Create One</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import child component
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
  margin-top: 200px;
  width: 40%;
  height: 40%;
}

/* styles decorative image */
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
}

/* styles for login box */
#login_container {
  margin-top: 240px;
  height: 420px;
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

/* styles for each input box */
.input_container {
  margin: 5% 5% 0% 5%;
}

/* styles for input label */
.input_heading {
  color: rgba(102, 72, 149, 1);
  font-weight: 600;
  font-size: 1.6em;
}

/* styles for user input box */
.user_input {
  background-color: rgba(102, 72, 149, 1);
  width: 100%;
  height: 60px;
  border-radius: 40px;
  color: white;
  font-size: 1.5em;
  opacity: 1;
  padding-left: 6%;
  border: none;
}

/* effect when box is clicked */
.user_input:focus {
  outline: none;
  box-shadow: 0 0 10px grey;
}

/* styles for button */
#button_container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}

#login_button {
  font-size: 1.5em;
  color: white;
  background-color: rgba(102, 72, 149, 1);
  width: 170px;
  height: 60px;
  font-weight: 550;
  border-radius: 30px;
  border: none;
  text-decoration: none;
}

/* put link to register in center */
.link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.register {
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
  color: rgba(102, 72, 149, 1);
}

/* styles for register button */
button.register {
  background: none;
  text-decoration: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

/* effect when button is hovered */
#login_button:hover {
  background-color: grey;
  color: rgba(102, 72, 149, 1);
  cursor: pointer;
}

/* media queries for responsiveness, applies when screen is smaller than 1000px */
@media only screen and (max-width: 1000px) {
  .decorative_image {
    display: none;
  }

  .container {
    align-items: center;
    justify-content: center;
  }

  #login_container {
    margin-top: 200px;
    align-items: center;
  }
}
</style>
