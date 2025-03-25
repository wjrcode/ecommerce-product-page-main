<template>
  <div v-if="showModal" class="cart">
    <div class="cart__backdrop" @click="closeDialog()"></div>
    <div class="cart__content">
      <h3 class="cart__header">Cart</h3>
      <hr />
      <p v-if="this.$cart.items.length == 0" class="cart_empty">Your cart is empty</p>
      <ul v-else class="cart__items">
        <li v-for="item in this.cart.items" :key="item.uuid" class="cart__item">
          <img :src="item.image" alt="Product Image" class="cart__item-image" />
          <div class="cart__item-details">
            <p>{{ item.name }}</p>
            <div class="cart__item-prices">
              <p>{{ item.price }} x {{ item.quantity }}</p>
              <p>{{ item.price * item.quantity }}</p>
            </div>
          </div>
          <img
            @click="removeItem(item.uuid)"
            src="./assets/icon-delete.svg"
            alt="Delete Icon"
            class="cart__delete-button"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
  },
  computed: {
    cart() {
      return this.$cart
    },
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    },
    removeItem(uuid) {
      this.$cart.removeItem(uuid)
    },
  },
}
</script>

<style>
.cart {
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
}

.cart__content {
  margin: 0.5rem;
  margin-top: 2rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.7rem;
}

.cart__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.cart__header {
  font-weight: 700;
  margin: 0;
}

hr {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid hsl(223, 64%, 98%);
}

.cart_empty {
  display: flex;
  min-height: 160px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: hsl(219, 9%, 45%);
}

.cart__items {
  list-style-type: none;
  padding: 0;
}

.cart__item {
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: space-between;
}

.cart__item-details > p,
.cart__item-prices > p {
  margin: 0;
}

.cart__item-image {
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;
}

.cart__item-prices {
  display: flex;
  margin-top: 0.5rem;
}

.cart__delete-button {
  width: 14px;
  height: 15.4px;
}
</style>
