<template>
    <div class="w-full flex flex-col px-40 py-10">
        <Toast />
        <div v-for="(product, index) in products" :key="index">
            <div v-if="product.slug == slug">
                <img class="w-full h-60 lg:h-72 xl:h-96 rounded-xl" :src="product.banner_image" alt="Image">
                <div class="text-left py-4">
                    <p class="text-xl font-semibold">{{ product.name }}</p>
                    <div class="flex text-blue-500">
                        <p class="pt-2 pr-6">Price: {{ product.price }} BDT</p>
                        <p @click="addToCart(product)" class="border rounded-lg px-3 py-1 bg-gray-100 hover:text-blue-800 pt-2 cursor-pointer">Add to Cart<i class="pi pi-shopping-cart icon pl-2"></i></p>
                    </div>
                    <p class="pt-2 text-gray-600">{{ product.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Toast from "primevue/toast";

export default {
    props: ['slug'],

    components: {
        Toast
    },
    
    data() {
        return {
            
        }
    },

    computed: {
        ...mapState ({
            products: state => state.products.products
        }),
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
