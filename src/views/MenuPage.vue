<template>
  <NavBar :isSigned="isLoggedIn" />
  <div v-if="!isLoaded" class="loader"></div>
  <div v-if="isLoaded" class="menu">
    <div class="container">
      <h1>Our Dishes</h1>
      <div class="row menu-content">
        <div
          v-for="meal in meals"
          :key="meal.id"
          class="meal-card col-lg-4 col-md-6 col-sm-12"
        >
          <div class="card-content">
            <img :src="meal.content.image" alt="" />
            <h3 class="meal-name">{{ meal.content.name }}</h3>
            <p class="description">
              {{ shortText(meal.content.description) }}...
            </p>
            <router-link :to="MealRedirect(meal.id)" class="add-button">
              <div class="add-button-cont">
                <h6>{{ meal.content.price }} $</h6>
                <div class="cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    height="1rem"
                  >
                    <path
                      d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    />
                  </svg>
                  <h6>ADD TO ORDER</h6>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$base-color: #da4438;
.menu {
  margin: 50px 0;
}
.menu h1 {
  font-size: 4rem;
  font-weight: bolder;
  color: $base-color;
}
.menu .menu-content {
  margin: 30px 0;
}
.card-content {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid $base-color;
  padding: 20px;
  border-radius: 10px;
}

.meal-card .card-content img {
  height: 250px;
  border-radius: 10px;
}
.card-content .meal-name {
  align-self: flex-start;
  color: $base-color;
  font-size: 1.7rem;
  text-transform: uppercase;
  margin-top: 20px;
  font-weight: 400;
}
.card-content .description {
  color: $base-color;
  font-weight: bold;
}
.card-content .add-button {
  width: 90%;
  text-decoration: none;
  transition: 0.4s ease-in-out;
  margin-top: 10px;
}

.card-content .add-button:hover {
  scale: 1.03;
}
.card-content .add-button-cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $base-color;
  padding: 15px 30px;
  border-radius: 30px;
  h6 {
    color: white;
    margin: 0;
    font-size: 1rem;
    font-weight: 300;
  }
}
.card-content .add-button-cont .cart {
  display: flex;
  align-items: center;
  svg {
    fill: #fff;
  }
  h6 {
    padding-left: 5px;
  }
}
@media screen and (max-width: 1200px) {
  .card-content .add-button-cont h6 {
    font-size: 0.8rem;
  }
  .card-content {
    height: 600px;
  }
}
@media screen and (max-width: 992px) {
  .card-content .description {
    align-self: center;
  }
  .card-content .meal-name {
    align-self: center;
  }
}
@media screen and (max-width: 992px) {
  .card-content .add-button-cont h6 {
    font-size: 1rem;
  }
  .card-content {
    height: auto;
  }
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/database";

let auth;

export default {
  data() {
    return {
      isLoaded: false,
      isLoggedIn: false,
      meals: [],
    };
  },
  inject: ["emitter"],
  components: {
    NavBar,
  },
  methods: {
    signOutTrigger() {
      signOut(auth).then(() => {
        this.$router.push("/");
      });
    },
    shortText(text) {
      if (typeof text === "string") {
        return text.substr(0, 100);
      } else {
        return "";
      }
    },
    MealRedirect(id) {
      return `/${id}`;
    },
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(database, "meals"));
    querySnapshot.forEach((doc) => {
      const meal = {
        id: doc.id,
        content: doc.data(),
        done: doc.data().done,
      };
      this.meals.push(meal);
    });
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
    console.log(this.meals);
    this.isLoaded = true;
  },
  computed: {},
};
</script>
