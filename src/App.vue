<template>
<div class="container grid-lg my-2 py-2">
  <div class="card">
    <div class="card-header">
      <div class="h4">Todas as moedas</div>
    </div>
    <div class="card-body">
      <ListQuotes :quotes="quotes"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "@vue/runtime-core"
import api from '@/services/api'
import ListQuotes from '@/components/ListQuotes.vue'

interface NewDataState{
  quotes:any
}

const App = defineComponent({
  components:{ListQuotes},
  name:'App',
  setup(){
    const data = reactive<NewDataState>({
      quotes:{}
    })

    onMounted(async() => {
      const response = await api.all()
      data.quotes = response.data
    })
    
    return {...toRefs(data)}
  }
})


export default App;
</script>

<style>

</style>

