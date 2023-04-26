const state = {
    cart: []
}

const getters = {}

const mutations = {
    SET_CART (state, item) {
        state.cart = item
    },
}

const actions = {
    getCart({ commit }) {
        if (!localStorage.getItem("cart_items")) {
            localStorage.setItem("cart_items", JSON.stringify([]));
        }
        commit('SET_CART', JSON.parse(localStorage.getItem("cart_items")))
    },

    addingToCart({commit}, payload) {
        let status = false
        let result= JSON.parse(localStorage.getItem("cart_items"));
        // console.log(result.find(value=> value.id===payload.product.id))
        // if(result.find(({ id }) => id === payload.product.id)) 
        if(result.find(({ id }) => id === payload.product.id)) {
            return status
        }
        else {
            // payload.product.quantity = 1;
            // console.log(payload.product.quantity)
            result.push(payload.product);
            localStorage.setItem("cart_items", JSON.stringify(result));
            status = true
            return status
        }
    },

    removeCartItem ({ commit, state, dispatch }, payload) {
        let result= JSON.parse(localStorage.getItem("cart_items"));

        let response=[]
        
        result.forEach(element => {
            if(element.id!==payload.id){
                response.push(element)
            }
        });
        localStorage.setItem("cart_items", JSON.stringify(response));
        dispatch('getCart')
    },

    updateCartQuantity: ({commit, state}, payload) => { 
        state.cart.filter((items, index) => {
          if (items.id == payload.product.id) {
            const qty = state.cart[index].quantity + payload.qty
            if (qty !== 0) {
              state.cart[index].quantity = qty;
            //   console.log(state.cart)
            }
          }
        })
        localStorage.setItem("cart_items", JSON.stringify(state.cart));
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}