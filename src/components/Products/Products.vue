<template>
    <div class="w-full flex flex-col px-40 py-10">
        <p class="text-4xl text-left">Products</p>

        <div class="grid grid-cols-3 gap-6 py-6">
            <div v-for="(product, index) in products" :key="index">
                <div class="border border-gray-300 rounded-lg">
                    <router-link :to="{ path: '/product-details/' + product.slug }">
                        <img class="w-full h-52 rounded-t-lg" :src="product.img" alt="Image">
                        <div class="p-4">
                            <p class="text-xl">{{ product.name }}</p>
                            <p class="font-semibold">Price {{ product.price }} BDT</p>
                            <p class="text-justify">{{ product.details }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {}
    },

    computed: {
        ...mapState({
            products: state => state.products.products,
        })
    },
}
</script>
