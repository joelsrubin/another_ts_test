export type Result = {
  title: string,
  url: string,
  abstract: string
}

function *generateStuff() {
  yield 1
  yield 2
  let proceed = yield 3
  if (proceed) {
    yield 4
  }
  return 'done'
}

const generator = generateStuff()

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next(true).value)
console.log(generator.next().value)

type PollingResults = {
  results: Result[],
  done: boolean
}

async function polling (
  term: string
): Promise<PollingResults> {
  return fetch(`/pollingSearch?query=${term}`)
  .then(res => res.json())
}

