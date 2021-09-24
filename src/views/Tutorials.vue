<!-- This component is a whole page component,
which holds an array of videos which will be rendered
with "Videos.vue" as a template.
it assigns each video (its child component) with its respective props
such that each child component has the associated data to be displayed.
it uses v-for directive to loop through the videos array and render it accordingly.

the videos displayed is dependent towards user's search query.
the search query is implemented with a computed property to allow caching for the results of each input.

Vue concepts in this component:
1. single file component
2. component registration
3. list rendering
4. form input binding
5. computed property
 -->

<template>
  <!-- page container -->
  <div>
    <!-- navigation bar -->
    <LoggedinNavbar page="tutorials"></LoggedinNavbar>
    <form>
      <!-- search box -->
      <input type="text" name="search" placeholder="Search video.." v-model="filters" />
    </form>
    <div id="videos_container">
      <!-- list rendering for all videos -->
      <Videos
        v-for="(video, index) in filterVideos"
        v-bind:video_src="video.video_src"
        v-bind:description="video.description"
        v-bind:key="index">
      </Videos>
    </div>
  </div>
</template>

<script>
// import child components
import Videos from '../components/Videos.vue'
import LoggedinNavbar from '../components/LoggedinNavbar.vue'

export default {
  // register components
  components: {
    Videos,
    LoggedinNavbar,
  },
  computed: {
    /**
     * @description filters videos made visible to users,
     * returns original videos array if search/filter query is empty,
     * otherwise, returns the set of videos whose string matches with user's input
     */
    filterVideos: function() {
      if (!this.filters) {
        return this.videos
      }
      return this.videos.filter(v => v.description.toLowerCase().indexOf(this.filters.toLowerCase()) > -1
      )
    },
  },
  data() {
    return {
      // initialize filter
      filters: '',
      // list of videos to be displayed
      videos: [
        { video_src: 'https://www.youtube.com/embed/gfkTfcpWqAY', description: 'Introduction to C#' },
        { video_src: 'https://www.youtube.com/embed/rfscVS0vtbw', description: 'Introduction to Python' },
        { video_src: 'https://www.youtube.com/embed/UB1O30fR-EE', description: 'Introduction to HTML' },
        { video_src: 'https://www.youtube.com/embed/N6BghzuFLIg', description: 'Introduction to Data Science' },
        { video_src: 'https://www.youtube.com/embed/Ulp1Kimblg0', description: 'Introduction to Swift' },
        { video_src: 'https://www.youtube.com/embed/tdn9_MZ0lN4', description: 'Advanced Python' },
        { video_src: 'https://www.youtube.com/embed/HGOBQPFzWKo', description: 'Intermediate Python' },
        { video_src: 'https://www.youtube.com/embed/8hly31xKli0', description: 'Algorithms & Data Structures' },
        { video_src: 'https://www.youtube.com/embed/Bz4MxDeEM6k', description: 'C Programming' },
        { video_src: 'https://www.youtube.com/embed/Sfpcl4FX3TU', description: 'App Development' },
        { video_src: 'https://www.youtube.com/embed/0-S5a0eXPoc', description: 'Introduction to React.js' },
        { video_src: 'https://www.youtube.com/embed/gB1F9G0JXOo', description: 'Introduction to Unity' },
        { video_src: 'https://www.youtube.com/embed/PlHnamdwGmw', description: 'Intermediate Cyber Security' },
        { video_src: 'https://www.youtube.com/embed/t_ispmWmdjY', description: 'Advanced Ruby' },
        { video_src: 'https://www.youtube.com/embed/B0NtAFf4bvU', description: 'Introduction to Recursion' },
        { video_src: 'https://www.youtube.com/embed/ob1yS9g-Zcs', description: 'Artificial Neural Network' },
        { video_src: 'https://www.youtube.com/embed/QUT1VHiLmmI', description: 'Introduction to Numpy' },
        { video_src: 'https://www.youtube.com/embed/GoXwIVyNvX0', description: 'Introduction to Java' },
        { video_src: 'https://www.youtube.com/embed/W6NZfCO5SIk', description: 'Introduction to JavaScript' },
        { video_src: 'https://www.youtube.com/embed/TlB_eWDSMt4', description: 'Introduction to Node.js' },
        { video_src: 'https://www.youtube.com/embed/OK_JCtrrv-c', description: 'Introduction to PHP' },
        { video_src: 'https://www.youtube.com/embed/oBt53YbR9Kk', description: 'Dynamic Programming' },
      ],
    }
  },
}
</script>

<style scoped>
/* set position for the entire video container */
#videos_container {
  display: table-cell;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

/* styles search box */
input[type='text'] {
  width: 160px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url('https://www.w3schools.com/css/searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

/* search box when user clicks on it */
input[type='text']:focus {
  width: 60%;
}

/* search box positioning */
form {
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
