<template>
  <div class="card h-100">
    <div class="card-body">
      <component :is="itemCardComponent(item)" :item="item"/>
      <!--Decorator does NOT reference as "item.media"-->
     </div>
    <div class="card-footer d-flex justify-content-end">
      <button v-if="item.isAvailable  && item.isAvailable() && item.checkOut"
              class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else-if="item.checkIn" class="btn btn-outline-warning"
              @click="item.checkIn()">Check In</button>
      <button class="btn btn-danger" @click="item.remove(item)">Delete</button>
    </div>
  </div>
</template>

<script>
import BookDetails from "@/components/BookDetails.vue";
import MovieDetails from "@/components/MovieDetails.vue";

export default {
  name: "LibraryItemCard",
  components: {MovieDetails, BookDetails},
  props: {
    item: {type: Object}
    //With decorator, it just becomes an object not a library item
  },

  // functions that you want to use in your view that are triggered manually
  methods: {
    itemCardComponent(item){
      //return item.constructor.name + 'Card'; //will fail with webpack
      return item.constructor.type + 'Details';
      //Decorator does NOT reference item.media.constructor.type
    }
  },
  created(){
    console.log('Library Item Card is: ' + Object +  typeof Object)
  }
}

</script>

<style scoped>

</style>