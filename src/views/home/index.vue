<template>
    <div>
        <Top />
        <Featured />
        <Product />
    </div>
</template>

<script>
import Top from '../../components/Home/Top.vue'
import Featured from '../../components/Home/Featured.vue'
import Product from '../../components/Home/Products.vue'

export default {
    components: {
        Top,
        Featured,
        Product
    }
}
</script>
