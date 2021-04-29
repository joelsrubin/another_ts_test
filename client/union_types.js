function printEvent(event) {
    if (event.price) {
        if (typeof event.price === 'number') {
            console.log('Pricein EUR: ', event.price);
        }
        else {
            console.log('It is free!');
        }
    }
    if (Array.isArray(event.talks)) {
        event.talks.forEach(talk => {
            console.log(talk.title);
        });
    }
    else {
        console.log(event.talks.title);
    }
}
const person = {
    name: 'Stefan Baumgartner',
    city: 'Linz'
};
let conf = 'conference';
let withTypeAny = 'conference';
let withTypeString = 'conference';
let withValueType = 'conference';
function filterByKind(list, kind) {
    return list.filter(el => el.kind === kind);
}
filterByKind(eventList, 'conference');
filterByKind(eventList, 'webinar');
filterByKind(eventList, 'meetup');
filterByKind(eventList, 'hackathon');
function getEventTeaser(event) {
    switch (event.kind) {
        case 'conference':
            return `${event.title} (Conference), ` + `priced at ${event.price} USD`;
        case 'meetup':
            return `${event.title} (Meetup), ` + `hosted at ${event.location}`;
        case 'webinar':
            return `${event.title} (Webinar)`;
        default:
            throw new Error("Not sure what to do with that");
    }
}
const script19 = {
    title: 'ScriptConf',
    date: new Date('2019-10-25'),
    capacity: 300,
    rsvp: 289,
    description: 'The feel-good JS conference',
    kind: 'conference',
    price: 129,
    location: 'Central Linz',
    talks: [{
            speaker: 'Vitaly Friedman',
            title: 'Designing with  Privacy in mind',
            abstract: '...'
        }]
};
getEventTeaser(script19);
export {};
