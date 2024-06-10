<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-item-link" to="/menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="1.1rem"
              >
                <path
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
              <h3>Menu</h3></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-item-link" :to="OrderRedirect">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height="1.1rem"
              >
                <path
                  d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V428.7c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z"
                />
              </svg>
              <h3>Order</h3></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-item-link" to="/about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="1.1rem"
              >
                <path
                  d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                />
              </svg>
              <h3>About</h3>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-item-link" to="/contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="1.1rem"
              >
                <path
                  d="M38.3 241.3L15.1 200.6c-9.2-16.2-8.4-36.5 4.5-50C61.4 106.8 144.7 48 256 48s194.6 58.8 236.4 102.6c12.9 13.5 13.7 33.8 4.5 50l-23.1 40.7c-7.5 13.2-23.3 19.3-37.8 14.6l-81.1-26.6c-13.1-4.3-22-16.6-22-30.4V144c-49.6-18.1-104-18.1-153.6 0v54.8c0 13.8-8.9 26.1-22 30.4L76.1 255.8c-14.5 4.7-30.3-1.4-37.8-14.6zM32 336c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V336zm0 96c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V432zM144 320h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V336zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V336zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V432c0-8.8 7.2-16 16-16zM128 432c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V432z"
                />
              </svg>
              <h3>Contact US</h3>
            </router-link>
          </li>
        </ul>
        <div class="icons">
          <router-link to="/signin" v-if="!isSigned" class="icons-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="1.8rem"
            >
              <path
                d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
              />
            </svg>
          </router-link>
          <div v-if="isSigned" class="icons-icon ms-3" @click="SignOutTrigger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="1.8rem"
            >
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
$base-color: #da4438;
.navbar {
  background: transparent;
  padding: 20px 0;
}
.navbar .navbar-brand img {
  height: 70px;
}
.navbar .navbar-navigate {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .navbar-nav {
  border: 1px $base-color solid;
  padding: 5px 20px;
  border-radius: 40px;
}

.navbar .navbar-nav .nav-item {
  padding: 10px 20px;
}

.navbar .navbar-nav .nav-item-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  transition: 0.4s ease-in-out;
}
.navbar .navbar-nav .nav-item-link:hover {
  scale: 1.1;
}
.navbar .navbar-nav .nav-item-link h3 {
  padding: 0 10px;
  font-size: 1.1rem;
  margin: 0;
  color: #da4438;
  font-weight: bold;
}

.navbar .navbar-nav .nav-item-link svg {
  fill: #da4438;
}
.navbar .icons {
  display: flex;
}
.navbar .icons .icons-icon {
  transition: 0.4s ease-in-out;
  border: 1px solid $base-color;
  border-radius: 100%;
  padding: 10px;
}
.navbar .icons .icons-icon:last-of-type {
  cursor: pointer;
}

.navbar .icons .icons-icon:hover {
  scale: 1.1;
}
.navbar .icons .icons-icon svg {
  fill: $base-color;
}

@media screen and (max-width: 992px) {
  .navbar .navbar-nav {
    border: none;
    padding: 0;
  }
  .navbar .navbar-nav .nav-item-link {
    justify-content: start;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px #a2a2a2 solid;
  }
}
</style>

<script>
export default {
  props: {
    isSigned: Boolean,
  },
  inject: ["emitter"],
  methods: {
    SignOutTrigger() {
      this.emitter.emit("SignOutTrig");
    },
  },
  computed: {
    OrderRedirect() {
      if (this.isSigned) {
        return "/order";
      } else {
        return "/signin";
      }
    },
  },
};
</script>
