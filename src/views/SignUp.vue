<template>
  <div class="signup">
    <router-link to="/" class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </router-link>
    <div class="signup-container">
      <div class="phone-container">
        <div class="signup-card">
          <h1>Sign up</h1>
          <div class="mail-input">
            <div class="labels">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="1.2rem"
              >
                <path
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              <h3>Email</h3>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Type Your E-mail"
              v-model="email"
            />
          </div>
          <div class="mail-input">
            <div class="labels">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="1.2rem"
              >
                <path
                  d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                />
              </svg>
              <h3>Password</h3>
            </div>
            <div class="password-input">
              <input
                :type="typePass"
                name="password"
                placeholder="Type Your password"
                v-model="password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height="1.5rem"
                class="password-input-icon"
                v-if="!showPass"
                @click="showPassword"
              >
                <path
                  d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                height="1.5rem"
                class="password-input-icon"
                v-if="showPass"
                @click="showPassword"
              >
                <path
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"
                />
              </svg>
            </div>
          </div>
          <button @click="register">Sign UP</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$base-color: #da4438;
.signup {
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo img {
    height: 70px;
    margin-top: 20px;
  }
}
.signup .signup-container {
  height: calc(100vh - 90px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup .signup-container .signup-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 70px;
  border: 1px solid $base-color;
  border-radius: 20px;
}

.signup .signup-container .signup-card .mail-input {
  margin: 20px 0;
}

.signup .signup-container .signup-card .mail-input .password-input {
  position: relative;
}
.signup .signup-container .signup-card .mail-input .password-input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  cursor: pointer;
}

.signup .signup-container .signup-card .mail-input .labels {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  svg {
    fill: $base-color;
  }
}
.signup .signup-container .signup-card .mail-input .labels h3 {
  font-size: 1.2rem;
  margin: 0;
  padding: 0 10px;
  color: $base-color;
}
.signup .signup-container .signup-card .mail-input input {
  width: 500px;
  padding: 10px 10px;
}
.signup .signup-container .signup-card button {
  background-color: $base-color;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 40px;
  transition: 0.4s ease-in-out;
}
.signup .signup-container .signup-card button:hover {
  scale: 1.05;
}
@media screen and (max-width: 650px) {
  .signup .signup-container .signup-card .mail-input input {
    width: 300px;
    padding: 10px 10px;
  }
  .signup .signup-container .signup-card {
    padding: 20px;
    width: 100%;
  }
  .phone-container {
    width: 100%;
    padding: 20px;
  }
}
.signup .signup-container .signup-card h1 {
  color: $base-color;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bolder;
  padding: 0;
  margin: 0;
  align-self: center;
}
</style>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      showPass: false,
      email: "",
      password: "",
    };
  },
  methods: {
    showPassword() {
      this.showPass = !this.showPass;
    },
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(() => {
          console.log("registered");
          this.$router.push("/menu");
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    },
    signInwithGoogle() {},
  },
  computed: {
    typePass() {
      if (!this.showPass) {
        return "password";
      } else {
        return "text";
      }
    },
  },
};
</script>
