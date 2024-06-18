<template>
    <div class="p-8 pb-0 text-orange-500">
        <input type="text" name="" id="" class="rounded-border-2 border-gray-200 w-full" placeholder="Search for Meals">
    </div>


</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';


const ingredients = ref([]);

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list');
    ingredients.value = response.data;
});
</script>