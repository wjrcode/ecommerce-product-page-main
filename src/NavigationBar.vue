<template>
  <nav class="nav">
    <div>
      <img src="./assets/icon-menu.svg" alt="Menu Icon" class="nav__menu" />
      <img src="./assets/logo.svg" alt="Logo Sneakers" />
    </div>
    <div class="nav__actions">
      <svg width="22" height="20">
        <use xlink:href="./assets/icon-cart.svg#icon-cart" fill="hsl(219, 9%, 45%)"></use>
      </svg>
      <img class="nav-avatar" src="./assets/image-avatar.png" />
    </div>
  </nav>
</template>

<style scoped>
.nav {
  padding: 1.5rem 1.8rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
}

.nav__menu {
  margin-right: 1rem;
}

.nav__actions {
  display: flex;
}

.nav-avatar {
  width: 24px;
  margin-left: 1rem;
}
</style>
