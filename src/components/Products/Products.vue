<template>
    <div class="w-full flex flex-col px-40 py-10">
        <Toast />
        <p class="text-4xl text-left">Products</p>

        <div class="grid grid-cols-3 gap-6 py-6">
            <div v-for="(product, index) in products" :key="index">
                <div class="border border-gray-300 rounded-lg">
                    <router-link :to="{ path: '/product-details/' + product.slug }">
                        <img class="w-full h-64 rounded-t-lg" :src="product.product_image" alt="Image">
                    </router-link>
                    <div class="p-4">
                        <p class="text-xl">{{ product.name }}</p>
                        <p class="font-semibold">Price: {{ product.price }} BDT</p>

                        <router-link :to="{ path: '/product-details/' + product.slug }">
                            <button class="text-sm font-semibold text-gray-500 hover:text-gray-800 pt-2">Details<i class="pi pi-arrow-right icon pl-1" style="font-size: 0.8rem;"></i></button>
                        </router-link>

                        <div class="flex justify-center pt-2">
                            <p @click="addToCart(product)" class="w-2/5 border rounded-lg px-3 py-1 bg-gray-100 text-blue-500 hover:text-blue-800 pt-2 cursor-pointer">Add to Cart<i class="pi pi-shopping-cart icon pl-2"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Toast from "primevue/toast";

export default {
    components: {
        Toast
    },

    computed: {
        ...mapState({
            products: state => state.products.products,
        })
    },

    methods: {
        addToCart(item) {
            console.log(item)
            this.$store.dispatch('cart/addingToCart', {product:item});
            this.$toast.add({severity: 'success', summary: 'Success!', detail: 'Product added to Cart.', closable: false, life: 3000})
        },
    }
}
</script>
