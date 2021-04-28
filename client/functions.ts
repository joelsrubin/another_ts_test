type Result = {
  title: string,
  url: string,
  abstract: string
}

function search (query: string, callback: (results: Result[]) => void, tags?: string[]) {
  let queryString = `?query=${query}`
  if (tags && tags.length) {
    queryString += `&tags=${tags.join()}`
  }

  return fetch(`/search${queryString}`)
  .then(response => response.json() as Promise<Result[]>)
  .then(results => callback(results))
}

type SearchFn = typeof search;
type AssembleFn = (includesTags: boolean) => string;

type Query = {
  query: string,
  tags?: string[],
  assemble: AssembleFn
}


const query: Query = {
  query: 'Ember',
  tags: ['JavaScript'],
  assemble(includeTags = false) {
    let query = `?query=${this.query}`
    if (includeTags && typeof this.tags !== 'undefined') {
      query += `&${this.tags.join(',')}`
    }
    return query
  }
}
let str = query.assemble(true)



function displaySearch(
  inputId: string,
  outputId: string,
  search: SearchFn
): void {
  document.getElementById(inputId)?.
  addEventListener('change', function() {
    this.
      parentElement?.
      classList.add('active')
      if (this instanceof HTMLInputElement) {
        const searchTerm = this.value;
        search(searchTerm)
          .then(results => {})
      }
  })
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