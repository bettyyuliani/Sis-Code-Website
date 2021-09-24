<!-- This component computes score based on the graph's gradient.
however, graph's gradient is calculated from the Events array passed from parent component,
instead of extracting (X,Y) points from graph itself, which is not possible.
it watches for the change in events; once events that are passed from parent's component
is updated, the score is re-computed.
this score is then emitted or sent back to parent component

Vue concepts in this component:
1. single file component
2. props
3. watcher

Other concepts:
1. mounted
 -->

<template>
  <p class="score">{{ score }}</p>
</template>

<script>
export default {
  // obtains events from reminder
  props: ['events'],
  data() {
    // initializes variables used for score calculation
    return {
      score: 0,
      gradient: 0
    };
  },
  // watcher which computes score if events changes
  watch: {
    events: function() {
      this.computeScore();
    }
  },
  // calls computescore everytime the component is rendered
  mounted() {
    this.computeScore();
  },

  methods: {
    /**
     * @description calculate score based on the gradient given x2 and y2,
     * @return score to parent component
     */
    computeScore: function() {
      if (this.events.length == 0) {
        this.score = 0; // sets score as 0 instead of nan when there is no event
      } else {
        // finds gradient
        var x2 = this.computeX2();
        var y2 = this.computeY2();
        this.gradient = (450 - y2) / x2;

        // calculates score based on gradient
        this.score = Math.ceil((this.gradient / 5) * 100);

        // score should not be above 100
        if (this.score > 100) {
          this.score = 100;
        }
      }
      // passes this computed score to parent component
      this.$emit("scorecalculated", this.score);
    },

    /**
     * @description calculate X2, which is the gap of days between today's date and event's date
     * @return X2
     */
    computeX2: function() {
      var lastDay = new Date(this.events[this.events.length - 1].date);
      var today = new Date();
      var milisecondsDifference = lastDay.getTime() - today.getTime();
      var x_axis = Math.ceil(milisecondsDifference / (1000 * 3600 * 24));

      return x_axis;
    },

    /**
     * @description calculate Y2, which is the number of events 
     * that will happen within 90 days from today
     * @return Y2
     */
    computeY2: function() {
      var eventCount = 0;
      var currentDate = new Date();
      var targetDate = new Date();
      targetDate.setDate(currentDate.getDate() + 90);

      for (var i = 0; i < this.events.length; i++) {
        var eventDate = new Date(this.events[i].date);
        if (eventDate <= targetDate && eventDate >= currentDate) {
          eventCount++;
        }
      }
      var y_axis = 450 - eventCount * 30;
      return y_axis;
    }
  }
};
</script>

<style scoped>
/* text of score */
.score {
  margin-top: 20px;
  font-size: 100px;
  font-weight: 800;
}
</style>
