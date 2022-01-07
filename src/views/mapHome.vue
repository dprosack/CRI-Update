<template>
  <div class="MapHome">
    <Map/>
  </div>
</template>

<script>
import Map from '../components/Map/Map.vue'
//import {countyInfo} from '../components/Map/editFunc'

export default {
    name: 'MapHome',
    components: {Map
    },
    props:["id"]
}
</script>