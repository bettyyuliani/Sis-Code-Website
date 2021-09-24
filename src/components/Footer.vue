<!-- This component is a small static footer which makes up part of the homepage

vue concepts in this component:
1. single file component
 -->
<template>
  <!-- container for footer -->
  <div id="footer">
    <p style="margin: 0">Email: contactus@siscode.com.au</p>
    <p style="margin: 0">Phone Number: 12345678</p>
  </div>
</template>

<style scoped>
/* styling for footer */
#footer {
  background-color: rgba(102, 72, 149, 1);
  color: white;
  text-align: center;
  font-weight: 400;
  padding: 10px;
}
</style>
