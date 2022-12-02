import { createStore } from 'vuex'
import products from './modules/products'
import featured from './modules/featured'

export default createStore({
    modules: {
        products,
        featured
    },

    state () {
        return {}
    },
    getters: {},
    mutaions: {},
    actions: {}
})

