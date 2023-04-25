import axios from "axios";
export class Itunes {
    //without "static", the search this would be a function of
    // a GoogleBooks object NOT a class, so see line 66 of app.js for changes...
    //We have no need to create GoogleBook objects right now so leave this way
    static search (searchTerm, limit){
        // build request arguments
        // this is from our previous class...
        let endpoint = 'https://itunes.apple.com/search';
        let params = {
            term: searchTerm,
            // media: 'partial',
            maxResults: limit ?? 36,
        }
        let config = {
            params: params,
        }

        // execute ajax request using promises
        return axios.get(endpoint, config)
    }
}