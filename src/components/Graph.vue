<!-- This component incorporates chart.js to visualize a burndown chart
for user's learning progress - based on the events that they have registered and
reminders that they have set.
The chart's x-axis ranges from 0 to 90, and y-axis ranges from 0-15.
The concept behind these numbers are "90-day-rule" which encourages individuals
to plan their learning across 90 days. Sis Code encourages users to have at least
15 activities planned in 90 days.

an array of events is the dependency of this graph. this is retrieved from Vuex's store.
for every event added, y axis decrements by 1, while the x axis is calculated based on
the days left from today's date to the event's date.

Vue concepts in this component:
1. single fine component
2. computed property
3. watcher

extra concepts:
1. chart.js
2. mounted
 -->

<template>
  <div v-bind="$attrs">
    <!-- creates a canvas where the chart will be drawn -->
    <canvas id="myChart"></canvas>
  </div>
</template>

<style scoped>
/* style canvas such that it fits on the chart box */
#myChart {
  margin-top: 12%;
  width: 90% !important;
}
</style>

<script>
// importing chart module
import * as Chart from "chart.js";

export default {
  // initializes data for the chart
  data() {
    return {
      myChart: null,
      yAxisData: this.yAxis() // initializes all coordinates to be (x,15)
    };
  },
  /**
    * @description plots graph and readjusts line every time this component is rendered
    */
  mounted: function() {
    this.readjustLine();
    this.plotGraph();
  },
  // obtain events from store
  computed: {
    events: function() {
      return this.$store.getters.getEvents;
    }
  },
  watch: {
    /**
    * @description replot graph everytime events in the store changes
    */
    events: function() {
      this.readjustLine();
      this.plotGraph();
    }
  },
  methods: {
    /**
     * @description loop through all events and adjusts line.
     * the x-axis which corresponds to the newly added event
     * will have the same y-axis with the remaining days (remaining x axis).
     */
    readjustLine: function() {
      let days = null;
      this.events.forEach(event => {
        days = this.calculateDays(event);
        // from this date to the 90th day,
        // readjusts the line by decrementing the y axis (event burndown)
        for (var i = days; i <= 90; i++) {
          this.yAxisData[i] = this.yAxisData[days - 1] - 1;
        }
      });
    },
    /**
     * @description calculate the countdown days of the event from current date
     */
    calculateDays: function(event) {
      var date = event.date;
      var lastDay = new Date(date);
      var today = new Date();
      var milisecondsDifference = lastDay.getTime() - today.getTime();
      var x_axis = Math.ceil(milisecondsDifference / (1000 * 3600 * 24));

      return x_axis;
    },
    /**
     * @description sets x axis to 90 days
     */
    ninetyDays: function() {
      var days = [0];
      for (var i = 0; i <= 90; i++) {
        days.push(i + 1);
      }
      return days;
    },
    /**
     * @description initializes mapping of x axis to y axis as (x,15)
     */
    yAxis: function() {
      var yAxis = [];
      for (var i = 0; i <= 90; i++) {
        yAxis.push(15);
      }
      return yAxis;
    },
    /**
     * @description function called to plot graph
     * @link code obtained from https://www.chartjs.org/docs/latest/charts/line.html
     */
    plotGraph: function() {
      const labels = this.ninetyDays();
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Progress Burndown",
            backgroundColor: "indianred",
            borderColor: "indianred",
            data: this.yAxisData
          }
        ]
      };
      const config = {
        type: "line",
        data: data,
        options: {}
      };
      Chart.Chart.register(...Chart.registerables);
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart.Chart(
        document.getElementById("myChart"),
        config
      );
    }
  }
};
</script>
