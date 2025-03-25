import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const cart = reactive({
  items: [],
  quantity: 0,
})

cart.addItem = function (item) {
  this.items.push(item)

  this.calculateQuantity()
}

cart.removeItem = function (uuid) {
  var index = this.items.indexOf((item) => item.uuid == uuid)
  this.items.pop(index)

  this.calculateQuantity()
}

cart.calculateQuantity = function () {
  this.quantity = this.items.reduce((sum, item) => sum + item.quantity, 0)
}

app.config.globalProperties.$cart = cart

app.use(router)

app.mount('#app')
