<template>
  <h3 class="card-title">Artist: {{item.artistName}}</h3>
  <p class="card-text">{{item.kind}}: {{item.trackName}}</p>
  <p class="item-image" v-if="item.artworkUrl100">{{item.artworkUrl100}}</p>
</template>

<script>
import {Song} from "@/models/Media";

export default {
  name: "SongDetails",
  props: {
    item: {type: Song}
  },
  method:{

  }
  }
</script>

<style scoped>

</style>