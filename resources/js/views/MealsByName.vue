<template>
    <div class="p-8">
        <input type="text" @change="searchMeals" v-model="keyword" class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals">
    </div>

    <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <div v-for="(meal, index) in meals" :key="meal.idMeal" class="bg-white shadow rounded-xl p-2">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover" />
                <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
                <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni officiis dolore saepe, adipisci ipsum corrupti ipsam eveniet similique debitis.</p>
                <div class="flex items-center justify-between">
                    <a :href="meal.strYoutube" target="_blank" class="px-3 text-white py-2 rounded border-2 bg-red-500 hover:bg-red-600">Youtube</a>
                    <router-link to="/" class="px-3 py-2 rounded border-2 text-white bg-purple-500 border-purple-600">View</router-link>
                </div>
            </div>
        </div>

    </div>

    <!-- <pre>{{ meals }}</pre> -->

</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import store from '../store';

const router = useRouter();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch('searchMeals', keyword.value);
}
</script>