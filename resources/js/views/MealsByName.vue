<template>
    <div class="p-8">
        <input type="text" @change="searchMeals" v-model="keyword" class="text-black rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals">
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue';
import store from '../store';
import Meals from '../components/Meals.vue';

const router = useRouter();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch('searchMeals', keyword.value);
}
</script>