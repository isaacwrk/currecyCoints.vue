<template>
    <ListQuotes quotes="quotes" :listen-quotes="listenQuotes"/>
    <div class="mt-2 text-right">
        <cite class="text-small">
            Atualizará novamente em <b>{{nextUpdateTime}} segundos</b>
        </cite>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import ListQuotes from './ListQuotes.vue';

const listQuotes = defineComponent({
    components:{ ListQuotes },
    props:{
        listenQuotes:{ type:Array, required:true }
    },
    setup(){
        const quotes = ref({});
        const nextUpdateTime = ref(30);
        return{ quotes, nextUpdateTime };
    }
});

export default listQuotes;
</script>

<style>

</style>