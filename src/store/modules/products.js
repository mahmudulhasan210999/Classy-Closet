import p_img1 from "../../assets/products/australia.jpg"
import p_img2 from "../../assets/products/chittagong.jpg"
import p_img3 from "../../assets/products/iceland.jpg"
import p_img4 from "../../assets/products/kuakata.jpg"
import p_img5 from "../../assets/products/rangamati.jpg"
import p_img6 from "../../assets/products/sylhet.jpg"

const state = {
    products: [
        {
            id: 1,
            img: p_img1,
            name: 'Sathi-1',
            price: 5000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 2,
            img: p_img2,
            name: 'Mahmud-2',
            price: 6000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 3,
            img: p_img3,
            name: 'Sathi-3',
            price: 7000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 4,
            img: p_img4,
            name: 'Mahmud-4',
            price: 8000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 5,
            img: p_img5,
            name: 'Sathi-5',
            price: 9000,
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga mollitia delectus reprehenderit hic voluptatum ullam similique nobis, eum vel, praesentium voluptas commodi rem minus unde illum vitae cupiditate blanditiis!'
        },
        {
            id: 6,
            img: p_img6,
            name: 'Sathi-6',
            price: 5000,
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