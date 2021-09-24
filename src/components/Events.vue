<!-- This component holds an array of events which will
be displayed on Events page.
it assigns each event (its child component) with an ID.
when one of the event is chosen, this component accepts the ID
which is passed from its child component (Event.vue). This ID serves as an information
for which event that has been chosen by user. this component then passes this
event information down to BookTickets.vue component, along with a boolean value,
such that Book Tickets window will be made visible, and correct event information
and price is displayed to user.

the communication established within these components rely heavily on props and custom events,
this is illustrated in:
https://photos.app.goo.gl/Dxa5k37o9qQpbC556

Vue concepts in this component:
1. list rendering
2. event handler
3. watcher
4. custom event
5. single file component
6. component registration

extra:
1. mounted
 -->
<template>
  <!-- container for the entire page content -->
  <div class="events">
    <!-- contaner of the title for the webpage -->
    <div class="events-header">
      <!-- icon for the title -->
      <img src="../assets/calendericon.png" />
      <!-- the title itself -->
      <p>Events</p>
    </div>
    <!-- used the event component and pass in relevant p and img tags which will be rendered in the slot -->
    <!-- list rendering for all events -->
    <Event v-for="(item, index) in filteredEvents" :key="index" :id="item.id" v-on:open="openmodal">
      <template v-slot:image><img :src="item.image"/></template>
      <template v-slot:title><p>{{ item.name }}</p></template>
      <template v-slot:date><p>{{ item.date }}</p></template>
      <template v-slot:city><p>{{ item.city }}</p></template>
      <template v-slot:price><p>${{ item.price }}</p></template>
    </Event>
    <!-- a button which prompts for a pop up window by user clicks on book tickets -->
    <BookTickets :open="modalopen" :event="eventChosen" v-on:closed="closemodal"></BookTickets>
  </div>
</template>

<script>
// import child components
import Event from "./Event.vue";
import BookTickets from "./BookTickets.vue";
export default {
  // register components
  components: {
    Event,
    BookTickets
  },
  // prop will be used for displaying relevant events
  props: ["filter"],
  watch: {
    /**
     * @description shows new set of events whenever user changes filter
     * @param newValue
     * @link programming logic for filtering https://photos.app.goo.gl/PKAvjhreZo1DXLim6
     */
    filter: function(newValue) {
      // if both of the filter input is filled
      if (newValue.cities.length > 0 && newValue.datefrom && newValue.dateto) {
        this.filteredEvents = this.events.filter(e => newValue.cities.indexOf(e.city) > -1 &&
        newValue.datefrom <= e.filterdate && newValue.dateto >= e.filterdate);
        return;
      }
      // if user filters only city
      else if (newValue.cities.length > 0) {
        this.filteredEvents = this.events.filter(e => newValue.cities.indexOf(e.city) > -1);
        return;
      }
      // if user filters only date range
      else if (newValue.datefrom && newValue.dateto) {
        this.filteredEvents = this.events.filter(e => newValue.datefrom <= e.filterdate && newValue.dateto >= e.filterdate);
        return;
      }
      // else, just return the set of original events
      this.filteredEvents = this.events;
    }
  },

  methods: {
    /**
     * @description open book ticket window according to the ID of the event that user clicks on
     * @param id
     */
    openmodal: function(id) {
      // uses filter function to appear only 1 event
      this.eventChosen = this.events.filter(e => e.id == id);
      this.modalopen = true;
    },

    /**
     * @description closes the window when user clicks on X
     */
    closemodal: function() {
      this.modalopen = false;
    }
  },
  mounted() {
    // initialize the filtered events as the original events
    this.filteredEvents = this.events;
  },
  data() {
    return {
      // initialize opening book ticket window to be false
      modalopen: false,
      // empty as user has not chosen an event yet
      eventChosen: {},
      // initialize a variable to store temporary list of events
      filteredEvents: [],
      // list of events
      events: [
        {
          id: 1,
          image: require("../assets/bootcamp.jpg"),
          name: "Coding Bootcamp",
          date: "Friday, 1 October 2021",
          filterdate: "2021-10-01",
          city: "Sydney",
          price: 300
        },
        {
          id: 2,
          image: require("../assets/workshop.jpg"),
          name: "Coding Workshop for Women",
          date: "Friday, 7 November 2021",
          filterdate: "2021-11-07",
          city: "Sydney",
          price: 50
        },
        {
          id: 3,
          image: require("../assets/networking.jpg"),
          name: "Networking Event for Women in Tech",
          date: "Friday, 15 October 2021",
          filterdate: "2021-10-15",
          city: "Brisbane",
          price: 20
        },
        {
          id: 4,
          image: require("../assets/class.jpg"),
          name: "Programming Logic Class for Women",
          date: "Friday, 31 October 2021",
          filterdate: "2021-10-31",
          city: "Melbourne",
          price: 80
        },
        {
          id: 5,
          image: require("../assets/meeting.jpg"),
          name: "UI/UX Design Workshop",
          date: "Friday, 25 November 2021",
          filterdate: "2021-11-25",
          city: "Gold Coast",
          price: 50
        },
        {
          id: 6,
          image: require("../assets/event6.jpg"),
          name: "Intermediate Programming for Women",
          date: "Friday, 5 December 2021",
          filterdate: "2021-12-5",
          city: "Melbourne",
          price: 120
        },
        {
          id: 7,
          image: require("../assets/event7.jpg"),
          name: "Project Workthrough Guidance",
          date: "Friday, 15 November 2021",
          filterdate: "2021-11-15",
          city: "Brisbane",
          price: 100
        },
        {
          id: 8,
          image: require("../assets/event8.jpg"),
          name: "Software Engineering Class",
          date: "Friday, 15 November 2021",
          filterdate: "2021-11-15",
          city: "Melbourne",
          price: 200
        },
        {
          id: 9,
          image: require("../assets/event9.jpg"),
          name: "Web Development Empowerment",
          date: "Friday, 8 October 2021",
          filterdate: "2021-10-8",
          city: "Gold Coast",
          price: 200
        },
        {
          id: 10,
          image: require("../assets/event10.jpg"),
          name: "Advanced Web Development",
          date: "Friday, 10 October 2021",
          filterdate: "2021-10-10",
          city: "Brisbane",
          price: 110
        }
      ]
    };
  }
};
</script>

<style scoped>
/* ===============STYLING FOR TITLE STARTS HERE============ */

/* styling for the title of the page */
/* this creates a flexbox as the title icon and the title itself wil appear side to side */
.events-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: -10px;
}

/* styles the icom of the title */
.events-header img {
  padding: 15px;
  width: 85px;
  height: 85px;
}

/* sets the style of the page's title */
.events-header p {
  color: rgba(102, 72, 149, 1);
  font-size: 40px;
  margin-top: 35px;
  font-weight: 700;
}

/* ===============STYLING FOR TITLE FINISHES================= */
/* =================STYLING FOR THE EVENTS DISPLAY STARTS HERE=============== */
/* styling for the event boxes */
.events {
  width: 60%;
  margin-left: 2vw;
  justify-content: left;
  padding-left: 5vw;
  border-left: 1.5px solid rgb(196, 196, 196);
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* responsiveness where the event and filter will appear as column */
@media screen and (max-width: 1000px) {
  .events-header {
    margin-top: 80px;
  }
  /* changes all row to column */
  .events {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }
}
</style>
