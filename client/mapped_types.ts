import { EventKind, TechEvent } from "./union_types";

type GroupedEvents = {
  // conference: TechEvent[],
  // meetup: TechEvent[],
  // webinar: TechEvent[],
  // hackathon: TechEvent[]
  [Kind in EventKind]: TechEvent[]
}

function groupEvents(events: TechEvent[]): GroupedEvents {
  const grouped = {
    conference: [],
    meetup: [],
    webinar: [],
    hackathon: []
  };
  events.forEach(el => {
    grouped[el.kind].push(el)
  })
  return grouped;
}

type UserEvents = {
  watching: TechEvent[],
  rsvp: TechEvent[],
  attended: TechEvent[],
  signedout: TechEvent[]
}

type UserEventCategory = 'watching' | 'rsvp' | 'attended' | 'signedoff'

function filterUserEvent(
  userEventList: UserEvents,
  category: keyof UserEvents,
  filterKind?: EventKind
) {
  const filteredList = userEventList[category]
  if (filterKind) {
    return filteredList.filter(event => event.kind === filterKind)
  }

  return filteredList
}