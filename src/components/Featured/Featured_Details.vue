<template>
    <div class="w-full flex flex-col px-40 py-10">
        <div v-for="(product, index) in featured_products" :key="index">
            <div v-if="product.slug == slug">
                <img class="h-60 lg:h-72 xl:h-96 rounded-xl" :src="product.img" alt="Image">
                <div class="text-left py-4">
                    <p class="text-xl font-semibold">{{ product.name }}</p>
                    <p class="pt-2 text-gray-600">Price: {{ product.price }} BDT</p>
                    <p class="pt-2 text-gray-600">{{ product.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    props: ['slug'],
    
    data() {
        return {
            
        }
    },

    computed: {
        ...mapState ({
            featured_products: state => state.featured.featured_products
        }),
    },
}
</script>
