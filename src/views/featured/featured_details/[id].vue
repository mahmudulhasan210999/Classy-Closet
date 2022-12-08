<template>
    <div>
        <FeaturedDetails :slug="getFeaturedDetails()" />
    </div>
</template>

<script>
import FeaturedDetails from '../../../components/Featured/Featured_Details.vue'

export default {
    components: {
        FeaturedDetails,
    },

    methods: {
        getFeaturedDetails() {
            return this.$route.params.id
        }
    }
}
</script>
