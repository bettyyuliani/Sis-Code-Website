<!-- This component creates the navigation bar
used in the home page for non-logged in users.
It is an interactive nav-bar, which changes colors as user scrolls the page.

Vue concepts in this component:
1. single file component
2. class binding
3. custom directives
4. event handler (.prevent modifier)
5. routing
 -->
<template>
  <!-- navigation bar -->
  <!-- binding class for responsiveness and stickiness -->
  <div :class="{ responsive: isExpanded, sticky: scrolled, sticky1: scrolledfurther}"
  class="nav-bar" id="nav-bar" v-onscroll="handleScroll">
    <!-- logo on the navigation bar -->
    <img src="../assets/logo.png" class="logo" />
    <!-- redirection to other sections in the page -->
    <a href="#firstpage" v-on:click.prevent="navigate('#firstpage')">Home</a>
    <a href="#secondpage" v-on:click.prevent="navigate('#secondpage')">Learn</a>
    <a href="#thirdpage" v-on:click.prevent="navigate('#thirdpage')">Testimonials</a>
    <a href="#forthpage" v-on:click.prevent="navigate('#forthpage')">Mentoring</a>
    <!-- routes to other pages -->
    <router-link class="link" to="/contactform">Contact Us</router-link>
    <router-link class="link" to="/register">Register</router-link>
    <router-link class="link" to="/login">Log In</router-link>
    <!-- calls nav bar function when user clicks on the icon used for hamburger menu -->
    <button href="javascript:void(0);" class="icon hamburger" v-on:click="navbarFunc">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false, //for responsiveness
      scrolled: false, //changes background to grey
      scrolledfurther: false //changes background to purple
    };
  },
  // custom directive to detect user scroll
  directives: {
    onscroll: {
      inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
    }
  },
  mounted() {
  },
  methods: {
    /**
     * @description toggles sticky navigation bar,
     * works by changing the boolean value of 'scrolled' and 'scrolledfurther'
     * effect seen: grey navigation bar if scrolled is true,
     * purple navigation bar if scrolledfurther is true
     */
    handleScroll: function() {
       if ( window.scrollY > 0 ) {
        this.scrolled = true
       }
       else {
         this.scrolled = false
       }
       if (window.scrollY > window.innerHeight - window.innerHeight / 6)
       {
         this.scrolledfurther = true
       }
       else {
         this.scrolledfurther = false
       }
    },
    /**
     * @description toggles responsiveness
     */
    navbarFunc: function() {
      this.isExpanded = !this.isExpanded;
    },
    /**
     * @description navigate to sections in the page
     * @param href
     */
    navigate: function(href) {
      location.href = href;
    }
  }
};
</script>

<style>
/* =================STYLING FOR NAVIGATION BAR================= */

/* adds sticky navigation bar */
.sticky {
  top: 0;
  width: 100%;
  background-color: rgb(70, 70, 70);
}

/* changes color when it reaches second page */
.sticky1 {
  background-color: rgba(102, 72, 149, 1);
}

/* changes color when user hovers */
.nav-bar.sticky1 a:hover {
  background-color: rgb(79, 53, 122);
}

/* rest of the content will be invisible if content is overflow */
.nav-bar {
  position: fixed;
  overflow: hidden;
  z-index: 99999999999;
  transition: 0.6s;
  width: 100%;
}

/* sets the logo on the left most of the navigation bar along with its size */
.nav-bar .logo {
  float: left;
  width: 100px;
  height: 93px;
  vertical-align: middle;
}

/* styles the direct-able texts or buttons in the navigation bar */
.nav-bar .link,
.nav-bar a {
  float: left;
  font-weight: 400;
  padding: 42px 2.43vw;
  font-size: 18px;
  text-decoration: none;
  color: white;
}

/* hides the icon of hamburger menu */
.nav-bar .icon {
  display: none;
}

/* set background color for the <a> tag,
or the button that redirects user to other pages */
.nav-bar .link:hover,
.nav-bar a:hover {
  background-color: grey;
}

/* media query which allows navigation bar to be responsive */
@media screen and (min-width: 200px) and (max-width: 1000px) {
  /* hides everything in the navigation bar except for logo */
  .nav-bar :not(.logo, .fas) {
    display: none;
  }
  /* appears the hamburger menu icon and set it to the right hand side */
  .nav-bar button.icon {
    float: right;
    display: block;
  }
  .hamburger {
    padding: 5px;
    color: white;
    border: none;
    outline: none;
    background: transparent;
    margin: 4% 2% 7% 4%;
    float: right;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  /* sets the position of the icons and blocks at a responsive stage */
  .nav-bar.responsive {
    position: relative;
  }
  .nav-bar.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  /* appears the page redirection button (<a> tag) as blocks */
  .nav-bar.responsive .link,
  .nav-bar.responsive a {
    float: none;
    display: block;
    background-color: rgb(70, 70, 70);
    text-align: left;
  }

  .nav-bar.responsive .link:hover,
  .nav-bar.responsive a:hover {
    background-color: grey;
  }
  .sticky {
    position: absolute;
  }
}

/* adds sticky navigation bar */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(70, 70, 70);
}

/* changes color when it reaches second page */
.sticky1 {
  background-color: rgba(102, 72, 149, 1);
}

/* changes color when user hovers */
.nav-bar.sticky1 a:hover {
  background-color: rgb(79, 53, 122);
}

/* =================FINISHED STYLING FOR NAVIGATION BAR================== */
</style>
