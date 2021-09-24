<!-- This component holds an array of testimonials which will
be rendered on the third section of the home page.
it assigns each testimonial (its child component) with its respective props
such that each child component has the associated data to be displayed.
it uses a v-for directive to loop through and display all testimonials accordingly.

Vue concepts in this component:
1. list rendering
2. single file component
3. component registration
 -->
<template>
  <!-- container for the testimonial page on the webpage -->
  <div id="thirdpage">
    <header>
      <div class="title">
        <div class="logo"></div>
        <!-- title -->
        <h1>What do they say about us?</h1>
      </div>
    </header>
    <div class="main">
      <p class="page-description clearfix">
        <!-- description -->
        These amazing women have taken the first step towards coding. Have a
        read at what they say!
      </p>
      <!-- container for the entire testimonials -->
      <!-- list rendering to display all testimonials -->
      <div class="gallery">
        <Testimonial
          v-for="(testimonial, index) in testimonials"
          v-bind:thumbnail_src="testimonial.thumbnail_src"
          v-bind:testimonial_name="testimonial.testimonial_name"
          v-bind:alumni_year="testimonial.alumni_year"
          v-bind:words="testimonial.words"
          v-bind:key="index">
        </Testimonial>
      </div>
    </div>
  </div>
</template>

<script>
// import child component
import Testimonial from "./Testimonial.vue";

export default {
  // register component
  components: {
    Testimonial
  },
  data() {
    return {
      // list of testimonials to be displayed
      testimonials: [
        {
          thumbnail_src: require("../assets/portrait.jpg"),
          testimonial_name: "Betty Yuliani",
          alumni_year: "2017",
          words:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        },
        {
          thumbnail_src: require("../assets/portrait2.png"),
          testimonial_name: "Selena Kavinsky",
          alumni_year: "2018",
          words:
            "Etiam in libero ac tellus blandit ullamcorper ut at velit. In nec iaculis sapien. Quisque vestibulum libero elementum odio ultricies, ac placerat enim feugiat. Nullam bibendum fermentum fringilla."
        },
        {
          thumbnail_src: require("../assets/portrait3.png"),
          testimonial_name: "Monica Evans",
          alumni_year: "2019",
          words:
            "Nunc at quam neque. Vestibulum rhoncus nisi diam, sed faucibus eros tempus eu. Vestibulum nec consectetur magna. Praesent eleifend, nulla sit amet malesuada eleifend, massa justo pretium lorem, quis suscipit lacus mi eu augue. "
        },
        {
          thumbnail_src: require("../assets/portrait4.png"),
          testimonial_name: "Nisha Kumari",
          alumni_year: "2021",
          words:
            "Suspendisse finibus risus nibh. Aenean a augue a nisl vulputate sagittis vel at dui. Sed luctus tempus pharetra. Maecenas in vulputate ligula, eu ullamcorper ante. "
        },
        {
          thumbnail_src: require("../assets/portrait5.png"),
          testimonial_name: "Lorelle Ipmans",
          alumni_year: "2017",
          words:
            "Donec interdum bibendum turpic, Proin vel efficitur sapien, et auctor arcu. Mauris ipsum neque, pellentesque et lorem id, euismod cursus augue. Suspendisse lacus nulla, molestie eu velit sit amet, sodales porttitor nibh. "
        },
        {
          thumbnail_src: require("../assets/portrait6.png"),
          testimonial_name: "Sherly Choveaux",
          alumni_year: "2018",
          words:
            "Aenean turpis mauris, suscipit eget risus in, congue gravida libero. Fusce tempor congue efficitur. Donec ultricies tortor bibendum, auctor dolor at, tempor turpis."
        },
        {
          thumbnail_src: require("../assets/portrait7.png"),
          testimonial_name: "Emily Carlo",
          alumni_year: "2017",
          words:
            "Morbi interdum dictum lacinia. Nullam lobortis purus et turpis lacinia faucibus. Donec semper, dolor eu molestie pulvinar, dui diam placerat tellus, vitae ullamcorper dolor ipsum id enim. "
        },
        {
          thumbnail_src: require("../assets/portrait8.png"),
          testimonial_name: "Rachel Florence",
          alumni_year: "2016",
          words:
            "Morbi interdum dictum lacinia. Nullam lobortis purus et turpis lacinia faucibus. Donec semper, dolor eu molestie pulvinar, dui diam placerat tellus, vitae ullamcorper dolor ipsum id enim. "
        }
      ]
    };
  }
};
</script>

<style scoped>
/* styling for the third or testimonial page */
#thirdpage {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: white;
}

/* Title and Description */

.title {
  font-size: 1.25rem;
  text-align: center;
  color: rgba(102, 72, 149, 1);
  margin: 50px;
  position: relative;
}

.title h1 {
  display: block;
}

.main {
  text-align: center;
}

.page-description {
  font-size: 1.2rem;
  color: rgb(91, 91, 91);
  margin: 50px;
}

/* sets the layout for the overall testimonials */
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* media query which helps the testimonial section to be responsive */
@media only screen and (max-width: 480px), (orientation: portrait) {
  .page-title {
    width: 270px;
  }
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  .gallery-item .thumbnail {
    width: 95%;
  }
}
</style>
