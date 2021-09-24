<!-- This component provides a template for parent component to display a testimonial.
it takes in props of thumbnail source, name of person providing testimonial,
graduating year of the person, and words to describe Sis Code

Vue concepts in this component:
1. single file component
2. props
 -->
<template>
  <div class="gallery">
    <!-- container for testimonial -->
    <div class="gallery-box">
      <!-- decorative quotation mark -->
      <img class="mark" src="../assets/quotation.png" />
      <figure class="gallery-item">
        <!-- thumbnail image -->
        <img class="thumbnail" v-bind:src="thumbnail_src" />
        <p>{{ words }}</p>
        <!-- description for name and year -->
        <p class="testimonial-name">{{ testimonial_name }}</p>
        <p class="alumni-year">Alumni: {{ alumni_year }}</p>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  // accepts props to be displayed
  props: ["thumbnail_src", "testimonial_name", "alumni_year", "words"]
};
</script>

<style scoped>
/* gallery boxes for testimonials */
.gallery-box {
  width: 350px;
  height: 370px;
  box-shadow: 5px 5px 8px 5px rgb(221, 221, 221);
  margin: 30px;
}

/* styling for quotation mark */
.mark {
  width: 50px;
  margin-top: -25px;
  margin-left: -150px;
  position: absolute;
}

/* sets the layout for the overall testimonials */
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* adds spacing between testimonial */
.gallery-item {
  margin: 20px;
}

/* styling for thumbnail */
.gallery-item .thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

/* styling for description */
.gallery-item p {
  color: rgb(91, 91, 91);
  margin: 20px;
}

/* styling for name of reviewer */
.gallery-item .testimonial-name {
  color: black;
  margin-top: 40px;
  font-weight: 600;
}

/* styling for year */
.gallery-item .alumni-year {
  font-style: italic;
  color: rgb(91, 91, 91);
}
</style>
