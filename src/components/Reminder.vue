<!-- This component provides a template for parent component to display reminder(s).
it takes in props of event name and event date, and the reminder will be displayed
according to these data.

Vue concepts in this component:
1. single file component
2. props
 -->
<template>
  <!-- displays each reminder -->
  <div class="reminderlist">
    <p class="dates">{{ date }}</p>
    <p class="events">{{ event }}</p>
  </div>
</template>

<script>
export default {
  // takes in the name of event and date as props
  props: ["event", "date"]
};
</script>

<style scoped>
/* the entire container */
.reminderlist {
  margin-bottom: 10px;
}

/* styling for container of entire text */
.reminderlist p {
  background-color: rgba(102, 72, 149, 1);
  padding-left: 10px;
  width: 300px;
}

/* styling for text of date */
.reminderlist .dates {
  font-size: 12px;
  padding-top: 3px;
  border-radius: 5px 5px 0px 0px;
  font-weight: 100;
  color: white;
}

/* styling for text of event name */
.reminderlist .events {
  padding-bottom: 3px;
  border-radius: 0px 0px 5px 5px;
  font-size: 18px;
  font-weight: 400;
  color: white;
}
</style>
