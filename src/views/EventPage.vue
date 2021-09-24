<!-- This component is a whole page component,
which essentially is a page that displays Sis Code's list of events,
and it allows users to book tickets for any event.
users will be redirected to dashboard page once payment is successful (done by "BookTickets.vue").

the events shown on this page is dependent towards user's filter query.
this is achieved through props and custom events which establishes the communication between
"FilterEvents.vue" and "Events.vue". the communication flow is illustrated in:
https://photos.app.goo.gl/yWLSbJCuRGPryixx6

Vue concepts in this component:
1. single file component
2. component registration
3. event handler
 -->
<template>
  <div>
    <!-- renders navbar -->
    <LoggedinNavbar page="events"></LoggedinNavbar>
    <div class="content">
      <!-- renders filter event -->
      <FilterEvents @apply="apply"></FilterEvents>
      <!-- renders events based on user's filter input -->
      <Events :filter="filters"></Events>
    </div>
  </div>
</template>

<script>
// import child components
import Events from '../components/Events.vue'
import LoggedinNavbar from '../components/LoggedinNavbar.vue'
import FilterEvents from '../components/FilterEvents.vue'
export default {
  // rgister components
  components: {
    Events,
    FilterEvents,
    LoggedinNavbar,
  },
  data() {
    return {
      // initializes filtr
      filters: {},
    }
  },
  methods: {
    /**
     * @description stores filterData from child component to local "filters" variable
     * @param filterData
     */
    apply(filterData) {
      this.filters = filterData
    },
  },
}
</script>

<style scoped>
/* creates a flexbox for the content */
.content {
  width: 100%;
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 1000px) {
  /* changes all row to column */
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
