"use strict";
function search(query, callback, tags) {
    let queryString = `?query=${query}`;
    if (tags && tags.length) {
        queryString += `&tags=${tags.join()}`;
    }
    return fetch(`/search${queryString}`)
        .then(response => response.json())
        .then(results => callback(results));
}
const query = {
    query: 'Ember',
    tags: ['JavaScript'],
    assemble(includeTags = false) {
        let query = `?query=${this.query}`;
        if (includeTags && typeof this.tags !== 'undefined') {
            query += `&${this.tags.join(',')}`;
        }
        return query;
    }
};
let str = query.assemble(true);
function displaySearch(inputId, outputId, search) {
    document.getElementById(inputId)?.
        addEventListener('change', function () {
        this.
            parentElement?.
            classList.add('active');
        if (this instanceof HTMLInputElement) {
            const searchTerm = this.value;
            search(searchTerm)
                .then(results => { });
        }
    });
}
// displaySearch('searchField', 'result', search)
// displaySearch(
//   'searchField',
//   'result',
//   function(query, tags) {
//     return Promise.resolve([{
//       title: `The ${query} test book`,
//       url: `/${query}-design-patterns`,
//       abstract: `A practical book on ${query}`
//     }])
//   }
// )
// const testSearch: SearchFn = function(query, tags) {
//   // All types still intact
//   return Promise.resolve([{
//   title: `The ${query} test book`,
//   url: `/${query}-design-patterns`,
//   abstract: `A practical book on ${query}`
//   }])
//  }
