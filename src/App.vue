<script setup>
import NavigationBar from './NavigationBar.vue'
import Product from './ProductCard.vue'
</script>

<template>
  <NavigationBar />
  <Product />
</template>

<style>
:root {
  font-family: Kumbh Sans;
}

body {
  margin: 0;
}

@media (min-width: 1000px) {
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
