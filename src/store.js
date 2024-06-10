import { defineStore } from "pinia";
import { ref } from "vue";
import { database } from "./database";
import {
  collection,
  doc,
  query,
  updateDoc,
  setDoc,
  where,
  getDocs,
} from "firebase/firestore";

export const useCartStore = defineStore("cart", () => {
  const cart = ref({
    userid: null,
    cart: [],
  });

  const addToCart = async (userId, product) => {
    cart.value.userid = userId;

    // Query the collection for a document with the specified userid
    const q = query(
      collection(database, "cart"),
      where("userid", "==", userId)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // If the document exists, update it
      const docId = querySnapshot.docs[0].id;
      const cartDoc = querySnapshot.docs[0].data();
      const currentCart = cartDoc.cart || [];

      const existingProduct = currentCart.find(
        (item) => item.name === product.name
      );
      if (existingProduct) {
        // If the product already exists, increment its quantity
        existingProduct.quantity++;
      } else {
        // If the product does not exist, add it with quantity 0
        product.quantity = 1;
        currentCart.push(product);
      }

      const cartRef = doc(database, "cart", docId);
      await updateDoc(cartRef, { cart: currentCart });
    } else {
      // If the document does not exist, create a new one
      product.quantity = 1;
      const newDocRef = doc(collection(database, "cart"));
      await setDoc(newDocRef, {
        userid: userId,
        cart: [product],
      });
    }
  };

  return { cart, addToCart };
});
