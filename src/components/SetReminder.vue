<!-- This component is a part of the "DashboardPage.vue" as it renders 
a form which allows users to set reminder.
The input form include: select option, date input
Once user submits this form, the data of user input is emitted to parent component

Vue concepts in this component:
1. event handler (with .prevent modifier)
2. form input binding
3. custom event
4. single file component
 -->
<template>
  <!-- a container to let user set their reminders -->
  <form v-on:submit.prevent="addEvent">
    <label for="event-type">Event</label>
    <!-- allows the user to choose the activity for which they would like to set reminder for -->
    <select id="event-type" name="event-type" v-model="thisevent">
      <option value="Watch C# Tutorials">Watch C# Tutorials</option>
      <option value="Watch Python Tutorials">Watch PythonTutorials</option>
      <option value="Watch Ruby Tutorials">Watch Ruby Tutorials</option>
      <option value="Watch HTML Tutorials">Watch HTML Tutorials</option>
      <option value="Watch JavaScript Tutorials">Watch JavaScript Tutorials</option>
      <option value="Watch PHP Tutorials">Watch PHP Tutorials</option>
      <option value="Watch Swift Tutorials">Watch Swift Tutorials</option>
      <option value="Watch Data Science Tutorials">Watch Data Science Tutorials</option>
      <option value="Watch Game Development Tutorials">Watch Game Development Tutorials</option>
      <option value="Watch Cyber Security Tutorials">Watch Cyber Security Tutorials</option>
    </select>

    <!-- allows the user to set the date for when they would like to set reminder for -->
    <label for="date">Date</label>
    <input type="date" id="date" name="date" v-model="thisdate" />

    <!-- submit button -->
    <div class="submission">
      <button type="submit" value="done">submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    // variables used for binding form input
    return {
      event: "",
      date: "",
      today: new Date(),
      thisdate: null,
      thisevent: null
    };
  },

  methods: {
    /**
     * @description passes user input to parent component
     * @returns object {event, date} to parent component
     */
    addEvent: function() {
      var shouldProceed = this.checkInput();
      if (shouldProceed) {
        this.$emit("formdata", { event: this.event, date: this.date });
      }
    },

    /**
     * @description changes the form of date input for display purposes
     */
    changeDateForm: function() {
      var d = new Date(this.thisdate); // parses the date to a date data type
      var day = d.getDay();
      // this part helps setting the date in a user-readable form
      var daylist = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var daydate = d.getDate();
      var month = d.getMonth();
      var monthlist = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var year = d.getFullYear();
      // format of date for display
      var date =
        daylist[day] + ", " + daydate + " " + monthlist[month] + " " + year;
      this.date = date;
    },

     /**
     * @description ensures that user filled in both input
     * @throws error alert
     * @link programming logic https://photos.app.goo.gl/mKVzdJsMBctiTyys7
     */
    checkInput: function() {
      var d = new Date(this.thisdate);
      if (this.thisdate != null && this.thisevent != null && d >= this.today) {
        this.changeDateForm();
        this.event = this.thisevent;
        this.thisevent = null;
        this.thisdate = null;
        return true;
      } else {
        alert("Invalid input!");
      }
    }
  }
};
</script>

<style scoped>
/* additional styles for set reminder box */
form {
  width: 75%;
  margin-left: 0.5em;
  margin-right: 1em;
  height: 225px;
  display: flex;
  flex-direction: column;
}

/* styles the title for each filter section. city and dates are both filter sections */
form label {
  font-size: 18px;
  margin-top: 10px;
  font-weight: 500;
  color: rgba(102, 72, 149, 1);
}

/* style the input boxes */
form input,
form select {
  margin-top: 10px;
  width: 50%;
  height: 30px;
  box-sizing: border-box;
}

/* style the submit button */
.submission button {
  background-color: rgba(102, 72, 149, 1);
  color: white;
  height: 30px;
  width: 5rem;
  border: none;
  border-radius: 5px 5px 5px 5px;
  font-weight: 300;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
}
</style>
