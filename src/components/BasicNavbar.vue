<!-- This component holds the simplest form
of navigation bar in this project which is used in
login and registering pages.
Unlike GuestNavBar and LoggedinNavbar, this nav-bar only allow users
to navigate to home page. It doesn't contain any media query as
the nature of this basic nav-bar having small width size makes responsiveness
or hamburger menu unnecessary.

Vue concepts in this component: routing and single file component
 -->

<template>
  <!-- navigation bar -->
  <div id="nav-bar-basic" class="nav-bar-basic">
    <!-- logo on the navigation bar -->
    <img src="../assets/logo.png" class="logo" />
    <!-- redirection to other pages -->
    <router-link class="link" to="/">Home</router-link>
  </div>
</template>

<style scoped>
/* rest of the content will be invisible if content is overflow */
.nav-bar-basic {
  overflow: hidden;
  z-index: 1;
  transition: 0.6s;
  background-color: rgba(102, 72, 149, 1);
  position: fixed;
  top: 0;
  width: 100%;
}

/* sets the logo on the left most of the navigation bar along with its size */
.nav-bar-basic .logo {
  float: left;
  width: 100px;
  height: 93px;
  vertical-align: middle;
}

/* @external links = direct-able texts or buttons in the navigation bar */
.nav-bar-basic .link {
  float: left;
  font-weight: 400;
  padding: 42px 2.43vw;
  font-size: 18px;
  text-decoration: none;
  color: white;
}

.nav-bar-basic .link:hover {
  background-color: rgb(60, 32, 105);
}

/* hides the icon of hamburger menu */
.nav-bar-basic .icon {
  display: none;
}

/* set background color for the <a> tag, or the button that redirects user to other pages */
.nav-bar .link:hover {
  background-color: rgb(79, 53, 122);
}

/* =================FINISHED STYLING FOR NAVIGATION BAR================== */
</style>
