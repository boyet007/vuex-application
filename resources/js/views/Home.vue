<template>
    <div class="p-8 pb-0 text-orange-500">
        <input type="text" name="" id="" class="rounded-border-2 border-gray-200 w-full" placeholder="Search for Meals">
    </div>

    <div class="flex gap-2 pb-2 mt-2 justify-center">
        <router-link :to="{ name: 'byLetter', params: {letter} }" v-for="letter of letters.split('')" :key="letter">
            {{ letter }}
        </router-link>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ingredients = ref([]);

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list');
    ingredients.value = response.data;
});
</script>