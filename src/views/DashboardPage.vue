<!-- This component is a whole page component,
which is essentially a dashboard page. the dashboard has 5 panels:
- a panel to let users set reminders, 
- a panel which displays list of reminders & events (from tickets booking),
- a panel for burndown chart which depicts the upcoming reminders & events (within 90 days),
- a panel for on track score, calculated from chart's gradient
- a panel for notifications to describe score (with v-if)
the communication between these sections/components relies heavily on props & custom events,
and is illustrated here:
https://photos.app.goo.gl/GFvqm8mi5nq3Hb2H6

it is worth noting that, through the integration of Vuex,
the data emitted from "SetReminder.vue" to "DashboardPage.vue" is pushed by "DashboardPage.vue" into Vuex's state,
instead of being stored in "DashboardPage.vue"'s data property.

Vue concepts in this component:
1. single file component
2. component registration
3. state management
4. conditional rendering
5. list rendering
6. event handling
7. computed property
 -->

<template>
  <div>
    <LoggedinNavbar page="dashboard"></LoggedinNavbar>
    <!-- container for the entire page content -->
    <div id="dashboard">
      <!-- container for the page title -->
      <div class="page-title">
        <!-- icon that comes along with the page title -->
        <img src="../assets/dashboardicon.png" />
        <p>My Dashboard</p>
      </div>

      <!-- container for first row of the dashboard -->
      <div class="first-row">
        <!-- an inner container for responsiveness -->
        <div class="inner">
          <!-- notifications container -->
          <div class="notif-center">
            <p>Notification Center</p>
            <Notifications style="margin-top: 40px;" v-bind:score="score"></Notifications>
          </div>
          <!-- score container -->
          <div class="ontrack-score">
            <p>On Track Score</p>
            <Score :events="events" v-on:scorecalculated="assignScore"></Score>
          </div>
        </div>

        <!-- reminders container-->
        <div class="set-reminder">
          <SetReminder v-on:formdata="addEvent"></SetReminder>
        </div>
      </div>
      <!-- container for second row -->
      <div class="second-row">
        <div class="learning-progress">
          <p>Try to complete 15 coding-related activities within 90 days!</p>
          <!-- renders chart -->
          <Graph />
        </div>

        <!-- reminder container -->
        <div class="reminder">
          <div class="remindertitle">
            <p>Reminder</p>
          </div>
          <!-- list rendering to display reminder for each event -->
          <Reminder v-for="(x, index) in events" 
          v-bind:date="x.date" 
          v-bind:key="index" 
          v-bind:event="x.event">
          </Reminder>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// imports child component
import Score from '../components/Score.vue'
import Notifications from '../components/Notifications.vue'
import Reminder from '../components/Reminder.vue'
import SetReminder from '../components/SetReminder.vue'
import Graph from '../components/Graph.vue'
import LoggedinNavbar from '../components/LoggedinNavbar.vue'

export default {
  data: function() {
    return {
      // initializes score to 0 as there is no event
      score: 0,
    }
  },
  components: {
    // register components
    Notifications,
    Reminder,
    SetReminder,
    Score,
    Graph,
    LoggedinNavbar,
  },
  computed: {
    /**
     * @description extract events from Vuex's store
     */
    events: function() {
      return this.$store.getters.getEvents
    },
  },
  mounted() {
    /**
     * @description Vuex's state is reset when page is reloaded,
     * place events back to Vuex's state from local storage
     */
    if (!this.$store.state.reminderEvents.length) {
      this.$store.dispatch('hydrateEvents')
    }
  },
  methods: {
    /**
     * @description pushes event from child component to Vuex's state
     * @param event
     */
    addEvent: function(event) {
      this.$store.commit('addEvent', event)
    },
    /**
     * @description overwrites score variable with score emitted from child component
     * @param scorefromcomponent
     */
    assignScore: function(scorefromcomponent) {
      this.score = scorefromcomponent
    },
  },
}
</script>

<style scoped>
/* style entire page */
#dashboard {
  background-color: rgb(235, 235, 235);
  padding-top: 1%;
  padding-bottom: 2%;
}
/* styles page title which are 'my dashboard' and its icon */
.page-title {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
  width: 68vw;
}

/* sets the size for the icon beside the page title */
.page-title img {
  width: 90px;
  height: 90px;
}

/* styles the wording for the page title */
.page-title p {
  font-size: 30px;
  font-weight: 700;
  line-height: 100%;
  margin-left: 30px;
  color: rgba(102, 72, 149, 1);
}

/* initialize a flex box for both the first row and second row on the dashboard */
.first-row,
.second-row {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
}

/* sets a default style for all boxes except for set-reminder */
.notif-center,
.ontrack-score,
.set-reminder,
.learning-progress,
.reminder {
  padding-left: 20px;
  height: 200px;
  background-color: white;
  border-radius: 2%;
  box-shadow: 5px 5px 5px rgb(196, 196, 196);
}

/* sets the style for notif center and on track score */
/* the container for those two boxes will be used for responsiveness later */
.inner {
  width: 135%;
  display: flex;
}

/* sets additional styling for the notif center box */
.notif-center {
  width: 100%;
  margin-left: 1em;
  margin-right: 0.5em;
  height: 225px;
}

/* styles the title for all boxes  */
.notif-center p,
.ontrack-score p,
.learning-progress p,
.remindertitle p {
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
  color: rgba(102, 72, 149, 1);
  position: absolute;
}

.learning-progress p {
  font-weight: 400;
  width: 30%;
  font-size: 20px;
}

/* additional style for on track score box */
.ontrack-score {
  width: 60%;
  height: 225px;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.ontrack-score .score {
  margin-top: 20px;
  font-size: 100px;
  font-weight: 800;
}

/* additional styles for set reminder box */
.set-reminder {
  width: 75%;
  margin-left: 0.5em;
  margin-right: 1em;
  height: 225px;
  display: flex;
  flex-direction: column;
}

/* additional styling for the entire second row */
.second-row {
  margin-top: 1em;
}

/* additional styling for the learning progress box */
.learning-progress {
  width: 55%;
  height: auto;
  margin-left: 1em;
  margin-right: 0.5em;
}

/* set the size for the chart */
/* will be replaced with real chart */
.learning-progress img {
  width: 100%;
  margin-top: 3em;
}

/* additional styling for reminder box */
.reminder {
  width: 45%;
  height: 350px;
  margin-left: 0.5em;
  margin-right: 1em;
  overflow: scroll;
}

.remindertitle {
  height: 50px;
}

.remindertitle p {
  background-color: white;
  width: 400px;
}

/* media query which allows the page to be responsive */
@media screen and (max-width: 1000px) {
  .first-row .inner {
    width: 75%;
    display: flex;
  }

  .first-row,
  .second-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 0px auto;
  }
  .first-row div,
  .second-row div {
    margin: 10px;
    width: 70vw;
  }

  .second-row {
    flex-direction: column-reverse;
    align-content: center;
  }

  .ontrack-score p,
  .remindertitle p,
  .learning-progress p {
    font-size: 18px;
    width: 70%;
  }

  .notif-center p {
    font-size: 16px;
  }
  .remindertitle p {
    background-color: white;
    width: 200px;
  }
}

@media screen and (max-width: 485px) {
  .learning-progress p {
    font-size: 12px;
  }
}
</style>
