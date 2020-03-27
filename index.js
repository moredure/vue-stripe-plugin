export default {
  install (Vue, options) {
    Vue.prototype.$stripe = window.Stripe(options.key)
    Vue.prototype.$elements = Vue.prototype.$stripe.elements()
  }
}
