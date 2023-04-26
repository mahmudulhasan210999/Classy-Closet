import p_img1 from "../../assets/products/1.jpg"
import p_img2 from "../../assets/products/2.jpg"
import p_img3 from "../../assets/products/3.jpg"
import p_img4 from "../../assets/products/4.jpg"
import p_img5 from "../../assets/products/5.jpg"
import p_img6 from "../../assets/products/6.jpg"

import banner_img1 from "../../assets/products/iceland_banner.jpg"
import banner_img2 from "../../assets/products/chittagong_banner.jpg"
import banner_img3 from "../../assets/products/saint-martin_banner.jpg"
import banner_img4 from "../../assets/products/kuakata_banner.jpg"
import banner_img5 from "../../assets/products/rangamati_banner.jpg"
import banner_img6 from "../../assets/products/sylhet_banner.jpg"

const state = {
    products: [
        {
            id: 1,
            product_image: p_img1,
            banner_image: banner_img1,
            name: 'Product-1',
            slug: 'product-1',
            quantity: 1,
            price: 5000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 2,
            product_image: p_img2,
            banner_image: banner_img2,
            name: 'Product-2',
            slug: 'product-2',
            quantity: 1,
            price: 6000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 3,
            product_image: p_img3,
            banner_image: banner_img3,
            name: 'Product-3',
            slug: 'product-3',
            quantity: 1,
            price: 7000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 4,
            product_image: p_img4,
            banner_image: banner_img4,
            name: 'Product-4',
            slug: 'product-4',
            quantity: 1,
            price: 8000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 5,
            product_image: p_img5,
            banner_image: banner_img5,
            name: 'Product-5',
            slug: 'product-5',
            quantity: 1,
            price: 9000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 6,
            product_image: p_img6,
            banner_image: banner_img6,
            name: 'Product-6',
            slug: 'product-6',
            quantity: 1,
            price: 5000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
    ],
}

const getters = {}
const mutations = {}
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}