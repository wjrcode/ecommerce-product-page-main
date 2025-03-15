<template>
  <nav class="nav">
    <div>
      <img src="./assets/icon-menu.svg" alt="Menu Icon" class="nav__menu" />
      <img src="./assets/logo.svg" alt="Logo Sneakers" />
    </div>
    <div>
      <img src="./assets/icon-cart.svg" alt="Cart Icon" />
      <img class="nav-avatar" src="./assets/image-avatar.png" />
    </div>
  </nav>
</template>

<style scoped>
.nav {
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  background-color: blanchedalmond;
}

.nav__menu {
  margin-right: 1rem;
}

.nav-avatar {
  width: 24px;
  margin-left: 1rem;
}
</style>
