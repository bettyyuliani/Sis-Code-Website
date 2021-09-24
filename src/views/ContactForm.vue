<!-- This component is a whole page component
which contains a queries form. however, to stay within the scope of SIT120,
the form is still entirely front-end and is not submitted to any database 

Vue concepts in this component:
1. single file component
2. component registration
3. transition
4. conditional rendering
5. list rendering
6. event handling
 -->


<template>
  <section id="queries_form_section" class="queries_form_section">
    <!-- navigation bar -->
    <BasicNavbar></BasicNavbar>

    <!-- container for entire form  -->
    <div id="queries_form">
      <!-- container for entire heading -->
      <div id="banner_container">
        <!-- heading for form -->
        <div id="queries_form_container">
          <p id="heading">Queries Form</p>
          <!-- description under heading -->
          <p id="description">
            As we endeavour to reply to your queries as soon as possible, please allow up to 3
            business days for a response.
          </p>
        </div>
        <!-- container for small red banner-->
        <div class="banner">
          <!-- image for banner -->
          <img id="banner" src="../assets/banner.png" />
        </div>
      </div>

      <!-- creates a form for user input  -->
      <form action="">
        <!-- container for first question -->
        <div class="question_container">
          <!-- prompting for input -->
          <div class="questionprompt">
            <!-- decorative number sitting beside question statement -->
            <img class="questionnum" src="../assets/num1.png" />
            <div class="question">Please enter your full name</div>
            <br />
            <input class="userinput" id="fullname" type="text" placeholder="Betty Yuliani" />
          </div>
        </div>

        <!-- container for second question -->
        <div class="question_container">
          <!-- prompting for input -->
          <div class="questionprompt">
            <!-- decorative number sitting beside question statement -->
            <img class="questionnum" src="../assets/num2.png" />
            <div class="question">Please enter your email</div>
            <br />
            <input class="userinput" id="email" type="text" placeholder="byuliani@deakin.edu.au" />
          </div>
        </div>

        <!-- container for third question -->
        <div class="question_container">
          <!-- prompting for input -->
          <div class="questionprompt">
            <!-- decorative number sitting beside question statement -->
            <img class="questionnum" src="../assets/num3.png" />
            <div class="question dropdown-container">
              What is your enquiry about?
            </div>
            <!-- creates a dropdown list of to let user select from -->
            <div class="dropdown" v-on:click="toggledropdown">
              {{ selectedOption }}
              <!-- icon -->
              <i class="fas fa-chevron-down"></i>
            </div>

            <!-- transition to appear the options, hidden by default -->
            <transition name="slide">
              <transition-group tag="ul" name="slide" class="dropdown-list" v-if="dropdown">
                <!-- list rendering for all options -->
                <li v-for="(item, index) in options" v-on:click="select(index)" :key="index" class="dropdown-item">
                  {{ item }}
                </li>
              </transition-group>
            </transition>
          </div>
        </div>

        <!-- container for forth question -->
        <div class="question_container">
          <!-- prompting for input -->
          <div class="questionprompt">
            <!-- decorative number sitting beside question statement -->
            <img class="questionnum" src="../assets/num4.png" alt="" />
            <div class="question">
              Provide your questions or feedback here
              <p style="font-size: 12px; font-weight: 400;">
                Please provide enough details so we can assist you
              </p>
            </div>
            <textarea class="textarea_input" name="enquiries" id="textareainput" cols="10" rows="8" placeholder="Write something here..."></textarea>
          </div>
        </div>

        <!-- container for button to send the form -->
        <div id="button_container">
          <button id="send_request" type="submit">Send Request</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
/* initializes all placeholder as wide */
::placeholder {
  color: white;
}

/* styling for entire page */
.queries_form_section {
  height: 100%;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  background-color: rgb(235, 235, 235);
}

/* styling for entire form container */
#queries_form {
  display: block;
  width: 650px;
  max-width: 90%;
  border-radius: 20px;
  margin-top: 160px;
  margin-bottom: 60px;
  background-color: white;
  box-shadow: 5px 10px 5px #888888;
}

/* styling for header */
#banner_container {
  background-color: rgba(102, 72, 149, 1);
  width: 100%;
  height: 110px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  box-shadow: 5px 2px 5px #888888;
}

/* styling for container of title and description */
#queries_form_container {
  float: left;
  width: 80%;
  padding: 12px 0 0 32px;
  display: flex;
  flex-wrap: wrap;
}

