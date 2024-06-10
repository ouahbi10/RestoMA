<template>
  <NavBar :isSigned="isLoggedIn" />
  <div class="container">
    <div v-if="!isLoaded" class="loader"></div>
    <div v-if="isLoaded" class="meal-page">
      <Transition name="slide-fade">
        <div v-if="showMsg" class="add-to-cart-message">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
            />
          </svg>
          <h3>Meal Added successfully To Order!</h3>
        </div>
      </Transition>
      <div class="meal-image">
        <img :src="meal.content.image" alt="meal-image" />
      </div>
      <div class="meal-details">
        <h2>{{ meal.content.name }}</h2>
        <span class="title-border"></span>
        <p>{{ meal.content.description }}</p>
        <div class="add-to-cart">
          <div class="add-to-cart-button" @click="addToCart(meal.content)">
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
          <h3 class="price">{{ meal.content.price }} $</h3>
        </div>
        <div class="additives">
          <div class="additives-heading">
            <div @click="clickadditiveHandle" :class="additivehandle(addValue)">
              <h3>Additive</h3>
            </div>
            <div
              v-if="meal.content.type"
              @click="clicktypeHandle"
              :class="typehandle(typeValue)"
            >
              <h3>Type</h3>
            </div>
          </div>
          <div class="additives-body">
            <div v-if="addValue" class="additives-true">
              <div
                v-for="additive in meal.content.additives"
                :key="additive.name"
              >
                <label class="check-container"
                  ><h3>{{ additive.name }}</h3>
                  <input type="checkbox" @click="additives(additive.name)" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$base-color: #da4438;
.meal-page {
  display: flex;
  position: relative;
}
.meal-page .add-to-cart-message {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4bb543;
  padding: 50px;
  border-radius: 20px;
}
.meal-page .add-to-cart-message svg {
  height: 70px;
  fill: #fff;
}
.meal-page .add-to-cart-message h3 {
  margin-top: 70px;
  color: #fff;
}
.meal-page .meal-image {
  padding: 20px;
}
.meal-page .meal-image img {
  height: 450px;
}
.meal-page .meal-details {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding: 10px 0;
}
.meal-page .meal-details h2 {
  color: $base-color;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 500;
  position: relative;
}
.meal-page .meal-details .title-border {
  display: flex;
  height: 1.8px;
  width: 100%;
  background-color: $base-color;
}
.meal-page .meal-details p {
  margin: 20px 0;
  color: $base-color;
  font-size: 0.9rem;
  font-weight: 400;
}
.meal-page .add-to-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  .add-to-cart-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    background-color: $base-color;
    padding: 15px 30px;
    border-radius: 40px;
    transition: 0.7s ease-in;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    h6 {
      font-size: 1rem;
      margin: 0;
      padding: 0 10px;
      color: #fff;
      font-weight: 400;
    }
    svg {
      fill: #fff;
    }
  }
  .add-to-cart-button:hover {
    background-color: #fff;
    border: 1px $base-color solid;
    scale: 1.01;
    h6 {
      color: $base-color;
    }
    svg {
      fill: $base-color;
    }
  }
  .price {
    font-size: 1.8rem;
    margin: 0;
    padding-left: 20px;
    color: $base-color;
    font-weight: bold;
  }
}
.meal-details .additives {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 30px 0;
  width: 100%;
}
.meal-details .additives .additives-heading {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid $base-color;
  border-bottom: none;
}
.meal-details .additives .additives-heading .additives-title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 50px;
  cursor: pointer;

  h3 {
    color: #da4438;
    font-size: 1.1rem;
    font-weight: 500;
  }
}
.meal-details .additives .additives-heading .additives-title.active {
  background-color: $base-color;
  h3 {
    color: #fff;
  }
}

.meal-details .additives .additives-body {
  padding: 20px 50px;
  border: 1px solid $base-color;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.meal-details .additives .additives-body .additives-true {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.meal-details .additives .additives-body .additives-true .check-container h3 {
  color: $base-color;
  font-size: 1rem;
  margin: 0;
  text-transform: capitalize;
}

.check-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.check-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 10%;
  transform: translateY(-5px);
}

/* On mouse-over, add a grey background color */
.check-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.check-container input:checked ~ .checkmark {
  background-color: #e89791;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.check-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.check-container .checkmark:after {
  left: 7px;
  top: 2px;
  width: 10px;
  height: 16px;
  border: solid $base-color;
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@media screen and (max-width: 992px) {
  .meal-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 576px) {
  .meal-page .meal-image img {
    height: 350px;
  }
  .meal-page .meal-details h2 {
    font-size: 2rem;
  }
  .meal-details .additives .additives-body {
    padding: 20px;
  }
  .meal-details .additives .additives-body .additives-true .check-container h3 {
    font-size: 0.9rem;
  }

  .meal-page .add-to-cart-message {
    width: 70%;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4bb543;
    padding: 30px;
    border-radius: 20px;
  }
  .meal-page .add-to-cart-message svg {
    height: 70px;
    fill: #fff;
  }
  .meal-page .add-to-cart-message h3 {
    margin-top: 20px;
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/database";
import { useCartStore } from "@/store";
let auth;
export default {
  data() {
    return {
      isLoaded: false,
      isLoggedIn: false,
      meal: {},
      meals: [],
      addValue: true,
      userid: "",
      showMsg: false,
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
    additivehandle(addValue) {
      if (addValue) return "additives-title active";
      else {
        return "additives-title";
      }
    },

    clickadditiveHandle() {
      this.typeValue = false;
      this.addValue = true;
    },

    additives(name) {
      this.meal.content.additives.forEach((additive) => {
        if (additive.name == name) {
          additive.add = !additive.add;
        }
      });
    },
    async addToCart(meal) {
      const cartStore = useCartStore();
      cartStore.addToCart(this.userid, meal);
      this.showMsg = true;
      setTimeout(() => {
        this.showMsg = false;
      }, 800);
    },
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(database, "meals"));
    querySnapshot.forEach((doc) => {
      if (doc.id == this.$route.params.mealid) {
        const meal = {
          id: doc.id,
          content: doc.data(),
          done: doc.data().done,
        };
        this.meal = meal;
      }
    });
    console.log(this.meal);
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
        this.userid = auth.currentUser.uid;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.emitter.on("SignOutTrig", () => {
      this.signOutTrigger();
    });
    this.isLoaded = true;
  },
};
</script>
