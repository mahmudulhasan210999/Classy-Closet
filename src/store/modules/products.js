import p_img1 from "../../assets/products/iceland_image.jpg"
import p_img2 from "../../assets/products/chittagong_image.jpg"
import p_img3 from "../../assets/products/saint-martin_image.jpg"
import p_img4 from "../../assets/products/kuakata_image.jpg"
import p_img5 from "../../assets/products/rangamati_image.jpg"
import p_img6 from "../../assets/products/sylhet_image.jpg"

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
            img: p_img1,
            banner_image: banner_img1,
            name: 'Iceland',
            slug: 'iceland',
            price: 5000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 2,
            img: p_img2,
            banner_image: banner_img2,
            name: 'Chittagong',
            slug: 'chittagong',
            price: 6000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 3,
            img: p_img3,
            banner_image: banner_img3,
            name: 'Saint Martin',
            slug: 'saint-martin',
            price: 7000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 4,
            img: p_img4,
            banner_image: banner_img4,
            name: 'Kuakata',
            slug: 'kuakata',
            price: 8000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 5,
            img: p_img5,
            banner_image: banner_img5,
            name: 'Rangamati',
            slug: 'rangamati',
            price: 9000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 6,
            img: p_img6,
            banner_image: banner_img6,
            name: 'Sulhet',
            slug: 'sylhet',
            price: 5000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
    ],
}

const getters = {}
const actions = {}
const mutations = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}