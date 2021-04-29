export type Talk = {
  title: string,
  abstract: string,
  speaker: string
}

export type Conference = TechEventBase & {
  location: string,
  price: number,
  talks: Talk[],
  kind: 'conference'
}

export type Meetup = TechEventBase & {
  location: string,
  price: string,
  talks: Talk[],
  kind: 'meetup'
}

export type Webinar = TechEventBase & {
  location: string,
  url: string,
  price?: number,
  talks: Talk,
  kind: 'webinar'
}

export type TechEvent = Webinar | Conference | Meetup | Hackathon

function printEvent(event: TechEvent) {
  if(event.price) {
    if(typeof event.price === 'number') {
      console.log('Pricein EUR: ', event.price)
    } else {
      console.log('It is free!')
    }
  }
  if(Array.isArray(event.talks)) {
    event.talks.forEach(talk => {
      console.log(talk.title)
    })
  } else {
    console.log(event.talks.title)
  }
}

type Name = {
  name: string
}
type Age = {
  age: number
}

type Person = Age & Name;

const person = {
  name: 'Stefan Baumgartner',
  city: 'Linz'
}

export type TechEventBase = {
  title: string,
  description: string
  date: Date,
  capacity: number,
  rsvp: number,
}
let conf = 'conference';
let withTypeAny: any = 'conference'
let withTypeString: string = 'conference'
let withValueType: 'conference' = 'conference'
declare const event: TechEvent

export type EventKind  = TechEvent['kind']

function filterByKind(
  list: TechEvent[],
  kind: EventKind
): TechEvent[] {
  return list.filter(el => el.kind === kind)
}

declare const eventList: TechEvent[];

filterByKind(eventList, 'conference')
filterByKind(eventList, 'webinar')
filterByKind(eventList, 'meetup')
filterByKind(eventList, 'hackathon')



export type Hackathon = TechEventBase & {
  location: string,
  price?: number,
  kind: 'hackathon'
}

function getEventTeaser(event:TechEvent) {
  switch(event.kind) {
    case 'conference':
    return `${event.title} (Conference), ` + `priced at ${event.price} USD`
    case 'meetup':
    return `${event.title} (Meetup), ` + `hosted at ${event.location}`
    case 'webinar':
    return `${event.title} (Webinar)`
    default:
    throw new Error("Not sure what to do with that")
  }
}


const script19: TechEvent = {
  title: 'ScriptConf',
  date: new Date('2019-10-25'),
  capacity: 300,
  rsvp: 289,
  description: 'The feel-good JS conference',
  kind: 'conference' as const,
  price: 129,
  location: 'Central Linz',
  talks: [{
    speaker: 'Vitaly Friedman',
    title: 'Designing with  Privacy in mind',
    abstract: '...'
  }]
}

getEventTeaser(script19)