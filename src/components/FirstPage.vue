<!-- This component is a static webpage which makes up a section in the home page.
some animation is used to improve user experience and the aesthetic of the page

Vue concepts in this component:
1. animation
2. single file component
 -->
<template>
  <!-- the first page of the website (home page) -->
  <div class="firstpage" id="firstpage">
    <div style="height:200px;"></div>
    <!-- a container for the 'welcome to' text -->
    <div class="words" id="words">
      <p class="welcometo">Welcome to</p>
      <div class="bounce siscode">
        <span class="letter">S</span>
        <span class="letter">i</span>
        <span class="letter">s</span>
        <span class="letter" style="padding-left:2%;"></span>
        <span class="letter">C</span>
        <span class="letter">o</span>
        <span class="letter">d</span>
        <span class="letter">e</span>
      </div>
      <!-- <p class ="siscode">Sis Code</p> -->
      <p class="welcome-message">
        We are on a mission to close the gender gap <br />
        within IT by teaching coding to women, getting <br />
        women into the beauty of programming, and <br />
        building an empire for women in tech. <br />
        Most importantly, we believe, women can be <br />
        <strong>empowered</strong> by technology! <br />
        Are you ready to start your journey?
      </p>
    </div>
    <!-- container for the button which redirects the user to register themselves -->
    <div class="get-started">
      <router-link class="link" to="/login"><button type="button" class="button">Get Started</button></router-link>
    </div>
    <!-- container for the arrow which has a jumping animation, used to prompt user to scroll down -->
    <div class="down-arrow">
      <img src="../assets/arrow.png" />
    </div>
  </div>
</template>

<style scoped>
/* styling for the get started button */

.button {
  background-color: white;
  margin-left: 5%;
  margin-top: 20px;
  border: none;
  padding: 0.7vw 0.6vh;
  color: rgba(102, 72, 149, 1);
  font-size: 2.4vh;
  border-radius: 10px;
  font-family: "Raleway";
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  z-index: 999999 !important;
}

/* changes the style of the get started button when user hovers on it */

.button:hover {
  background-color: rgba(102, 72, 149, 1) !important;
  color: white !important;
  cursor: pointer !important;
}

/* animation for when button is clicked */
.firstpage button:active {
  background-color: rgba(102, 72, 149, 1);
  color: white;
  box-shadow: 0 1px rgb(150, 150, 150);
  transform: translateY(4px);
}

/* styling for each letter */
.letter {
  animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
  display: inline-block;
  transform: translate3d(0, 0, 0);
  margin-top: 0.5em;
  text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
  font-size: 100px;
}

/* animation for each individual letter */
.letter:nth-of-type(1) {
  animation-delay: -0.083333333s;
}

.letter:nth-of-type(2) {
  animation-delay: 0.0833333333s;
}

.letter:nth-of-type(3) {
  animation-delay: 0.1666666667s;
}

.letter:nth-of-type(4) {
  animation-delay: 0.25s;
}

.letter:nth-of-type(5) {
  animation-delay: 0.3333333333s;
}

.letter:nth-of-type(6) {
  animation-delay: 0.4166666667s;
}

.letter:nth-of-type(7) {
  animation-delay: 0.4166666667s;
}

.letter:nth-of-type(8) {
  animation-delay: 0.4166666667s;
}

/* animation for the bounce effect */
@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, -0.5em, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
  }
}

/* creates a paralex background */
.firstpage {
  background-image: url("../assets/background.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  min-width: 480px;
  height: 100%;
}

/* styling for the 'welcome to' text */
.firstpage .words {
  margin-left: 5%;
}

.firstpage .welcometo {
  font-weight: 400;
  font-size: 4rem;
}

/* styling for the 'sis code' text */
.firstpage .siscode {
  font-weight: 700;
  font-size: 7.5rem;
}

/* styling for the welcome message which describes sis code*/
.firstpage .welcome-message {
  font-size: 1.4rem;
  font-weight: 400;
  margin: 0;
  line-height: 3.7vh;
}

/* styling for the container of the arrow icon */
.firstpage .down-arrow {
  margin-top: 80px;
  margin-bottom: 20px;
}

/* styling for the arrow icon which prompts user to scroll down */
.firstpage .down-arrow img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.2vh;
  width: 3vh;
  height: 3vh;
  animation: jump 1.2s infinite;
}

/* animation for arrow jumping effect */
@keyframes jump {
  50% {
    transform: translate(0, -50%) scale(1, 1);
  }
}

/* media query which allows welcome page to be responsive */
@media only screen and (max-width: 768px), (max-height: 640px) {
  .firstpage .words {
    margin-top: -30px;
    margin-left: 5%;
  }
  .firstpage .siscode {
    font-size: 5rem;
    text-align: center;
  }
  .firstpage .welcometo {
    font-size: 3rem;
    padding-left: 0;
    text-align: center;
  }

  .firstpage .welcome-message {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
  }
  .firstpage .get-started {
    text-align: center;
  }
  .firstpage .get-started button {
    font-size: 18px;
    margin-left: 0;
  }
}
</style>
