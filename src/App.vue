<template>
  <v-app>
    <Map />
  </v-app>
</template>

<script src="./plugins/fmeserver.js"></script>
<script>

import Map from './components/Map/Map.vue'

export default {
  name: 'App',
  components: {
    Map
  },

  mounted(){
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src','http://api.fmeserver.com/js/v3/FMEServer.js')
    document.head.appendChild(externalScript)
  }
}
</script>

