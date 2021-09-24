<!-- This component provides a template for parent component to display a video.
it takes in props of video source and name of event

Vue concepts in this component:
1. single file component
2. props

extra concept:
1. <iframe> tag to embed external videos
 -->

<template>
  <!-- component for each video -->
  <div class="video">
    <iframe
      width="355"
      height="200"
      v-bind:src="video_src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
    <!-- description of video -->
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
// accepts props to display each video
export default {
  props: ["video_src", "description"]
};
</script>

<style scoped>
/* styling for the video container */
.video {
  margin: 20px;
}

/* styling for description of video */
.description {
  text-align: center;
  color: grey;
  margin-top: 3%;
  font-weight: 600;
}
</style>
