<template>
    <div class="w-full flex flex-col px-40 py-10">
        <div>
            <p class="text-4xl text-left">Featured</p>

            <Carousel :value="featured_products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <div class="border-2 m-4">
                        <router-link :to="{ path: '/featured-product-details/' + slotProps.data.slug }">
                            <img class="w-full h-72" :src="slotProps.data.img" alt="Image">
                        </router-link>
                        
                        <div class="border-t-2 p-4">
                            <p class="text-xl">{{ slotProps.data.name }}</p>
                            <p class="font-semibold">Price {{ slotProps.data.price }} BDT</p>
                            <!-- <p class="text-justify">{{ slotProps.data.details }}</p> -->
                            <router-link :to="{ path: '/featured-product-details/' + slotProps.data.slug }">
                                <button class="text-blue-500 hover:text-blue-800">Show Details</button>
                            </router-link>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Carousel from 'primevue/carousel';

export default {
    components: {
        Carousel,
    },
    
    data () {
        return {
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '600px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ],
        }
    },

    computed: {
        ...mapState({
            featured_products: state => state.featured.featured_products
        })
    },
}
</script>
