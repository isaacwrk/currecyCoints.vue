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
      />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "@vue/runtime-core"
import http from '@/services/currencyService'
import ListQuotes from '@/components/ListQuotes.vue'
import WatchListQuotes from '@/components/WatchListQuotes.vue'


interface NewDataState{
  quotes:any | void,
  listenQuotes:[]
}

const App = defineComponent({
  components:{ListQuotes, WatchListQuotes},
  name:'App',
  setup(){
    const data = reactive<NewDataState>({
      quotes:{},
      listenQuotes:[],
    })

    onMounted(async() => {
      const response = await http.getAllCurrencies()
      data.quotes = response.data
    });

    
    function onListen(code:never){ 
      data.listenQuotes.push(code)
  }

    return {
      ...toRefs(data),
       onListen
       }
  }
})
export default App;
</script>

<style>

</style>

