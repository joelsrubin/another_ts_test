function groupEvents(events) {
    const grouped = {
        conference: [],
        meetup: [],
        webinar: [],
        hackathon: []
    };
    events.forEach(el => {
        grouped[el.kind].push(el);
    });
    return grouped;
}
function filterUserEvent(userEventList, category, filterKind) {
    const filteredList = userEventList[category];
    if (filterKind) {
        return filteredList.filter(event => event.kind === filterKind);
    }
    return filteredList;
}
export {};
