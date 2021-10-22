<template>
    <div class="container grid-lg my-2 py-2">
        <div class="card mb-2" v-if="listenQuotes.length > 0">
            <div class="card-header">
                <div class="h4">Acompanhando</div>
            </div>
            <div class="card-body">
                <WatchListQuotes  :listen-quotes="listenQuotes"/>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="h4">Todas as moedas</div>
            </div>
            <div class="card-body">
                <ListQuotes 
                    :quotes="quotes" 
                    :listen-quotes="listenQuotes"
                    @listen="onListen"
                    @unlisten="unListen"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "@vue/runtime-core";
import http from '@/services/currencyService';
import ListQuotes from '@/components/ListQuotes.vue';
import WatchListQuotes from '@/components/WatchListQuotes.vue';
import CurrencyDTO from '@/dtos/CurrencyDTO';


interface NewDataState{
    quotes:CurrencyDTO[];
    listenQuotes:[]
}

const App = defineComponent({
    components:{ ListQuotes, WatchListQuotes },
    name:'App',
    setup(){
        const data = reactive<NewDataState>({
            quotes:[],
            listenQuotes:[],
        });

        async function loadData(){
            try {
                const response = await http.getAllCurrencies();
                data.quotes = Object.entries(response).map(el => el[1]);
                console.log(data.quotes);
            } catch (error) {
                console.log(error);
            }
        }
        onMounted(()=>loadData()); 

        function onListen(code:never){ 
            data.listenQuotes.push(code);
        }

        function unListen(code:never){
            data.listenQuotes.filter(key =>key != code);
        }

        return {
            ...toRefs(data),
            onListen,
            unListen
        };
    }
});
export default App;
</script>

<style>

</style>

