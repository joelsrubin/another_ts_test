async function search(query, tags) {
    let queryString = `?query=${query}`;
    if (tags && tags.length) {
        queryString += `&tags=${tags.join()}`;
    }
    const response = await fetch(`/search${queryString}`);
    const results = await response.json();
    return results;
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
const result = {
    title: 'A guide to @@starthl@@Ember@@endhl@@.js',
    url: '/a-guide-to-ember',
    description: 'The framework @@starthl@@Ember@@endhl@@.js in a nutshell'
};
// replace @@starthl@@ with <mark> and @@endhl@@ with </mark>
// let markup = highlight`<li>${result.title}</li>`
// function highlight(
//   strings: TemplateStringsArray,
//   ...values: string[]
// ) {
//   let str = '';
//   strings.forEach((templ, i) => {
//     let expr = values[i]?
//     .replace('@@start@@', '<em>')
//     .replace('@@end@@','</em>') ?? ""
//     str += templ + expr;
//   })
//   return str
// }
const results = await search('Ember');
export {};
