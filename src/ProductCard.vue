<template>
  <div class="product">
    <ImageSlider :images="product.images" />
    <div class="product__info">
      <header>
        <p class="product__brand">{{ product.brand }}</p>
        <h1 class="product_name">{{ product.name }}</h1>
      </header>
      <p class="product__description">{{ product.description }}</p>
      <div class="product__pricing">
        <h2 class="product__price">{{ formatMoney(product.price) }}</h2>
        <span class="product__discount">50%</span>
        <p class="product__old-price">{{ formatMoney(product.old_price) }}</p>
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
      <ButtonDefault @action="addToCart" label="Add to cart" shadow>
        <template v-slot:icon>
          <svg width="22" height="20">
            <use xlink:href="./assets/icon-cart.svg#icon-cart" fill="black"></use>
          </svg>
        </template>
      </ButtonDefault>
    </div>
  </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue'
import ButtonDefault from './ButtonDefault.vue'
import { formatMoney } from '@/utils/helpers'

export default {
  data() {
    return {
      quantity: 1,
      product: {
        name: 'Fall Limited Edition Sneakers',
        brand: 'Sneaker Company',
        description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they’ll withstand everything the weather can offer.`,
        price: 125,
        discount: 50,
        old_price: 250,
        images: [
          'src/assets/image-product-1.jpg',
          'src/assets/image-product-2.jpg',
          'src/assets/image-product-3.jpg',
          'src/assets/image-product-4.jpg',
        ],
      },
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
    ButtonDefault,
  },

  methods: {
    formatMoney,
    increase() {
      this.quantity++
    },
    decrease() {
      if (this.quantity > 1) this.quantity--
    },
    addToCart() {
      this.$cart.addItem({
        uuid: self.crypto.randomUUID(),
        name: this.product.name,
        quantity: this.quantity,
        price: this.product.price,
        image: this.product.images[0],
      })
    },
  },
}
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
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

@media (min-width: 1000px) {
  .product {
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
}
</style>
