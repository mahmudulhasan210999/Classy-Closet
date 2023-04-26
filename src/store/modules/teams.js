import t_img1 from "../../assets/team/team1.jpg"
import t_img2 from "../../assets/team/team2.jpg"
import t_img3 from "../../assets/team/team3.jpg"

const state = {
    teams: [
        {
            id: 1,
            image: t_img1,
            name: "Umme Habiba",
            designation: "Founder & CEO"
        },
        {
            id: 2,
            image: t_img2,
            name: "Maliha Jahan",
            designation: "Manager"
        },
        {
            id: 3,
            image: t_img3,
            name: "Sanjeda Yesmin",
            designation: "Manager"
        }
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