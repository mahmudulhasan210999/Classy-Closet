<template>
    <div class="w-full flex flex-col">
        <div class="bg-gray-800 flex flex-col items-center">
            <!-- Logo and lorem -->
            <div class="flex flex-col items-center my-4">
                <router-link :to="{ path: '/' }"><img src="../../assets/logo/logo.png" class="h-12 w-60 my-4" alt="logo" /></router-link>
                <p class="text-xs sm:text-sm text-gray-400 my-2 px-10 md:px-24 lg:px-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            
            <!-- Social media Links -->
            <div> 
                <ul class="flex justify-start">
                    <li class="mr-8">
                        <a href="https://www.facebook.com/classicready0" target="_blank" >
                            <i class='pi pi-facebook' style="font-size: 1.5rem; color:#FFFFFF;" onmouseover="this.style.color='#4267B2'" onmouseleave="this.style.color='#FFFFFF'" aria-hidden="true"></i>
                        </a>   
                    </li>
                    <li class="mr-8">
                        <a target="_blank">
                            <i class='pi pi-twitter' style="font-size: 1.5rem; color:#FFFFFF;" onmouseover="this.style.color='#00acee'" onmouseleave="this.style.color='#FFFFFF'" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="mr-8">
                        <a target="_blank" >
                            <i class='pi pi-instagram' style="font-size: 1.4rem; color:#FFFFFF;" onmouseover="this.style.color='#bc2a8d'" onmouseleave="this.style.color='#FFFFFF'" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="">
                        <a target="_blank" >
                            <i class='pi pi-linkedin' style="font-size: 1.4rem; color:#FFFFFF;" onmouseover="this.style.color='#0A66C2'" onmouseleave="this.style.color='#FFFFFF'" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Buttons -->
            <div class="md:flex text-white my-5">
                <div class="flex pb-3 md:pb-0">
                    <div class="px-2">
                        <router-link :to="{ path: '/' }"><p class="options">HOME</p></router-link>
                    </div>

                    <div class="px-2">
                        <router-link :to="{ path: '/products' }"><p class="options">PRODUCTS</p></router-link>
                    </div>

                    <!-- <div class="px-2">
                        <router-link :to="{ path: '/cart' }"><p class="options">CART</p></router-link>
                    </div> -->
                </div>

                <div class="flex justify-center">
                    <div class="px-2">
                        <router-link :to="{ path: '/about' }"><p class="options">ABOUT</p></router-link>
                    </div>
                    <div class="px-2">
                        <router-link :to="{ path: '/contact' }"><p class="options">CONTACT</p></router-link>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Bottom portion -->
        <div class="bg-gray-900 p-6">
            <div class="text-white text-sm sm:text-base flex justify-center">
                <p class="pr-1 text-gray-400">© 2022 Developed by</p>
                <p class="pl-1">Mahmudul Hasan</p>
            </div>

            <!-- <p class="text-white text-sm sm:text-base">
                © 2022 Developed by <a class="tag-color" href="https://www.facebook.com/catchbitflex" target="_blank" >BitFlex </a> | <a class="tag-color" href="https://www.facebook.com/catchbangladesh" target="_blank" >Catch Bangladesh</a>
            </p> -->
        </div>           
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({})
    },

    created() {},
}
</script>

<style scoped>
.options {
  @apply text-gray-400 hover:text-gray-600 hover:cursor-pointer text-xs lg:text-sm px-3 lg:px-4 py-1 lg:py-2;
}

.tag-color {
  color: #007bff;
}

.tag-color:hover {
  color: #0056b3;
}
</style>