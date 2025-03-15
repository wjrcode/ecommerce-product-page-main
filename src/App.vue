<script setup>
import NavigationBar from './NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <div class="product">
    <img class="product__image" src="./assets/image-product-1.jpg" />
    <header>
      <p>Sneaker Copany</p>
      <h1>Fall Limited Edition Sneakers</h1>
    </header>
    <p>
      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
      outer sole, they’ll withstand everything the weather can offer.
    </p>
    <div class="product__pricing">
      <h2>$125.00</h2>
      <span class="product__discount">50%</span>
      <p>$250.00</p>
    </div>
  </div>

  <button class="product__button"><img src="./assets/icon-cart.svg" />Add to cart</button>
</template>

<style>
:root {
  font-family: Kumbh Sans;
}

body {
  margin: 0;
}

.product__image {
  height: 360px;
  width: 100%;
  object-fit: cover;
}

.product__pricing {
  display: flex;
  align-items: center;
}

.product__discount {
  background-color: black;
  border-radius: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 0.5rem;
}

.product__button {
  width: 100%;
  background-color: hsl(26, 100%, 55%);
  border: none;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: black;
  font-weight: 700;
  font-size: 1.5rem;
}
</style>
