<template>
  <NavBar :isSigned="isLoggedIn" />
  <div class="landing">
    <div class="landing-phone-image">
      <img src="../assets/landing.png" alt="landing" />
    </div>
    <div class="landing-content">
      <h1>YOUR MOROCCAN CULINARY DREAM</h1>
      <p>
        Welcome to our restaurant where every plate becomes a real work of art
        that you can enjoy on your lips
      </p>
      <router-link :to="OrderRedirect" class="order-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          height="1rem"
        >
          <path
            d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V428.7c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z"
          />
        </svg>
        <h3>Make an order</h3>
      </router-link>
    </div>
    <div class="landing-image">
      <img src="../assets/landing.png" alt="landing" />
    </div>
  </div>
  <div class="pub-container">
    <div class="pub-slide">
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
    </div>
    <div class="pub-slide">
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
      <h3>MADE WITH LOVE &#x1f525;</h3>
    </div>
  </div>
  <div class="homepage">
    <div class="homepage-phone-image">
      <img src="../assets/homepage.png" alt="homepage" />
    </div>
    <div class="homepage-content">
      <h1>A TASTE OF MOROCCAN TRADITION IN EVERY SERVING</h1>
      <p>
        Welcome to RestoMA, an authentic Moroccan culinary experience. Immerse
        yourself in the rich flavors and aromas of Morocco as you indulge in our
        traditional dishes, crafted with love and the finest ingredients. From
        savory tagines and fluffy couscous to our delightful mint tea and sweet
        pastries, each bite is a journey to the vibrant streets of Marrakech.
        Whether you're looking for a cozy dinner for two or a lively celebration
        with friends, our warm and inviting atmosphere promises a memorable
        dining experience.
      </p>
      <router-link to="/menu" class="homepage-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="1rem"
        >
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
        <h3>Discover Menu</h3>
      </router-link>
    </div>
    <div class="homepage-image">
      <img src="../assets/homepage.png" alt="homepage" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$base-color: #da4438;
.landing {
  display: flex;
  position: relative;
  overflow: hidden;
  height: calc(100vh - 140px);
  margin-bottom: 100px;
}
.landing .landing-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 60px;
  width: 70%;
}
.landing .landing-content h1 {
  font-size: 5rem;
  font-weight: bolder;
  color: $base-color;
}
.landing .landing-content p {
  font-size: 2rem;
  font-weight: 200;
  color: $base-color;
}
.landing .landing-content .order-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  background-color: $base-color;
  padding: 15px 30px;
  border-radius: 40px;
  transition: 0.7s ease-in;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
}
.landing .landing-content .order-button:hover {
  background-color: #fff;
  border: 1px $base-color solid;
  scale: 1.05;
  h3 {
    color: $base-color;
  }
  svg {
    fill: $base-color;
  }
}
.landing .landing-content .order-button h3 {
  font-size: 1rem;
  margin: 0;
  padding: 0 10px;
  color: #fff;
  font-weight: 400;
}
.landing .landing-content .order-button svg {
  fill: #fff;
}

.landing .landing-image {
  width: 30%;
  position: absolute;
  right: 50px;
  top: -20px;
}

.landing .landing-image img {
  height: 500px;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.pub-container {
  margin: 40px 0;
  overflow: hidden;
  padding: 10px 0;
  border-top: 2px solid $base-color;
  border-bottom: 2px solid $base-color;
  white-space: nowrap;
  display: flex;
}
.pub-container .pub-slide {
  display: flex;
  animation: 20s slide infinite linear;
}
.pub-container .pub-slide h3 {
  font-size: 1.3rem;
  padding: 0 15px;
  color: $base-color;
}

.homepage {
  display: flex;
  margin-top: 100px;
  position: relative;
}

.homepage-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 60px;
  width: 70%;
  h1 {
    font-size: 3rem;
    font-weight: bolder;
    color: $base-color;
  }
  p {
    width: 90%;
    font-size: 1.5rem;
    font-weight: 200;
    color: $base-color;
  }
}
.homepage .homepage-content .homepage-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  background-color: $base-color;
  padding: 15px 30px;
  border-radius: 40px;
  transition: 0.7s ease-in;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
}
.homepage .homepage-content .homepage-button:hover {
  background-color: #fff;
  border: 1px $base-color solid;
  scale: 1.05;
  h3 {
    color: $base-color;
  }
  svg {
    fill: $base-color;
  }
}
.homepage .homepage-content .homepage-button h3 {
  font-size: 1rem;
  margin: 0;
  padding: 0 10px;
  color: #fff;
  font-weight: 400;
}
.homepage .homepage-content .homepage-button svg {
  fill: #fff;
}

.homepage .homepage-image {
  position: absolute;
  right: 0;
}
.homepage .homepage-image img {
  height: 400px;
}
.landing-phone-image {
  display: none;
}
@media screen and (max-width: 1200px) {
  .homepage .homepage-image {
    position: absolute;
    right: 0;
  }
  .homepage .homepage-image img {
    height: 200px;
  }
  .landing .landing-image {
    width: 30%;
    position: absolute;
    right: 50px;
    top: -20px;
  }

  .landing .landing-image img {
    height: 400px;
  }
}
.homepage-phone-image {
  display: none;
}
@media screen and (max-width: 992px) {
  .landing {
    flex-direction: column;
    height: auto;
  }
  .landing .landing-image {
    display: none;
  }
  .landing .landing-phone-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      height: 300px;
    }
  }
  .landing .landing-content {
    padding: 0 20px;
    width: 100%;
  }
  .landing .landing-content h1 {
    font-size: 2.3rem;
    width: 100%;
  }
  .landing .landing-content p {
    font-size: 1rem;
    font-weight: 200;
    color: $base-color;
  }
  .pub-container {
    margin: 20px 0;
  }
  .homepage .homepage-image {
    display: none;
  }
  .homepage .homepage-phone-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      height: 300px;
    }
  }
  .homepage {
    margin: 0;
    flex-direction: column;
  }
  .homepage-content {
    padding: 0 20px;
    width: 100%;
    h1 {
      font-size: 2rem;
    }
    p {
      width: 100%;
      font-size: 1rem;
    }
  }
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
let auth;
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  components: {
    NavBar,
  },
  inject: ["emitter"],
  methods: {
    signOutTrigger() {
      signOut(auth).then(() => {
        this.$router.push("/");
      });
    },
  },
  mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.emitter.on("SignOutTrig", () => {
      this.signOutTrigger();
    });
  },
  computed: {
    OrderRedirect() {
      if (this.isLoggedIn) {
        return "/order";
      } else {
        return "/signin";
      }
    },
  },
};
</script>
