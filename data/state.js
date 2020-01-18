// Game State: Morale, Resources, Gold, Location, Crew, Date (Day), Economy State

let currState = {
  day: 0,
  gold: 300,
  location: 0,
  crew: [],
  resources: {
    cloth: 0,
    wine: 0,
    silver: 0,
    gold: 0,
    coffee: 0,
    pepper: 0,
    cotton: 0,
    sugar: 0,
    clove: 0,
    nutmeg: 0,
    mace: 0,
    porcelain: 0,
    silk: 0,
    perfume: 0
  },
  economyState: 1,
  morale: 100
};

// Getters

// Setters
function getDay() {
  return currState.day;
}

function getGold() {
  return currState.gold;
}

function getLocation() {
  return currState.location;
}

function getCrew() {
  return currState.crew;
}

function getEconomyState() {
  return currState.economyState;
}

function getNavigation() {
  let sum = 5; // MC has 5 stars for all attributes
  for (x of currState.crew) {
    sum += x.navigation;
  }
  return Math.floor(sum / (currState.crew.length + 1));
}

function getMotivation() {
  let sum = 5; // MC has 5 stars for all attributes
  for (x of currState.crew) {
    sum += x.motivation;
  }
  return Math.floor(sum / (currState.crew.length + 1));
}

function getCharisma() {
  let sum = 5; // MC has 5 stars for all attributes
  for (x of currState.crew) {
    sum += x.charisma;
  }
  return Math.floor(sum / (currState.crew.length + 1));
}

// Setters

function reset() {
  currState.day = 0;
  currState.gold = 300;
  currState.location = 0;
  currState.crew = [];
  (currState.resources = {
    cloth: 0,
    wine: 0,
    silver: 0,
    gold: 0,
    coffee: 0,
    pepper: 0,
    cotton: 0,
    sugar: 0,
    clove: 0,
    nutmeg: 0,
    mace: 0,
    porcelain: 0,
    silk: 0,
    perfume: 0
  }),
    (currState.economyState = 1),
    (currState.morale = 100);
}

function addDay(n) {
  currState.day += n;
}

function addGold(n) {
  currState.gold += n;
}

function addCrew(member) {
  currState.crew.push(member);
}

function removeCrew() {
  if (currState.crew.length >= 2) {
    currState.crew.slice(0, currState.crew.length - 2);
  }
}

function addResource(resource, amt) {
  currState.resources[resource] += amt;
}

function decreaseMorale(n) {
  currState.morale -= n;
}

function resetMorale() {
  currState.morale = 100;
}
