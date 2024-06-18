<template>
    <div class="p-8 pb-0"><h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1></div>
     <div class="flex flex-wrap gap-3 px-8 mb-6 justify-center">
        <router-link :to="{ name: 'byLetter', params: {letter} }" v-for="letter of letters.split('')" :key="letter">
            {{ letter }}
        </router-link>
        <Meals :meals="meals"></Meals>
    </div>

</template>

<script setup>
    import { computed, onMounted, watch } from 'vue';
    import store from '../store';
    import { useRoute } from 'vue-router';
    import Meals from '../components/Meals.vue';

    const route = useRoute();
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const meals = computed(() => store.state.mealsByLetter);

    onMounted(() => {
        console.log('on mounted', route.params.letter)
        store.dispatch('searchMealsByLetter', route.params.letter);
    });

    watch(route, () => {
        store.dispatch("searchMealsByLetter", route.params.letter);
    });




</script>