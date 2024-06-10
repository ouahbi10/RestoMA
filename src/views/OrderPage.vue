<template>
  <Transition name="slide-fade"
    ><div v-if="showForm" class="submit-form-container">
      <div class="submit-form-content">
        <div class="submit-form-close" @click="handleForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            height="1.2rem"
          >
            <path
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            />
          </svg>
        </div>
        <h3 class="submit-form-title">Complete Your Order</h3>
        <form>
          <input
            type="text"
            placeholder="Your Address"
            name="address-input"
            v-model="address"
          />
          <input
            type="text"
            placeholder="Your Telephone"
            name="address-input"
            v-model="telephone"
          />
        </form>
        <div class="submit-form-button" @click="submitOrder">
          <h3>Send Your Order</h3>
        </div>
      </div>
    </div></Transition
  >
  <Transition name="slide-fade">
    <div v-if="happyMsg" class="add-to-cart-message">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zm40-89.3l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"
        />
      </svg>
      <h3>Enjoy your meal !</h3>
    </div>
  </Transition>
  <NavBar :isSigned="isLoggedIn" />
  <div v-if="!isLoaded" class="loader"></div>
  <div v-if="isLoaded" class="orders">
    <div v-if="emptyCart" class="container flex-column vh-75">
      <img src="@/assets/emptyCart.png" class="empty-cart-image" />
      <h3 class="empty-cart-head">Your Order is empty</h3>
      <p class="empty-cart-paragraph">
        Explore menu to add some meals to your order
      </p>
    </div>
    <div v-if="!emptyCart" class="container">
      <h1>Your Orders are :</h1>
      <div v-for="order in cart.content" class="order" :key="order.name">
        <div class="left d-flex justify-content-center align-items-center">
          <div class="order-image pe-5">
            <img :src="order.image" />
          </div>
          <div class="order-details">
            <h3 class="order-name">{{ order.name }}</h3>
            <h3 class="order-price">{{ order.price }} $</h3>
            <div class="order-additives">
              <h6>additives :</h6>
              <div
                class="order-additive"
                v-for="additive in order.additives"
                :key="additive.name"
              >
                <div class="additive" v-if="additive.add">
                  <h3>{{ additive.name }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order-manage">
          <div
            class="order-delete"
            @click="deleteObjectFromArray(cart.id, order.name)"
          >
            <h3>delete order</h3>
          </div>
          <div class="order-quantity">
            <div class="order-inc-dec" @click="quantityDec(order)">-</div>
            <div class="order-quantity-value">{{ order.quantity }}</div>
            <div class="order-inc-dec" @click="quantityInc(order)">+</div>
          </div>
        </div>
      </div>
      <span class="total-price-hr"></span>
      <div class="total-price">
        <h3><span>Total Price :</span> {{ totalPrice }} $</h3>
      </div>
      <div class="submit-order" @click="handleForm">
        <h3>Submit Order</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { database } from "@/database";
let auth;
export default {
  data() {
    return {
      isLoaded: false,
      isLoggedIn: false,
      userid: "",
      cart: {
        id: "",
        content: [],
      },
      showForm: false,
      address: "",
      telephone: "",
      prixtot: "",
      docid: "",
      happyMsg: false,
    };
  },
  inject: ["emitter"],
  components: {
    NavBar,
  },
  methods: {
    handleForm() {
      this.showForm = !this.showForm;
    },
    signOutTrigger() {
      signOut(auth).then(() => {
        this.$router.push("/");
      });
    },
    quantityInc(order) {
      order.quantity++;
    },
    quantityDec(order) {
      if (order.quantity > 0) order.quantity--;
    },
    async deleteObjectFromArray(docId, objectName) {
      const docRef = doc(database, "cart", docId);

      try {
        // Retrieve the document
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          console.log("No such document!");
          return;
        }

        // Get the array from the document
        const data = docSnap.data();
        let array = data.cart;

        // Filter out the object you want to remove (assuming objects have unique names)
        const newArray = array.filter((obj) => obj.name !== objectName);

        // Update the document with the modified array
        await updateDoc(docRef, {
          cart: newArray,
        });

        this.cart.content = await newArray;

        console.log("Object removed successfully");
      } catch (error) {
        console.error("Error removing object: ", error);
      }
    },
    async submitOrder() {
      this.prixtot = this.totalPrice;
      const newDocRef = doc(collection(database, "orders"));
      await setDoc(newDocRef, {
        userid: this.userid,
        elements: this.cart.content,
        telephone: this.telephone,
        address: this.address,
        totalPrice: this.prixtot,
      });
      const querySnapshot = await getDocs(collection(database, "cart"));
      await querySnapshot.forEach((doc) => {
        if (doc.data().userid == this.userid) {
          this.docid = doc.id;
        }
      });
      await deleteDoc(doc(database, "cart", this.docid));
      this.showForm = await false;
      this.cart.content = await [];
      this.happyMsg = await true;
      setTimeout(() => {
        this.happyMsg = false;
      }, 1300);
    },
  },
  async mounted() {
    auth = await getAuth();
    await onAuthStateChanged(auth, (user) => {
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
    const querySnapshot = await getDocs(collection(database, "cart"));
    await querySnapshot.forEach((doc) => {
      if (doc.data().userid == this.userid) {
        this.cart = {
          id: doc.id,
          content: doc.data().cart,
        };
      }
    });
    this.isLoaded = true;
  },
  computed: {
    emptyCart() {
      if (this.cart.content.length == 0) return true;
      else return false;
    },
    totalPrice() {
      let orderPrice = 0;
      this.cart.content.forEach((meal) => {
        orderPrice += meal.price * meal.quantity;
      });
      return orderPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
$base-color: #da4438;
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.add-to-cart-message {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
  padding: 50px;
  border-radius: 20px;
}
.add-to-cart-message svg {
  height: 70px;
  fill: #fff;
}
.add-to-cart-message h3 {
  margin-top: 70px;
  color: #fff;
}
.container .empty-cart-image {
  height: 200px;
  margin-top: 120px;
}
.container .empty-cart-head {
  font-weight: 400;
}
.container .empty-cart-paragraph {
  color: #9c9b9b;
  font-weight: 400;
}
.total-price-hr {
  display: inline-block;
  height: 1px;
  width: 100%;
  background-color: $base-color;
  margin-top: 20px;
}
.total-price {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  h3 {
    font-weight: 300;
    font-size: 1.6rem;
    padding: 20px;
    span {
      color: $base-color;
    }
  }
}
.submit-order {
  align-self: flex-end;
  background-color: #4bb543;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  h3 {
    margin: 0;
    font-size: 1rem;
    color: white;
    font-weight: 300;
    text-transform: uppercase;
  }
}
.submit-order:hover {
  background-color: #2a8324;
}
.orders {
  margin: 50px 0;
}
.orders h1 {
  color: $base-color;
  align-self: flex-start;
  text-transform: capitalize;
  font-weight: bolder;
}
.orders .order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid $base-color;
  padding: 20px;
  margin: 20px 0;
}
.orders .order .order-image img {
  height: 150px;
}
.orders .order .order-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}
.orders .order .order-details .order-name {
  color: $base-color;
  text-transform: uppercase;
  font-weight: 300;
}
.orders .order .order-details .order-price {
  color: $base-color;
  font-weight: bold;
}
.orders .order .order-details .order-additives {
  display: flex;
  justify-content: center;
  align-items: center;
}
.orders .order .order-details .order-additives h6 {
  color: $base-color;
  font-weight: bold;
  margin: 0;
}
.orders .order .order-details .order-additives .additive {
  background-color: #e89791;
  padding: 2px 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  h3 {
    font-size: 0.9rem;
    font-weight: bold;
    color: $base-color;
    text-transform: uppercase;
    margin: 0;
  }
}
.order-manage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}
.order-manage .order-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d13535;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  h3 {
    font-size: 0.9rem;
    font-weight: normal;
    color: #fff;
    text-transform: uppercase;
    margin: 0;
  }
}
.order-manage .order-delete:hover {
  background-color: #8c0d0d;
}
.order-manage .order-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  border: 2px solid #9c9b9b;
  overflow: hidden;

  border-radius: 20px;
}
.order-manage .order-quantity .order-inc-dec {
  padding: 3px 20px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  font-size: 1.7rem;
  background-color: #c7c7c7;
}
.order-manage .order-quantity .order-inc-dec:hover {
  background-color: rgb(190, 190, 190);
}
.order-manage .order-quantity .order-inc-dec:first-of-type {
  border-right: 2px solid #9c9b9b;
}
.order-manage .order-quantity .order-inc-dec:last-of-type {
  border-left: 2px solid #9c9b9b;
}
.order-manage .order-quantity .order-quantity-value {
  background-color: white;
  padding: 10px 20px;
}
.submit-form-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit-form-container .submit-form-content {
  position: relative;
  background-color: white;
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    text-transform: uppercase;
    font-weight: 300;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      padding: 10px 20px;
      margin: 20px 0;
      width: 100%;
      border: 1px solid #9c9b9b;
      transition: 0.4s ease-in-out;
    }
    input:focus {
      outline: none;
      border: 1px solid $base-color;
    }
  }
  .submit-form-button {
    padding: 10px 20px;
    background-color: rgb(30, 30, 212);
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    h3 {
      color: white;
      font-size: 1rem;
      margin: 0;
    }
  }
  .submit-form-button:hover {
    background-color: rgb(18, 18, 121);
  }
  .submit-form-close {
    position: absolute;
    cursor: pointer;
    right: 3%;
    top: 3%;
    svg {
      transition: 0.4s ease-in-out;
    }
  }
  .submit-form-close:hover {
    svg {
      fill: red;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@media screen and (max-width: 992px) {
  .submit-form-container .submit-form-content {
    width: 90%;
  }
  .order {
    flex-direction: column;
  }
  .orders .order .order-details .order-additives .additive {
    h3 {
      font-size: 0.6rem;
    }
  }
  .order-manage {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}
@media screen and (max-width: 576px) {
  .left {
    flex-direction: column;
  }
  .orders .order .order-details {
    align-items: center;
  }
  .orders .order .order-image {
    padding: 0 !important;
    margin-bottom: 10px;
  }
  .orders .order .order-details .order-additives .additive {
    h3 {
      font-size: 0.9rem;
    }
  }
  .order-manage .order-quantity .order-inc-dec {
    font-size: 1rem;
    height: 100%;
    padding: 10px 20px;
  }
  .order-manage .order-quantity .order-quantity-value {
    font-size: 1rem;
  }
}
@media screen and (max-width: 650px) {
  .add-to-cart-message {
    width: 90%;
  }
}
</style>
