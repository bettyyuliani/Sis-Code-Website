<!-- This component is an interactive section in homepage which prompt users
to click on a button, while displaying a series of quotes in turns.
a transition effect is applied between the change of quotes 
to improve user experience and the aesthetic of the page

Blueprint:
this section differed from the original proposal, which was to
create a personality quiz from scratch.
due to time constraint, this feature was removed and an external
quiz is linked instead

Vue concepts in this component:
1. transition
2. single file component
3. conditional rendering
4. event handling
 -->

<template>
  <!-- container for the second section of the webpage -->
  <div id="secondpage">
    <!-- container for decorative image -->
    <div class="decorative-quiz">
      <img src="../assets/computer.jpg" />
    </div>

    <!-- default text that user sees -->
    <transition name="slide-fade">
      <!-- appears with animation -->
      <div id="introduction" v-if="page === 'introduction'">
        <p class="prompt-title">
          It may be overwhelming to start something new
        </p>
        <p>
          When we try something new, such as learning a new skill, our brains
          and bodies are challenged. Once stagnant or underused
          neurotransmitters or muscles are shocked and put to use. Our bodies
          and brains thrive on the attention, and we feel better as we put them
          into practice.
        </p>
        <!-- redirects to second chunk of text -->
        <button v-on:click="page = 'second'">Read more</button>
      </div>
    </transition>

    <!-- second chunk of text, hidden by default -->
    <transition name="slide-fade">
      <!-- appears with animation -->
      <div id="second" v-if="page === 'second'">
        <p class="prompt-title">I promise, it is rewarding</p>
        <p>
          "I hope that in this year to come, you make mistakes. Because if you
          are making mistakes, then you are making new things, trying new
          things, learning, living, pushing yourself, changing yourself,
          changing your world. You're doing things you've never done before, and
          more importantly, you're doing something." — Neil Gaiman
        </p>
        <!-- redirects to third chunk of text -->
        <button v-on:click="page = 'third'">Read more</button>
      </div>
    </transition>

    <!-- third chunk of text, hidden by default -->
    <transition name="slide-fade">
      <!-- appears with animation -->
      <div id="third" v-if="page === 'third'">
        <p class="prompt-title">New skills for career change</p>
        <p>
          Switching to a career in IT is within your reach, even if it may seem
          daunting. Anyone with the desire to get an IT job can find one that
          suits their unique skills, talents and interests. There's a good
          chance that many of the soft skills you already have apply to a career
          in IT. One of the best things about IT careers is the sheer number of
          them. You just have to identify the right one for you and make a plan
          to acquire the experience and/or training you need to market yourself
          to hiring managers.
        </p>
        <!-- redirects to forth chunk of text -->
        <button v-on:click="page = 'forth'">Read more</button>
      </div>
    </transition>

    <!-- forth chunk of text, hidden by default -->
    <transition name="slide-fade">
      <!-- appears with animation -->
      <div id="forth" v-if="page === 'forth'">
        <p class="prompt-title">What do you want out of IT?</p>
        <p>
          What are you passionate about? How much money do you want to be
          earning? What makes you happy in a professional sense? Helping people?
          Solving problems? Being able to show off your creative side? These are
          questions you should ask yourself as you begin to research possible
          career options. You need to take a personal inventory of everything
          you desire out of a job and really ask yourself, “what career is best
          for me?”.
        </p>
        <!-- redirects to fifth chunk of text -->
        <button v-on:click="page = 'quiz'">Read more</button>
      </div>
    </transition>

    <!-- fifth chunk of text, hidden by default -->
    <transition name="slide-fade">
      <!-- appears with animation -->
      <div id="quiz" v-if="page === 'quiz'">
        <p class="prompt-title">Your career with<span style="color: rgba(102, 72, 149, 1)"><strong> coding?</strong></span></p>
        <p class="description" style="color: rgba(102, 72, 149, 1); text-align: center; font-weight: 500; font-size: 2rem;">
          Take a quiz to find out!
          </p>
        <!-- redirects to external link -->
        <a href="https://www.codecademy.com/explore/sorting-quiz" target="_blank"><button v-on:click="displayPrompt">Start Quiz</button></a>
      </div>
    </transition>

    <!-- sixth chunk of text -->
    <div id="ready">
      <p class="description" style="color: rgba(102, 72, 149, 1); text-align: center; font-weight: 500; font-size: 2rem;">
        <strong>Ready to start with us?</strong>
      </p>
      <!-- routes to register page -->
      <router-link class="link" to="/register"><button>Join now</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // default page user sees
      page: "introduction"
    };
  },
  methods: {
    /**
     * @description toggle between 'quiz' section and final 'join us' prompt
     */
    displayPrompt: function() {
      this.clicked = true;
      if (this.clicked == true) {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("ready").style.display = "block";
      }
    }
  }
};
</script>

<style scoped>
/* transition when new chunk of text appears */
.slide-fade-enter-active {
  transition: all 0.8s ease-in-out;
}

/* transition when old chunk of text leaves the screen */
.slide-fade-leave-active {
  opacity: 0;
}

/* how the text enters the screen */
.slide-fade-enter {
  transform: translateX(20px);
  opacity: 0;
}

/* styles all buttons */
button {
  background-color: rgba(102, 72, 149, 1);
  color: white;
  height: 70px;
  width: 15rem;
  margin-top: 30px;
  border-radius: 20px;
  border: none;
  font-size: 24px;
  font-weight: 600;
}

/* styles when user hovers */
button:hover {
  background-color: white;
  color: rgba(102, 72, 149, 1);
  cursor: pointer;
}

/* entire page's container */
#secondpage {
  background-color: rgb(214, 214, 214);
  display: flex;
  margin-top: -20px;
}

/* container for the image */
.decorative-quiz {
  margin-top: 120px;
  margin-bottom: 120px;
  width: 40%;
}

/* styling for image */
.decorative-quiz img {
  width: 30vw;
  border-right: 15px solid white;
  border-bottom: 15px solid white;
  border-top: 15px solid white;
  border-radius: 5px;
  box-shadow: 5px 5px 8px 5px grey;
}

/* styling for every chunk of text by default */
#quiz,
#ready,
#introduction,
#second,
#third,
#forth {
  margin-top: 180px;
  width: 90%;
  text-align: center;
  line-height: 3;
}

/* additional styles for each text chunk */
#ready {
  display: none;
  margin-top: 270px;
}

#introduction,
#third {
  margin-top: 100px;
}

#second,
#forth {
  margin-top: 120px;
}

/* styles for text and title */
#introduction p,
#second p,
#third p,
#forth p {
  width: 90%;
  margin-left: 5%;
}

.prompt-title {
  font-size: 2.8rem;
  color: black;
  font-weight: 500;
  text-align: center;
  margin: 0;
}

/* adding responsiveness for the page */
@media screen and (max-width: 1000px) {
  #secondpage {
    padding-bottom: 150px;
  }
  .decorative-quiz {
    display: none;
  }

  #quiz,
  #ready,
  #introduction,
  #second,
  #third,
  #forth {
    width: 100%;
  }

  #quiz .prompt-title {
    font-size: 2.2rem;
  }
}
</style>
