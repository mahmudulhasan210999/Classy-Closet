<template>
    <div class="w-full flex flex-col px-40 py-10">
        <div class="text-left">
            <p class="text-4xl text-blue-500">Contact Us</p>
        </div>

        <div class="py-6 w-full">
            <div class="flex flex-row">
                <!-- Map -->
                <div class="w-3/5 pr-8">
                    <iframe
                        class="map rounded-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1422244872433!2d90.42166437506765!3d23.81354107862741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1682537336816!5m2!1sen!2sbd" style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>
                </div>

                <!-- Address -->
                <div class="lg:w-2/5 pt-0 flex justify-center items-center w-full">
                    <ul class="w-full">
                        <li class="flex flex-row">
                            <div class="contact">
                                <i class="pi pi-map-marker text-gray-500" aria-hidden="true"></i>
                                <p class="pt-1">Address</p>
                            </div>
                            <div class="flex justify-center items-center pl-8">
                                <p class="text-content">KA-244, Kuril, Progoti Shoroni, Dhaka</p>
                            </div>
                        </li>
                        <li class="lg:flex lg:flex-row flex flex-col mt-4 lg:mt-8">
                            <div class="contact">
                                <i class="pi pi-phone text-gray-500"  aria-hidden="true"></i>
                                <p class="pt-1">Call Us</p>
                            </div>
                            <div class="flex justify-center items-center lg:pl-8">
                                <p class="text-content">+880 1880 082100<br />+880 1830 089101<br />+880 1980 083152<br /></p>
                            </div>
                        </li>
                        <li class="lg:flex lg:flex-row flex flex-col mt-4 lg:mt-8">
                            <div class="contact">
                                <i class="pi pi-envelope text-gray-500" aria-hidden="true"></i>
                                <p class="pt-1">Email</p>
                            </div>
                            <div class="flex justify-center items-center lg:pl-8">
                                <p class="text-content">classy.closet123@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
.map {
    width: 100%;
    height: 420px;
}

.contact {
    border-right-width: 2px;
    min-width: 30%;
    @apply uppercase pt-2 pb-2 flex flex-col justify-center items-center border-gray-500;
}

.text-content {
    @apply text-gray-600 font-normal text-center lg:text-left;
}
</style>