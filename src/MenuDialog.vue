<template>
  <div v-if="showMenu" class="menu">
    <div class="menu__backdrop" @click="closeMenu()"></div>
    <div class="menu__content">
      <img
        src="./assets/icon-close.svg"
        alt="Close Icon"
        @click="closeMenu()"
        class="menu__button"
      />
      <ul class="menu__page-list">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showMenu: Boolean,
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
  },
}
</script>

<style scoped>
.menu {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.menu__content {
  background-color: white;
  height: 100%;
  max-width: 200px;
  padding: 2rem;
  z-index: 2;
}

.menu__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.menu__button {
  margin-bottom: 2rem;
}

.menu__page-list {
  list-style-type: none;
  padding: 0;
  font-weight: 700;
  font-size: 1.5rem;
}

.menu__page-list > li {
  margin-bottom: 1.5rem;
}
</style>
