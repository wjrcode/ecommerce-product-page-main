<script setup>
import NavigationBar from './NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <div class="product">
    <img class="product__image" src="./assets/image-product-1.jpg" />
    <div class="product__info">
      <header>
        <p class="product__brand">Sneaker Copany</p>
        <h1 class="product_name">Fall Limited Edition Sneakers</h1>
      </header>
      <p class="product__description">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
      <div class="product__pricing">
        <h2 class="product__price">$125.00</h2>
        <span class="product__discount">50%</span>
        <p class="product__old-price">$250.00</p>
      </div>
      <button class="product__button"><img src="./assets/icon-cart.svg" />Add to cart</button>
    </div>
  </div>
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

.product__info {
  padding: 2rem;
}

.product__brand {
  text-transform: uppercase;
  font-weight: 700;
  color: hsl(219, 9%, 45%);
  margin: 0;
  margin-bottom: 1rem;
}

.product_name {
  margin: 0;
  margin-bottom: 1rem;
}

.product__description {
  color: hsl(219, 9%, 45%);
  margin: 0;
}

.product__pricing {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 1rem;
  margin: 2rem 0;
}

.product__price {
  font-size: 2rem;
  margin: 0;
}

.product__discount {
  background-color: black;
  border-radius: 0.4rem;
  color: white;
  font-weight: 700;
  padding: 0.2rem 0.7rem;
  max-width: fit-content;
  margin: auto;
  max-height: fit-content;
}

.product__old-price {
  text-align: end;
  text-decoration: line-through;
  font-weight: 700;
  color: hsl(219, 9%, 45%);
  margin: 0;
}

.product__button {
  font-family: inherit;
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
  font-size: 1rem;
}
</style>
