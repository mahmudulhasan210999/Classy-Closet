import { createStore } from 'vuex'
import products from './modules/products'
import featured from './modules/featured'
import teams from './modules/teams'
import cart from './modules/cart'

export default createStore({
    modules: {
        products,
        featured,
        teams,
        cart
    },

    getters: {},
    mutaions: {},
    actions: {}
})

