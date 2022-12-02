<template>
    <div>
        <Top />
        <Product />
        <Featured />
    </div>
</template>

<script>
import Top from '../../components/Home/Top.vue'
import Product from '../../components/Home/Products.vue'
import Featured from '../../components/Home/Featured.vue'

export default {
    components: {
        Top,
        Product,
        Featured
    }
}
</script>
