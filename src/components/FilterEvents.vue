<!-- This component is a part of the "EventPage.vue" as it renders 
a form which acts as filter query. 
The filter parameters include: cities, date range (datefrom, dateto).
Once user submits this form, the data of user input is emitted to parent component

Vue concepts in this component:
1. event handler (with .prevent modifier)
2. form input binding
3. custom event
4. single file component
 -->
<template>
  <div class="filterevents" v-on:submit.prevent="apply">
    <!-- to be filled out by user to filter the events they wish to see -->
    <form>
      <div class="filter">
        <!-- filtering for city -->
        <div class="city-input">
          <!-- title for city filter -->
          <p class="city-header">City</p>
          <!-- container is divided into two as it will be displayed side by side -->
          <!-- left container -->
          <div class="left">
            <div class="checkbox">
              <input type="checkbox" id="sydney" name="city-input" value="Sydney" v-model="cities">
              <label for="sydney" class="cityname">Sydney</label><br>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="Melbourne" name="city-input" value="Melbourne" v-model="cities">
              <label for="melbourne" class="cityname">Melbourne</label><br>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="brisbane" name="city-input" value="Brisbane" v-model="cities">
              <label for="brisbane" class="cityname">Brisbane</label><br>
            </div>
          </div>
          <!-- right container -->
          <div class="right">
            <div class="checkbox">
              <input type="checkbox" id="canberra" name="city-input" value="Canberra" v-model="cities">
              <label for="canberra" class="cityname">Canberra</label><br>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="perth" name="city-input" value="Perth" v-model="cities">
              <label for="perth" class="cityname">Perth</label><br>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="coldcoast" name="city-input" value="Gold Coast" v-model="cities">
              <label for="goldcoast" class="cityname">Gold Coast</label><br>
            </div>
          </div>
        </div>

        <!-- filtering events based on dates -->
        <div class="dates">
          <p class="dates-header">Dates</p>
          <label for="from" class="fromto">From</label><br>
          <input type="date" id="from" name="dates" v-model="datefrom"><br>
          <label for="to" class="fromto">To</label><br>
          <input type="date" id="to" name="dates" v-model="dateto">
        </div>
        <!-- submit button -->
        <input type="submit" value="Apply" class="apply">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    // variables for data binding
    return {
      cities: [],
      datefrom: "",
      dateto: ""
    };
  },
  methods: {
    /**
     * @description passes user's input of filter data to parent
     * @emits object {cities, datefrom, dateto}
     */
    apply: function() {
      this.$emit("apply", {
        cities: this.cities,
        datefrom: this.datefrom,
        dateto: this.dateto
      });
    }
  }
};
</script>

<style scoped>
/* form or filter takes up 30% of the browser's width */
.filterevents {
  width: 30%;
}

/* form or filter will appear as columnd */
.filterevents .filter {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 3em;
}

/* styling for the header of the filter section */
.city-header,
.dates-header {
  font-weight: 700;
  font-size: 30px;
  color: rgba(102, 72, 149, 1);
  margin-bottom: 25px;
}

/* styling for filtering the city */
.filter .city-input {
  font-weight: 300;
  font-size: 16px;
  color: rgb(91, 91, 91);
  height: 50%;
  margin-top: 60px;
  float: left;
  text-align: left;
}

/* ===DIVIDING CITY TO LEFT AND RIGHT SECTION=== */

/* left section */
.city-input .left {
  float: left;
  width: 50%;
  text-align: left;
}

/* right section */
.city-input .right {
  float: right;
  width: 50%;
  text-align: left;
}

/* styling for the input of dates */
.fromto {
  font-weight: 500;
  font-size: 16px;
  color: rgb(91, 91, 91);
}

/* styling for the boxes to input dates */
input[type="date"] {
  border-width: 1.5px;
  margin: 10px;
  padding: 5px;
  font-family: "Raleway";
  color: rgb(91, 91, 91);
  border-color: rgb(91, 91, 91);
  width: 70%;
  height: 25px;
}

label {
  margin-left: 35px;
}

/* styling for the checkboxes*/
input[type="checkbox"] {
  margin-bottom: 15px;
}

/* styling for the button for which the user clicks to filter the events */
.apply {
  background-color: rgba(102, 72, 149, 1);
  border: none;
  width: 100px;
  height: 35px;
  color: white;
  font-size: 14px;
  border-radius: 5%;
  cursor: pointer;
  margin-top: 30px;
  font-weight: 300;
}

@media screen and (max-width: 1000px) {
  /* styling for filter section */
  .filterevents {
    width: 100%;
  }

  .filterevents form {
    width: 100%;
  }

  .checkbox {
    border-bottom: 1px solid rgb(196, 196, 196);
    margin-top: 15px;
  }

  .filterevents .filter {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .filterevents .city-input {
    text-align: center;
    width: 50%;
  }

  .city-header {
    text-align: center;
  }

  .city-input .cityname {
    margin-left: 50%;
    float: right;
  }

  .city-input .right,
  .city-input .left {
    width: 100%;
    float: left;
  }

  input[type="date"] {
    width: 120%;
    margin-left: -10%;
  }
}
/* =================STYLING FOR FILTERING STOPS HERE============== */
</style>
