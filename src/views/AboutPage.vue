<template>
  <NavBar :isSigned="isLoggedIn" />
  <div class="container">
    <div class="about-us">
      <h1>About Us</h1>
      <p>
        Our web application is designed to streamline the management of a
        Moroccan food restaurant, offering a seamless experience for both the
        restaurant staff and customers. The application combines the rich
        heritage of Moroccan cuisine with modern technology to enhance
        efficiency, improve customer service, and drive business growth.
      </p>
      <h1>Our Meals</h1>
      <ul>
        <li>- Moroccan Tagine</li>
        <li>- Moroccan Couscous</li>
        <li>- grillade</li>
        <li>- pastilla</li>
        <li>- mssmen</li>
        <li>- harsha</li>
        <li>- Moroccan salade</li>
        <li>- Baghrir</li>
        <li>- Moroccan tea</li>
        <li>- zaalouk</li>
      </ul>
    </div>
  </div>
</template>

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
};
</script>

<style lang="scss" scoped>
$base-color: #da4438;
.about-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 0;
}
.about-us h1 {
  color: $base-color;
  font-size: 4rem;
  font-weight: bold;
  font-style: italic;
}
.about-us p {
  color: #555;
  font-size: 1.2rem;
  font-weight: 300;
}
.about-us ul {
  list-style: none;
  li {
    color: #555;
    font-size: 1.2rem;
    font-weight: 300;
  }
}
</style>
