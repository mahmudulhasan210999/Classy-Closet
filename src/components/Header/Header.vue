<template>
    <div class="w-full flex flex-col">
        <div class="bg-gray-300 py-4 flex justify-between items-center px-20">
            <!-- Logo -->
            <div>
                <router-link to="/">
                    <img class="h-16 rounded-lg" src="../../assets/logo/logo.jpg" alt="Logo">
                </router-link>
            </div>

            <!-- Options -->
            <div class="flex justify-center items-center">
                <router-link to="/">
                    <p class="pr-2 text-gray-600 hover:text-gray-800 font-semibold">Home</p>
                </router-link>

                <router-link to="/products">
                    <p class="px-2 text-gray-600 hover:text-gray-800 font-semibold">Products</p>
                </router-link>

                <router-link to="/about">
                    <p class="px-2 text-gray-600 hover:text-gray-800 font-semibold">About</p>
                </router-link>

                <router-link to="/contact">
                    <p class="px-2 text-gray-600 hover:text-gray-800 font-semibold">Contact</p>
                </router-link>

                <router-link to="/cart">
                    <p class="pl-2 text-gray-600 hover:text-gray-800">
                        <i class="pi pi-shopping-cart icon" style="font-size: 1.8rem;"></i>
                    </p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>