/* styling for title */
#heading {
  color: white;
  font-size: 40px;
  font-weight: 700;
}

/* styling for description */
#description {
  color: white;
  font-weight: 500;
  font-size: 12px;
  width: 80%;
}

/* styling for banner ribbon image */
#banner {
  width: 150px;
  display: inline-block;
  margin-right: 20px;
}

/* container for question */
.question_container {
  width: 100%;
  vertical-align: middle;
  margin-top: 50px;
  display: inline-block;
}

/* small image for question number */
.questionnum {
  width: 50px;
  transform: translateX(-25px) translateY(-15px);
  vertical-align: middle;
  float: left;
  padding-top: 0;
}

/* styling for question statement */
.question {
  font-size: 20px;
  vertical-align: middle;
  display: inline;
  color: rgba(102, 72, 149, 1);
  font-weight: 700;
  font-style: italic;
}

/* ====STYLING FOR CUSTOM SELECT STARTS HERE==== */

.dropdown {
  background-color: rgba(102, 72, 149, 1);
  height: 35px;
  border-radius: 40px;
  color: white;
  font-size: 1em;
  opacity: 1;
  border: none;
  margin: 10px 0 0 50px;
  padding: 10px 0 0 30px;
  width: 35%;
  cursor: pointer;
  font-weight: 400;
}

.dropdown-list {
  list-style: none;
  background-color: rgba(102, 72, 149, 1);
  border-radius: 20px;
  color: white;
  font-size: 1em;
  opacity: 1;
  border: none;
  margin: 0 0 1% 50px;
  padding: 10px 0 10px 30px;
  width: 35%;
  cursor: pointer;
  font-weight: 400;
}

.dropdown-container {
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

/* styling for each item */
.dropdown-item {
  width: 100%;
  margin: 5px;
}

/* effect when user hovers */
.dropdown-item:hover {
  margin: 10px;
  font-size: 20px;
}

/* styling for transition of dropdown box */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

/* ====STYLING FOR CUSTOM SELECT FINISHES HERE==== */

/* box for user input */
.userinput {
  background-color: rgba(102, 72, 149, 1);
  width: 150px;
  height: 45px;
  border-radius: 40px;
  color: white;
  font-size: 1em;
  opacity: 1;
  padding-left: 6%;
  border: none;
  margin-bottom: 1%;
  margin-top: 10px;
}

/* styles for input boxes */
input#email {
  width: 200px;
}

.textarea_input {
  background-color: rgba(102, 72, 149, 1);
  border-radius: 15px;
  width: 70%;
  color: white;
  font-size: 1em;
  opacity: 1;
  padding-left: 2%;
  padding-top: 2%;
  border: none;
  margin-bottom: 1%;
}

/* effect when each input is clicked on */
.userinput:focus {
  outline: none;
  box-shadow: 0 0 10px grey;
}

.textarea_input:focus {
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
  margin-bottom: 20px;
}

#send_request {
  font-size: 1.2em;
  color: white;
  background-color: rgba(102, 72, 149, 1);
  margin-top: 3%;
  width: 170px;
  height: 60px;
  font-weight: 550;
  border-radius: 30px;
  border: none;
  cursor: pointer;
}

#send_request:hover {
  background-color: rgb(235, 235, 235);
  color: rgba(102, 72, 149, 1);
}

/* media queries for responsiveness */
@media only screen and (max-width: 530px) {
  #banner {
    display: none;
  }
}
</style>

<script>
// import child components
import BasicNavbar from '../components/BasicNavbar.vue'
export default {
  components: {
    BasicNavbar,
  },
  data() {
    return {
      // list of options
      options: [
        'Feedback',
        'Mentoring',
        'Registering to Sis Code',
        'Upcoming events',
        'Payment',
        'Others',
      ],
      // initial option
      selectedOption: 'Select an option',
      // for displaying dropdown
      dropdown: false,
    }
  },
  mounted() {},
  methods: {
    /**
     * @description togges between opening and closing dropdown options
     */
    toggledropdown: function() {
      this.dropdown = !this.dropdown
    },
    /**
     * @description sets the option user has selected
     * @param index of option
     */
    select: function(index) {
      this.selectedOption = this.options[index]
      this.dropdown = false // closes the dropdown menu
    },
  },
}
</script>
