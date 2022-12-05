<template>
    <div>
        <ProductDetails :slug="getProductDetails()" />
    </div>
</template>

<script>
import ProductDetails from '../../../components/Products/Product_Details.vue'

export default {
    components: {
        ProductDetails,
    },

    methods: {
        getProductDetails() {
            return this.$route.params.id
        }
    }
}
</script>
