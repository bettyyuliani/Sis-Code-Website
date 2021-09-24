<!-- This component creates the navigation bar
used in pages for logged in users.

Vue concepts in this component:
1. single file component
2. class binding
3. event handler (.prevent modifier)
4. routing
 -->
<template>
  <div :class="{ responsive: isExpanded }" class="nav-bar2" id="nav-bar2">
    <!-- logo on the navigation bar -->
    <img src="../assets/logo.png" class="logo" />
    <!-- routes to other pages -->
    <router-link id="dashboard" class="dashboard link" to="/dashboard">Dashboard</router-link>
    <router-link id="events" class="events link" to="/events">Events</router-link>
    <!-- javascript which prompts hamburger menu -->
    <button href="javascript:void(0);" class="icon hamburger" v-on:click="navbarFunc">
      <i class="fas fa-bars"></i>
    </button>
    <router-link id="tutorials" class="tutorials link" to="/tutorials">Tutorials</router-link>
    <!-- profile hidden by defaul -->
    <div class="profile">Profile</div>
    <!-- prompts back to main page when user clicks logout -->
    <router-link class="logout right link" to="/">Logout</router-link>
    <!-- icon for user profile -->
    <div id="dropdown">
      <!-- shows the account information when clicked -->
      <button class="user-head right" v-on:click="showAccount">
        <img src="../assets/user-head.png" />
      </button>
      <!-- hidden by default -->
      <div id="dropdown-content" style="line-height: 0.5;">
        <div class="arrow-up"></div>
        <p style="font-size: 14px; font-weight: 700;">User:</p>
        <p style="font-size: 14px;">byuliani@deakin.edu.au</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  data() {
    return {
      isExpanded: false, //variable for repsponsiveness
      isClicked: false //variable for dropdown account information
    };
  },
  mounted() {
    this.toggleActiveness();
  },
  methods: {
    /**
     * @description toggles responsiveness
     */
    navbarFunc: function() {
      this.isExpanded = !this.isExpanded;
    },
    /**
     * @description toggles the display of dropdown account information
     */
    showAccount: function() {
      this.isClicked = !this.isClicked;
      if (this.isClicked) {
        document.getElementById("dropdown-content").style.display = "block";
      } else {
        document.getElementById("dropdown-content").style.display = "none";
      }
    },
    /**
     * @description adding dynamicity which highlights page that the user is currently at
     */
    toggleActiveness: function() {
      document.getElementById(this.page).classList.add("active");
    }
  }
};
</script>

<style scoped>
/* ===================STYLES FOR NAVIGATION BAR STARTS HERE==================== */

/* arrow in the dropdown account information */
.arrow-up {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  text-align: center;
  border-bottom: 12px solid rgba(102, 72, 149, 1);
  margin-left: 80px;
  margin-top: -15px;
}

/* styling for the overall div for account information */
#dropdown {
  float: right;
}

/* styling for the dropdown account information */
#dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(102, 72, 149, 1);
  z-index: 1;
  border-radius: 10px;
  text-align: center;
  margin: 130px 0 0 -60px;
}

#dropdown-content p {
  float: none;
  border-radius: 10px;
  color: white;
  padding: 12px 16px;
  background-color: rgba(102, 72, 149, 1);
  text-decoration: none;
  display: block;
  text-align: center;
}

/* styling for the icon */
button.user-head {
  background-color: rgba(102, 72, 149, 1);
  border: none;
}

/* effects during hover */
#dropdown-content a:hover {
  background-color: #ddd;
}

#dropdown:hover .dropdown-content {
  display: block;
}

/* set the background for navigation bar to purple */
/* any content outside of the container will be hidde  */
.nav-bar2 {
  background-color: rgba(102, 72, 149, 1);
  overflow: hidden;
}

/* style for the logo on the nav bar */
.nav-bar2 .logo {
  float: left;
  width: 100px;
  height: 93px;
  vertical-align: middle;
}

/* styles clickable links on the navigation bar */
.nav-bar2 .link {
  color: white;
  float: left;
  font-size: 18px;
  font-weight: 400;
  padding: 42px 2.43vw;
  text-decoration: none;
}

/* sets all items on the right hand side of the navigation bar to float right */
.nav-bar2 .right {
  float: right;
}

/* styles the search icon on the navigation bar */
.nav-bar2 .search-icon {
  width: 35px;
  height: 35px;
  margin-top: 35px;
  margin-right: 10px;
}

/* styles the search bar */
.nav-bar2 input[type="text"] {
  margin-top: 28px;
  margin-right: 16px;
  border: none;
  border-radius: 2%;
  font-size: 17px;
  height: 45px;
  width: 10vw;
}

/* styles the container for the user profile icon */
.nav-bar2 .user-head {
  padding: 17px 0;
}

/* styles the user icon on the navigation bar */
.nav-bar2 .user-head img {
  height: 66px;
  width: 66px;
}

/* hides the icon of hamburger menu and user profile icon */
.nav-bar2 .icon,
.nav-bar2 .profile {
  display: none;
}

/* styling on the navigatable link whose page the user is currently on */
.nav-bar2 .active {
  background-color: rgb(59, 26, 109);
  color: white;
}

/* styling that will take place when user hovers on the link */
.nav-bar2 .link:hover,
button.user-head:hover {
  background-color: rgb(79, 53, 122);
  cursor: pointer;
}

/* media query which allows the navigation bar to be responsive */
@media screen and (max-width: 1000px) {
  /* hides all elements in the nav bar except for the link that is currently active,
  the logo and the hamburger menu */
  .nav-bar2 :not(.active, .logo, .fas) {
    display: none;
  }

  /* appears the hamburger menu on the right hand side of the page */
  .nav-bar2 button.icon {
    float: right;
    display: block;
  }

  /* for hamburger icon*/
  .hamburger {
    padding: 5px;
    color: white;
    border: none;
    outline: none;
    background: transparent;
    margin: 4% 2% 0% 4%;
  }

  /* when hamburger icon is hovered */
  .hamburger:hover {
    cursor: pointer;
  }

  /* sets the position of the icons and blocks at a responsive stage */
  .nav-bar2.responsive {
    position: relative;
  }
  .nav-bar2.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  /* appears the page redirection button (<a> tag) as blocks */
  .nav-bar2.responsive .link,
  .nav-bar2 .dropdown-content {
    float: none;
    display: block;
    text-align: left;
  }

  /* at a responsive stage, hides the icon of the user profile */
  .nav-bar2.responsive a.user-head {
    display: none;
  }

  /* styling for the search bar at a responsive stage */
  .nav-bar2.responsive input {
    width: 100%;
  }
}

/* ===================FINISHED STYLING FOR NAVIGATION BAR=============== */
</style>
