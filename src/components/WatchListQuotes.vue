<template>
    <ListQuotes quotes="quotes" :listen-quotes="listenQuotes"/>
    <div class="mt-2 text-right">
        <cite class="text-small">
            Atualizará novamente em <b>{{nextUpdateTime}} segundos</b>
        </cite>
    </div>
</template>

<script lang='ts'>
import currencyService from '@/services/currencyService';
import { defineComponent, ref, PropType, onMounted } from 'vue';
import ListQuotes from './ListQuotes.vue';



const listQuotes = defineComponent({
    components:{ ListQuotes },
    props:{
        listenQuotes:{
            type:Array as PropType<string[]>, 
            required:true
        }
    },
    setup(props){
        const interval = ref(null);
        const quotes = ref();
        const nextUpdateTime = ref(30);
        
        async function refresh(){
            const { data } = await currencyService.getListenCurrencies(props.listenQuotes);
            quotes.value = data;
        }

        onMounted(()=>{
            refresh();
        });
        
        return{ refresh,quotes, nextUpdateTime, };
    }
});


export default listQuotes;
</script>

<style>

</style>