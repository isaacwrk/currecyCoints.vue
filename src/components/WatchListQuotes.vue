<template>
<ListQuotes quotes="quotes"/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import ListQuotes from './ListQuotes.vue'

const listQuotes = defineComponent({
    setup(){
        const quotes = ref({})

        return{quotes}
    }
});

export default listQuotes;
</script>

<style>

</style>