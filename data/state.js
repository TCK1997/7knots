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
function setLocation(location) {
  currState.location = location;
}

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

function getMorale() {
  return currState.morale;
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

// Ocean Events

function storm() {
  currState.day += 5;
}

function pirate() {
  let result = randInt(1, 2);
  if (result == 1) {
    //lose morale
    currState.morale = Math.floor(currState.morale * 0.8);
  } else {
    //lose resources
    currState.resources.cloth = Math.floor(0.8 * currState.resources.cloth);
    currState.resources.wine = Math.floor(0.8 * currState.resources.wine);
    currState.resources.silver = Math.floor(0.8 * currState.resources.silver);
    currState.resources.gold = Math.floor(0.8 * currState.resources.gold);
    currState.resources.coffee = Math.floor(0.8 * currState.resources.coffee);
    currState.resources.pepper = Math.floor(0.8 * currState.resources.pepper);
    currState.resources.cotton = Math.floor(0.8 * currState.resources.cotton);
    currState.resources.sugar = Math.floor(0.8 * currState.resources.sugar);
    currState.resources.clove = Math.floor(0.8 * currState.resources.clove);
    currState.resources.nutmeg = Math.floor(0.8 * currState.resources.nutmeg);
    currState.resources.mace = Math.floor(0.8 * currState.resources.mace);
    currState.resources.porcelain = Math.floor(
      0.8 * currState.resources.porcelain
    );
    currState.resources.silk = Math.floor(0.8 * currState.resources.silk);
    currState.resources.perfume = Math.floor(0.8 * currState.resources.perfume);
  }
}

function scurvy() {
  removeCrew();
}

// Port Events
