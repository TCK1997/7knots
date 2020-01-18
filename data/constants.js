// Hard-coded constants used for the game (i.e. for cities, names, resource demand and supply etc.)
const introductionText = [
  "Born to a family of successful sailors, your childhood was filled with seamen."
];

const demands = {
  ABS: 0.3,
  VLO: 0.5,
  LOW: 0.7,
  MED: 1,
  HI: 3,
  VHI: 5,
  EXT: 10
};

const charismaModifiers = [1, 1.04, 1.08, 1.12, 1.16, 1.2];
const navigationModifiers = [1, 0.95, 0.9, 0.85, 0.8, 0.7];
const motivationModifiers = [-6, -12, -18, -24, -30, -36];

const corner = [1853, 1008];

class CrewMember {
  constructor(id) {
    this.name = getCrewName(id);
    this.charisma = randInt(0, 5);
    this.navigation = randInt(0, 5);
    this.motivation = randInt(0, 5);
    this.price = 30 * (this.charisma + this.navigation + this.motivation);
  }
}

const cities = {
  Lisbon: {
    name: "Lisbon",
    coords: [160, 91],
    resources: ["cloth", "wine", "silver"],
    culture: "PT",
    demand: {
      cloth: demands.ABS,
      wine: demands.VLO,
      silver: demands.VLO,
      gold: demands.VLO,
      coffee: demands.MED,
      pepper: demands.MED,
      cotton: demands.MED,
      sugar: demands.MED,
      clove: demands.EXT,
      nutmeg: demands.EXT,
      mace: demands.EXT,
      porcelain: demands.VHI,
      silk: demands.VHI,
      perfume: demands.VHI
    }
  },
  CidadeVelha: {
    name: "Cidade Velha",
    coord: [15, 381],
    resources: ["gold"],
    culture: "PT",
    demand: {
      cloth: demands.VLO,
      wine: demands.LOW,
      silver: demands.VLO,
      gold: demands.ABS,
      coffee: demands.MED,
      pepper: demands.MED,
      cotton: demands.MED,
      sugar: demands.HI,
      clove: demands.VHI,
      nutmeg: demands.VHI,
      mace: demands.VHI,
      porcelain: demands.HI,
      silk: demands.HI,
      perfume: demands.HI
    }
  },
  Mombasa: {
    name: "Mombasa",
    coords: [801, 566],
    resources: ["gold", "coffee"],
    culture: "EA",
    demand: {
      cloth: demands.LOW,
      wine: demands.ABS,
      silver: demands.LOW,
      gold: demands.ABS,
      coffee: demands.VLO,
      pepper: demands.HI,
      cotton: demands.HI,
      sugar: demands.HI,
      clove: demands.VHI,
      nutmeg: demands.VHI,
      mace: demands.VHI,
      porcelain: demands.VHI,
      silk: demands.VHI,
      perfume: demands.VHI
    }
  },
  Socotra: {
    name: "Socotra",
    coords: [961, 412],
    resources: ["coffee", "gold", "silver"],
    culture: "PT",
    demand: {
      cloth: demands.MED,
      wine: demands.ABS,
      silver: demands.MED,
      gold: demands.VLO,
      coffee: demands.ABS,
      pepper: demands.MED,
      cotton: demands.MED,
      sugar: demands.MED,
      clove: demands.VHI,
      nutmeg: demands.VHI,
      mace: demands.VHI,
      porcelain: demands.HI,
      silk: demands.HI,
      perfume: demands.HI
    }
  },
  Calicut: {
    name: "Calicut",
    coords: [1247, 442],
    resources: ["pepper", "cotton", "sugar"],
    culture: "IN",
    demand: {
      cloth: demands.MED,
      wine: demands.MED,
      silver: demands.HI,
      gold: demands.HI,
      coffee: demands.MED,
      pepper: demands.ABS,
      cotton: demands.VLO,
      sugar: demands.VLO,
      clove: demands.MED,
      nutmeg: demands.HI,
      mace: demands.HI,
      porcelain: demands.HI,
      silk: demands.HI,
      perfume: demands.VHI
    }
  },
  Goa: {
    name: "Goa",
    coords: [961, 412],
    resources: ["cotton", "pepper", "sugar"],
    culture: "IN",
    demand: {
      cloth: demands.MED,
      wine: demands.MED,
      silver: demands.HI,
      gold: demands.HI,
      coffee: demands.MED,
      pepper: demands.VLO,
      cotton: demands.ABS,
      sugar: demands.VLO,
      clove: demands.HI,
      nutmeg: demands.MED,
      mace: demands.HI,
      porcelain: demands.HI,
      silk: demands.VHI,
      perfume: demands.HI
    }
  },
  Colombo: {
    name: "Colombo",
    coords: [1289, 473],
    resources: ["sugar", "pepper", "cotton"],
    culture: "IN",
    demand: {
      cloth: demands.MED,
      wine: demands.MED,
      silver: demands.HI,
      gold: demands.HI,
      coffee: demands.MED,
      pepper: demands.VLO,
      cotton: demands.VLO,
      sugar: demands.ABS,
      clove: demands.HI,
      nutmeg: demands.HI,
      mace: demands.MED,
      porcelain: demands.VHI,
      silk: demands.HI,
      perfume: demands.HI
    }
  },
  Malacca: {
    name: "Malacca",
    coords: [1576, 515],
    resources: ["clove", "nutmeg", "porcelain"],
    culture: "ML",
    demand: {
      cloth: demands.MED,
      wine: demands.ABS,
      silver: demands.HI,
      gold: demands.HI,
      coffee: demands.HI,
      pepper: demands.HI,
      cotton: demands.MED,
      sugar: demands.MED,
      clove: demands.ABS,
      nutmeg: demands.VLO,
      mace: demands.VLO,
      porcelain: demands.LOW,
      silk: demands.LOW,
      perfume: demands.LOW
    }
  },
  Makassar: {
    name: "Makassar",
    coords: [1787, 603],
    resources: ["mace", "nutmeg"],
    culture: "ML",
    demand: {
      cloth: demands.HI,
      wine: demands.ABS,
      silver: demands.HI,
      gold: demands.HI,
      coffee: demands.MED,
      pepper: demands.HI,
      cotton: demands.MED,
      sugar: demands.MED,
      clove: demands.VLO,
      nutmeg: demands.ABS,
      mace: demands.ABS,
      porcelain: demands.HI,
      silk: demands.VHI,
      perfume: demands.HI
    }
  },
  Canton: {
    name: "Canton",
    coords: [1726, 286],
    resources: ["porcelain", "silk", "perfume"],
    culture: "CH",
    demand: {
      cloth: demands.HI,
      wine: demands.HI,
      silver: demands.HI,
      gold: demands.HI,
      coffee: demands.HI,
      pepper: demands.VHI,
      cotton: demands.MED,
      sugar: demands.HI,
      clove: demands.HI,
      nutmeg: demands.HI,
      mace: demands.HI,
      porcelain: demands.ABS,
      silk: demands.ABS,
      perfume: demands.VLO
    }
  }
};

