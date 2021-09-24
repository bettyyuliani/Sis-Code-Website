<!-- This component shows notification in the dashboard page,
the component shown is dependent towards score.

vue concepts used:
1. conditional rendering
2. props
3. single file component
 -->
<template>
  <div class="notifs">
    <!-- displays green notification if score is above 70 -->
    <p class="greennotif" v-if="score > 70">
      Good job, your learning progress is on track
    </p>
    <!-- displays red notification if score is below 70 -->
    <p class="rednotif" v-else>
      Add more events as your learning progress is off track
    </p>
  </div>
</template>

<script>
export default {
  // uses props to determine which score to be displayed
  props: ["score"]
};
</script>

<style scoped>
/* styling for notifications */
.notifs {
  margin-top: 40px;
  position: absolute;
  max-width: 20%;
}

/* styles the texts of notifications */
.notifs p {
  font-size: 12px;
  font-weight: 600;
  color: white;
  border-radius: 5px;
  padding: 10px;
}

/* styling for different types of notifications */
.notifs p.rednotif {
  background-color: rgb(255, 174, 174);
  color: rgb(131, 15, 15);
  border: 1px solid rgb(255, 75, 75);
}

.notifs p.greennotif {
  background-color: rgb(185, 248, 185);
  color: rgb(23, 104, 23);
  border: 1px solid rgb(23, 104, 23);
}
</style>
