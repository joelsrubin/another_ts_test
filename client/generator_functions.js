function* generateStuff() {
    yield 1;
    yield 2;
    let proceed = yield 3;
    if (proceed) {
        yield 4;
    }
    return 'done';
}
const generator = generateStuff();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next(true).value);
console.log(generator.next().value);
async function polling(term) {
    return fetch(`/pollingSearch?query=${term}`)
        .then(res => res.json());
}
export {};
