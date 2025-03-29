<template>
  <button class="product__button" :class="classes" @click="action()">
    <slot name="icon"></slot>
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    shadow: Boolean,
  },
  computed: {
    classes() {
      if (this.shadow) return 'product__button--shadow'
      return ''
    },
  },
  methods: {
    action() {
      this.$emit('action')
    },
  },
}
</script>

<style scoped>
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

.product__button--shadow {
  box-shadow: 0 40px 50px hsla(26, 100%, 55%, 0.268);
}
</style>
