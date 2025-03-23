<template>
  <div class="product">
    <ImageSlider :images="images" />
    <div class="product__info">
      <header>
        <p class="product__brand">Sneaker Company</p>
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
      <div class="product__quantity">
        <div>
          <img src="./assets/icon-minus.svg" alt="Minus Icon" @click="decrease()" />
        </div>
        <input type="number" v-model="quantity" class="product__input" />
        <div>
          <img src="./assets/icon-plus.svg" alt="Plus Icon" @click="increase()" />
        </div>
      </div>
      <button class="product__button">
        <svg viewBox="0 0 22 20">
          <use xlink:href="./assets/icon-cart.svg#icon-cart" fill="black"></use>
        </svg>
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue'
export default {
  data() {
    return {
      quantity: 0,
      images: [
        'src/assets/image-product-1.jpg',
        'src/assets/image-product-2.jpg',
        'src/assets/image-product-3.jpg',
        'src/assets/image-product-4.jpg',
      ],
    }
  },

  components: {
    ImageSlider,
  },

  methods: {
    increase() {
      this.quantity++
    },
    decrease() {
      if (this.quantity > 0) this.quantity--
    },
  },
}
</script>

<style scoped>
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
