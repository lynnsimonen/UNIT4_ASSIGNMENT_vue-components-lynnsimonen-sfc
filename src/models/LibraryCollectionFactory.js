// more info on factories:
// https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d

import LibraryCollection from "@/models/LibraryCollection";
import {Song} from "@/models/Media";

export class LibraryCollectionFactory {
    // Static methods can be called without creating an instance.
    // For example: PublicationCollectionFactory.createFromGoogleBooks(...)
    // will return a new PublicationCollection
    static createFromItunes(results) {
        // create factory method
        const collection = new LibraryCollection();
        // add the items to the collection
        results.forEach(item => {
            let newItem = false;
            switch (item.kind.toLowerCase()) {
                case "song":
                    newItem = Object.assign(new Song(), item);
                    //if mapping fields
                    // newItem = new Book();
                    // newItem.title = item.volumeInfo.title;
                    //and so on...  to convert Google books into model books
                    break;
                // case "magazine":
                //     newItem = Object.assign(new Magazine(), item);
                //     break;
                default:
                    console.warn('Found something other than a book/mag', item);
            }
            if (newItem) {
                collection.add(newItem);
            }
        })
        return collection;
    }

    static createFromLocalStorage(items) {
        // currently this is no different, but could be in the future
        return this.createFromItunes(items);
    }
}