const resourcePrices = {
  cloth: [10, 20],
  wine: [30, 80],
  silver: [50, 90],
  gold: [80, 120],
  coffee: [70, 90],
  pepper: [80, 120],
  cotton: [20, 50],
  sugar: [30, 60],
  clove: [100, 150],
  nutmeg: [100, 150],
  mace: [200, 250],
  porcelain: [90, 130],
  silk: [60, 80],
  perfume: [80, 100]
};

const names = {
  PT: [
    "Adao",
    "Afonso",
    "Alvaro",
    "Andre",
    "Anibal",
    "Carlito",
    "Cecilio",
    "Cleto",
    "Daniel",
    "David",
    "Diogo",
    "Duarte",
    ",Emanuel",
    "Emilio",
    "Erasmo",
    "Erico",
    "Ernesto",
    "Fabiano",
    "Felipe",
    "Gabriel",
    "Gaspar",
    "Gilberto",
    "Gregorio",
    "Guilherme",
    "Gustavo",
    "Henrique",
    "Herberto",
    "Isaias",
    "Jacinto",
    "Jeronimo",
    "Joel",
    "Jorge",
    "Leornado",
    "Lucas",
    "Lucio",
    "Manuel"
  ],
  EA: [
    "Aadan",
    "Alemayehu",
    "Ayaan",
    "Cusmaan",
    "Dejen",
    "Eliud",
    "Eskender",
    "Gwandoya",
    "Hiwot",
    "Jengo",
    "Khamisi",
    "Lelisa",
    "Lencho",
    "Mwenye",
    "Nyongesa",
    "Ochieng",
    "Tadesse",
    "Tafari",
    "Wasswa",
    "Wekesa",
    "Workneh",
    "Xasan",
    "Yohannes",
    "Yuusuf",
    "Zuberi"
  ],
  IN: [
    "Aayush",
    "Abdul",
    "Aditya",
    "Akshay",
    "Darsh",
    "Devansh",
    "Gautam",
    "Gaurav",
    "Gunbir",
    "Harsh",
    "Hardik",
    "Hritik",
    "Ishwar",
    "Jagdish",
    "Kabir",
    "Krishna",
    "Lakshay",
    "Manthan",
    "Neel",
    "Nakul",
    "Raghav",
    "Rishi",
    "Rohan",
    "Rushil",
    "Sai",
    "Siddarth",
    "Yash"
  ],
  ML: [
    "Aadam",
    "Adiputera",
    "Haissam",
    "Haruun",
    "Ishraq",
    "Muda",
    "Mudassir",
    "Panjang",
    "Putera",
    "Sabtu",
    "Sannan",
    "Slamet",
    "Sulung",
    "Taish",
    "Usama",
    "Wadd",
    "Zaka",
    "Zikri",
    "Zulkifi",
    "Rusdi",
    "Najib",
    "Mohammed",
    "Fitri",
    "Afiq",
    "Ahmad",
    "Iskandar",
    "Shafiq"
  ],
  CH: [
    "An",
    "Bo",
    "Chao",
    "Chen",
    "Chi",
    "Dai",
    "Dong",
    "Feng",
    "Gui",
    "Heng",
    "Ho",
    "Jiang",
    "Jin",
    "Liang",
    "Ling",
    "Lok",
    "Qi",
    "Shan",
    "Shi",
    "Tao",
    "Xiang",
    "Xin",
    "Xue",
    "Yang",
    "Yong",
    "Zhen",
    "Zhong"
  ]
};

