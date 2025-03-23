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

.product__image {
  height: 360px;
  width: 100%;
  object-fit: cover;
}

.product__info {
  padding: 1.8rem;
}

.product__brand {
  text-transform: uppercase;
  letter-spacing: 0.15rem;
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

.product__quantity {
  background-color: hsl(223, 64%, 98%);
  border-radius: 1rem;
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.product__input {
  border: none;
  background-color: transparent;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  max-width: 75px;
}

.product__input:focus {
  outline: none;
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
  box-shadow: 0 40px 50px hsla(26, 100%, 55%, 0.268);
}

.product__button > svg {
  height: 20px;
}
</style>
