<!-- This component is the main controller of all components in this project

Vue concepts in this component:
1. single file component
2. router
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* importing font that will be used in the project */
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap");

/* set styling for all files */
* {
  font-family: "Raleway";
  padding: 0;
  margin: 0;
}
</style>