function toName(id) {
  let res;
  switch (id) {
    case 0:
      res = "Lisbon";
      break;
    case 1:
      res = "CidadeVilha";
      break;
    case 2:
      res = "Mombasa";
      break;
    case 3:
      res = "Socotra";
      break;
    case 4:
      res = "Calicut";
      break;
    case 5:
      res = "Goa";
      break;
    case 6:
      res = "Colombo";
      break;
    case 7:
      res = "Malacca";
      break;
    case 8:
      res = "Makassar";
      break;
    case 9:
      res = "Canton";
  }
  return res;
}

// Getters

function getName(id) {
  return toName(id);
}

function getCoords(id) {
  const city = toName(id);
  return cities[city]["coords"];
}

function getResources(id) {
  const city = toName(id);
  return cities[city]["resources"];
}

function getCulture(id) {
  const city = toName(id);
  return cities[city]["culture"];
}
/**
 * Returns a random crew name based on the culture of the current city
 */
function getCrewName(id) {
  const list = names[cities[toName(id)]["culture"]];
  return getRandom(list);
}

function getCrewMember(id) {
  return new CrewMember(id);
}

function getPrice(id, resource) {
  const demandModifier = cities[toName(id)]["demand"][resource];
  const economyState = getEconomyState();
  const charismaModifier = charismaModifiers[getCharisma()];
  let buyingPrice = Math.floor(
    randInt(resourcePrices[resource][0], resourcePrices[resource][1]) *
      demandModifier *
      charismaModifier *
      economyState
  );
  let sellingPrice = Math.floor(
    (buyingPrice * randInt(12, 14)) / 10 / charismaModifier
  );
  return [buyingPrice, sellingPrice];
}

// Helper Functions

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function calculateDistance(a, b) {
  if (a == b) {
    return 0;
  } else {
    startCoords = getCoords(a);
    endCoords = getCoords(b);
    return Math.sqrt(
      Math.pow(startCoords[0] - endCoords[0], 2) +
        Math.pow(startCoords[1] - endCoords[1], 2)
    );
  }
}

function moveToPlace(distance) {
  console.log(distance);
}
