<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{getCount}}</h1>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    name: 'app',
    computed:{
        ...mapGetters({getCount:'getCount'}),
        ...mapState(['count'])
    }
  }
</script>

