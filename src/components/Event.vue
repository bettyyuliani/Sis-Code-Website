<!-- This component provides a template for parent component to display
an event. Slots are incorporated to preserve spaces for parent component
to fill in during render time. The provided template is flexible, as parent 
component is allowed to switch around the slots sequence.
e.g. city can appear before date, price can appear before city, etc.
it will receive a unique ID from the parent component, in which, this ID will be 
emitted back to parent component when its button is clicked
(tell the parent component the button of which event is clicked based on the ID)

Vue concepts in this component:
1. single file component
2. props
3. slot
4. custom event
5. event handler
 -->
<template>
  <!-- container for each event -->
  <div class="event">
    <!-- event image container -->
    <div class="event-image">
      <slot name="image"></slot>
    </div>
    <a href="">
      <!-- description container -->
      <div class="description">
        <!-- title container -->
        <div class="title"><slot name="title"></slot></div>
        <!-- date container -->
        <div class="date"><slot name="date"></slot></div>
        <!-- city container -->
        <div class="city"><slot name="city"></slot></div>
        <!-- price container -->
        <div class="price"><slot name="price"></slot></div>
      </div>
      <!-- button which prompts the user to get tickets -->
      <div class="get-tickets-button">
        <button type="button" v-on:click.prevent="$emit('open', id)">
          Get Tickets
        </button>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  // accepts the id of the event from parent
  props: ["id"]
};
</script>

<style scoped>
/* =================STYLING FOR THE EVENTS DISPLAY STARTS HERE=============== */

/* styling for the event thumbnail's container */
.event .event-image {
  width: 30%;
  float: left;
  overflow-x: hidden;
}

/* sets the size for the event thumbnail */
.event-image img {
  width: 265px;
  height: 158px;
}

/* sets the size of each event's container */
.event {
  padding: 5px;
  height: 158px;
  box-shadow: 5px 5px 10px rgb(196, 196, 196);
  margin-bottom: 2em;
}

/* styles the text of the event's description */
.event a {
  margin-top: -10px;
  width: 69%;
  float: right;
  color: black;
  text-decoration: none;
  line-height: 2.8rem;
}

/* styles that occur when the description is hovered by the user */
.event .description:hover {
  color: rgb(59, 26, 109);
  text-decoration: underline;
}

/* sets font size for the title of the event */
.description .title {
  font-size: 18px;
}

/* sets different color for the event's prices */
.description .price {
  color: rgb(91, 91, 91);
}

/* styles the button for get tickets */
.get-tickets-button button {
  background-color: rgba(102, 72, 149, 1);
  border: none;
  width: 100px;
  height: 35px;
  color: white;
  font-size: 14px;
  border-radius: 5%;
  cursor: pointer;
  margin-top: -50px;
  font-weight: 300;
  float: right;
}

/* responsiveness where the event and filter will appear as column */
@media screen and (max-width: 1000px) {
  /* reset the box for each event */

  .event {
    height: 460px;
    width: 65%;
    box-shadow: 5px 5px 10px rgb(196, 196, 196);
    margin-bottom: 2em;
  }

  /* styling for the event thumbnail's container */
  .event .event-image {
    width: 100%;
    margin-top: 30px;
    text-align: center;
  }

  /* sets the size for the event thumbnail */
  .event-image img {
    width: 300px;
    height: 200px;
  }

  /* styles the text of the event's description */
  .event a {
    width: 100%;
    text-align: center;
  }

  /* styling for buttons */
  .get-tickets-button {
    text-align: center;
  }

  .get-tickets-button button {
    float: none;
    margin-top: 5px;
  }
}
</style>
