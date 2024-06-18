<template>
    <a target="_blank" :href="href"
        class="px-3 text-white py-2 rounded bg-red-500 hover:bg-red-600">
        <slot></slot>    
    </a>
</template>

<script setup>
    const props = defineProps({
        href: String
    });
</script>