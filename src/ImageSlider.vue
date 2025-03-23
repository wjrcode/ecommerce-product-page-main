<template>
  <div class="product__images">
    <img class="product__image" :src="images[index]" />
    <button class="image__button image__button--previous" @click="back()">
      <img src="./assets/icon-previous.svg" alt="Previous Icon" />
    </button>
    <button class="image__button image__button--next" @click="next()">
      <img src="./assets/icon-next.svg" alt="Next Icon" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },

  data() {
    return {
      index: 0,
    }
  },

  methods: {
    next() {
      if (this.index < this.images.length - 1) this.index++
    },
    back() {
      if (this.index > 0) this.index--
    },
  },
}
</script>

<style scoped>
.product__images {
  position: relative;
}

.product__image {
  height: 360px;
  width: 100%;
  object-fit: cover;
}

.image__button {
  position: absolute;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background: white;
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image__button--next {
  top: 45%;
  right: 2%;
}

.image__button--previous {
  top: 45%;
  left: 2%;
}
</style>
