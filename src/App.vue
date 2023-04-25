<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
    <ul class="navbar-nav ml-auto">
      <li class="form-inline">
        <form @submit.prevent="searchBooks()" class="form-inline">
          <input type="text" placeholder="Search"
                 class="mr-sm-2 form-control form-control-sm"
                 v-model="searchTerm">
          <button type="submit" class="btn my-2 my-sm-0 btn-secondary btn-sm"><i
              class="fas fa-search"></i></button>
        </form>
      </li>
    </ul>
  </nav>
  <div id="app" class="container-fluid mt-3">
    <library-item-list></library-item-list>
  </div>
</template>

<script>
import LibraryItemList from "@/components/LibraryItemList.vue";
import LibraryCollection from "@/models/LibraryCollection";
import {LibraryCollectionFactory} from "@/models/LibraryCollectionFactory";
import {Itunes} from "@/Data/Itunes";

export default {
  name: 'App',
  components: {
    LibraryItemList
  },
  data() {
    return {
      searching: true,
      searchTerm: '',
      searchResults: new LibraryCollection(),
      currentCollection: new LibraryCollection(),
    };
  },
  // methods: usually "events" triggered by v-on:
  methods: {
    // change "page" by setting books array
    display(bookshelf) {
      this.bookshelf = bookshelf;

      switch (this.bookshelf) {
        case 'store':
          this.currentCollection = this.searchResults;
          break;
        case 'bookmarks':
          this.currentCollection = this.bookmarks;
          break;
        case 'favorites':
          this.currentCollection = this.favorites;
          break;
      }
    },
    clearResults() {
      this.searchResults = new LibraryCollection();
    },
    searchBooks() {
      //prepare and perform search
      if (this.searchTerm) {
        this.clearResults();
        //display message
        this.searching = true;
        Itunes
            .search(this.searchTerm)
            .then(response => {
              console.log('api response', response);

              // if (response.data.items.length > 0) {
              //   this.searchResults = LibraryCollectionFactory.createFromItunes(response.data.results)
              //   console.log('response.data.items: ' + response.data.items)
              // }
              //console.warn('Found something other than a book/mag', item);
              console.log('this.searchResults: ' + this.searchResults);
            })
            .catch(error => {
              console.error("AJAX SEARCH ERROR!", error)
              //let the user know
            })
            .finally(() => {
              //remove the loading screen
              this.searching = false;

              //redirect to store page
              this.display('store')
            })
      }
    }
  },

}
</script>

<style lang="scss">

</style>
