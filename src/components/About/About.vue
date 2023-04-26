<template>
    <div class="w-full flex flex-col px-40 py-10">
        <div class="text-left">
            <p class="text-4xl text-blue-500">About Us</p>
        </div>

        <div class="py-6 text-gray-700">
            <p class="text-3xl py-2 text-blue-500">This is our Story -----</p>

            <p class="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea harum itaque labore inventore, accusantium doloribus obcaecati vitae. Inventore tenetur, sequi dignissimos esse suscipit harum ut recusandae nihil architecto error! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, autem voluptatibus? Iusto repudiandae aspernatur quisquam expedita recusandae distinctio deleniti excepturi sequi quaerat consequuntur ratione mollitia corporis nemo, sed porro! Odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea harum itaque labore inventore, accusantium doloribus obcaecati vitae. Inventore tenetur, sequi dignissimos esse suscipit harum ut recusandae nihil architecto error! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, autem voluptatibus? Iusto repudiandae aspernatur quisquam expedita recusandae distinctio deleniti excepturi sequi quaerat consequuntur ratione mollitia corporis nemo, sed porro! Odio?</p>
        </div>

        <div class="text-left pt-2">
            <p class="text-3xl py-2 text-blue-500">Meet our Team</p>
        </div>

        <div class="flex gap-8">
            <div v-for="(team, index) in teams" :key="index">
                <div class="border border-gray-300 rounded-md">
                    <img class="w-full h-60" :src="team.image" alt="">
                    <div class="p-2">
                        <p class="text-xl">{{ team.name }}</p>
                        <p>{{ team.designation }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            teams: state => state.teams.teams
        })
    },
}
</script>