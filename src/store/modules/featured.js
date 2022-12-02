import f_img1 from "../../assets/featured_products/1.jpg"
import f_img2 from "../../assets/featured_products/2.jpg"
import f_img3 from "../../assets/featured_products/3.jpg"
import f_img4 from "../../assets/featured_products/4.jpg"
import f_img5 from "../../assets/featured_products/5.jpg"
import f_img6 from "../../assets/featured_products/6.jpg"
import f_img7 from "../../assets/featured_products/7.jpg"

const state = {
    featured_products: [
        {
            id: 1,
            img: f_img1,
            name: 'Featured-1',
            price: 5000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 2,
            img: f_img2,
            name: 'Featured-2',
            price: 6000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 3,
            img: f_img3,
            name: 'Featured-3',
            price: 7000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 4,
            img: f_img4,
            name: 'Featured-4',
            price: 8000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 5,
            img: f_img5,
            name: 'Featured-5',
            price: 9000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 6,
            img: f_img6,
            name: 'Featured-6',
            price: 5000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 7,
            img: f_img7,
            name: 'Featured-7',
            price: 7000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
    ],
}

const getters = {}
const actions = {
}
const mutations = {
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}