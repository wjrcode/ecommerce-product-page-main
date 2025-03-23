<template>
  <nav class="nav">
    <div>
      <div class="nav__menu">
        <img src="./assets/icon-menu.svg" alt="Menu Icon" @click="openMenu()" />
        <MenuDialog :showMenu="showMenu" @closeMenu="closeMenu" />
      </div>
      <img src="./assets/logo.svg" alt="Logo Sneakers" />
    </div>
    <div class="nav__actions">
      <div class="nav__cart">
        <svg width="22" height="20" @click="openDialog">
          <use xlink:href="./assets/icon-cart.svg#icon-cart" fill="hsl(219, 9%, 45%)"></use>
        </svg>
        <CartDialog :showModal="showModal" @closeDialog="closeDialog" />
      </div>
      <img class="nav-avatar" src="./assets/image-avatar.png" />
    </div>
  </nav>
</template>

<script>
import MenuDialog from './MenuDialog.vue'
import CartDialog from './CartDialog.vue'
export default {
  data() {
    return {
      showModal: false,
      showMenu: false,
    }
  },
  components: {
    MenuDialog,
    CartDialog,
  },
  methods: {
    openDialog() {
      this.showModal = true
    },
    closeDialog() {
      this.showModal = false
    },
    openMenu() {
      this.showMenu = true
    },
    closeMenu() {
      this.showMenu = false
    },
  },
}
</script>

<style scoped>
.nav {
  padding: 1.5rem 1.8rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
}

.nav__menu {
  display: inline;
  margin-right: 1rem;
  position: relative;
}

.nav__actions {
  display: flex;
}

.nav-avatar {
  width: 24px;
  margin-left: 1rem;
}

.nav__cart {
  position: relative;
  display: inline-block;
}
</style>
