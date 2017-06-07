<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{getCount}}</h1>
    <button @click="increment({n:5})">点我</button>
    <button @click="add(10)">点我</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    name: 'app',
    computed:{
        ...mapGetters(['getCount']),
        ...mapState(['count'])
    },
    methods:{
        ...mapMutations(['increment']), 
        ...mapActions(['add'])
    }
  }
</script>

