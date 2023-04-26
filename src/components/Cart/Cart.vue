<template>
    <div class="w-full flex flex-col px-40 py-10">
        <p class="text-4xl text-left">Cart</p>

        <div>
            <div v-if="cartItem.length > 0">
                <DataTable :value="cartItem" responsiveLayout="scroll">
                    <Column header="Image">
                        <template #body="slotProps">
                            <img 
                                v-if="slotProps.data.product_image"
                                :src="slotProps.data.product_image" 
                                alt="product-image" 
                                class="h-24 w-24"
                            />
                            <img v-else
                                src='https://via.placeholder.com/96x96'
                                class="h-24 w-24"
                            /> 
                        </template>
                    </Column>
                    <Column header="Name">
                        <template #body="slotProps">
                            {{ slotProps.data.name }}
                        </template>
                    </Column>
                    <Column header="Unit Price">
                        <template #body="slotProps">
                            {{ slotProps.data.price }}
                            <!-- <div class="flex">
                                <p class="mr-0.5" style="font-size:1.2rem;">৳</p>
                                <p class="mt-1" v-if="slotProps.data.on_sale">{{slotProps.data.offer_price}}</p>
                                <p class="mt-1" v-else>{{slotProps.data.sell_price}}</p>
                            </div> -->
                        </template>
                    </Column>
                    <Column header="Quantity">
                        <template #body="slotProps">
                            <div class="flex">
                                <div v-if="slotProps.data.quantity > 1">
                                    <button
                                        type="button"
                                        class="m-1"
                                        data-type="minus"
                                        data-field
                                        @click="decrement(slotProps.data)"
                                    >
                                        <i class="pi pi-angle-left"></i>
                                    </button>
                                </div>
                                <div class="ml-2 mr-2">
                                    <p class="text-lg">{{slotProps.data.quantity}}</p>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        class="m-1"
                                        data-type="plus"
                                        data-field
                                        @click="increment(slotProps.data)"
                                    >
                                        <i class="pi pi-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </template>
                    </Column>
                    <Column header="Remove">
                        <template #body="slotProps">
                            <i class="pi pi-times cursor-pointer px-3 py-2 border rounded-md border-red-500 bg-red-500" @click="removeItem(slotProps.data)" style="color: white;"></i>
                        </template>
                    </Column>
                    <Column header="Total">
                        <template #body="slotProps">
                            <div class="flex">
                                <p class="mr-0.5" style="font-size:1.2rem;">৳</p>
                                <p class="mt-1">{{ slotProps.data.price * slotProps.data.quantity }}</p>
                                <!-- <p class="mt-1" v-if="slotProps.data.on_sale">{{ slotProps.data.offer_price * slotProps.data.quantity }}</p>
                                <p class="mt-1" v-else>{{ slotProps.data.sell_price * slotProps.data.quantity }}</p> -->
                            </div>
                        </template>
                    </Column>

                </DataTable> 
                <!-- <div class="flex justify-end items-end mr-16 mt-8">
                    <button class="button text-sm sm:text-base" @click="toCheckout()">CHECKOUT</button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
    components: {
        DataTable, 
        Column,
    },

    data() {
        return {
            cartItem: [],
        }
    },

    computed: {
        ...mapState({
            cart: state => state.cart.cart,
        }),
    },

    mounted() {
        this.$store.dispatch('cart/getCart')
        this.cartItem = this.cart
        console.log(this.cartItem)
    },

    methods: {
        removeItem: function (product) {
            this.$store.dispatch('cart/removeCartItem', product) 
        },

        increment(product) {
            // product.quantity = product.quantity + qty;
            this.$store.dispatch('cart/updateCartQuantity', {product:product, qty:1})
        },

        decrement(product) {
            // product.quantity = product.quantity + qty;
            this.$store.dispatch('cart/updateCartQuantity', {product:product, qty:-1})
        }
    }
}
</script>
