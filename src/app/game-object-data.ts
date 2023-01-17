import { BuildingBase, Civilization, CraftableResourceBase, JobBase, Researchable, ResourceBase, Spell, Upgrade } from "./data-interfaces";

export const buildings : BuildingBase[] = [
    {
      "increaseRatio": 3.0,
      "toolTipText": "This house can hold two bears. Bears need 3 berries and 0.5 water per second.",
      "secondaryToolTip": "Nice and cold :)",
      "effects": [
        {
          "type": "maximum",
          "amount": 2.0,
          "objectType": "resource",
          "object": "Bears"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": -1,
      "name": "Ice Hut",
      "resourcesRequired": [
        {name: 'Ice', price: 10, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.25,
      "toolTipText": "Produces Berries.",
      "secondaryToolTip": "No snacking",
      "effects": [
        {
          "type": "production",
          "amount": 0.73,
          "objectType": "resource",
          "object": "Berries"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": -1,
      "name": "Berry Field",
      "resourcesRequired": [
        {name: 'Berries', price: 10, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.25,
      "toolTipText": "Libraries can be used to store science. They also provide a bonus to your science production.",
      "secondaryToolTip": "What are these strange markings?",
      "effects": [
        {
          "type": "maximum",
          "amount": 250.0,
          "objectType": "resource",
          "object": "Science"
        },
        {
          "type": "bonus",
          "amount": 0.1,
          "objectType": "job",
          "object": "Researcher",
          "resource": "Science"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": -1,
      "name": "Library",
      "resourcesRequired": [
        {name: 'Wood', price: 20, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Provides a 20% bonus to stone production.",
      "secondaryToolTip": "What\u0027s mine is mine and what\u0027s yours is also mine.",
      "effects": [
        {
          "type": "bonus",
          "amount": 0.2,
          "objectType": "job",
          "object": "Miner",
          "resource": "Stone"
        },
        {
          "type": "bonus",
          "amount": 0.05,
          "objectType": "job",
          "object": "Miner",
          "resource": "Ore"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 3,
      "name": "Mine",
      "resourcesRequired": [
        {name: 'Wood', price: 50, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 2.5,
      "toolTipText": "Uses wood to melt ice into water.",
      "secondaryToolTip": "So warm...",
      "effects": [
        {
          "type": "production",
          "amount": 1.0,
          "objectType": "resource",
          "object": "Water"
        },
        {
          "type": "production",
          "amount": -0.1,
          "objectType": "resource",
          "object": "Wood"
        },
        {
          "type": "production",
          "amount": -0.1,
          "objectType": "resource",
          "object": "Ice"
        }
      ],
      "isEnablable": true,
      "hasScienceDependancy": true,
      "dependancy": -1,
      "name": "Bonfire",
      "resourcesRequired": [
        {name: 'Wood', price: 10, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Increases your magic limit and gives a small magic production bonus. ",
      "secondaryToolTip": "I wonder what they do up there?",
      "effects": [
        {
          "type": "maximum",
          "amount": 20.0,
          "objectType": "resource",
          "object": "Magic"
        },
        {
          "type": "bonus",
          "amount": 0.06,
          "objectType": "job",
          "object": "Sorcerer",
          "resource": "Magic"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 6,
      "name": "Tower",

      "resourcesRequired": [
        {name: 'Wood', price: 30, isCraftable: false},
        {name: 'Stone', price: 50, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.5,
      "toolTipText": "Increase your resource limits.",
      "secondaryToolTip": "Don't organize stuff, just hide it behind walls",
      "effects": [
        {
          "type": "maximum",
          "amount": 1000.0,
          "objectType": "resource",
          "object": "Berries"
        },
        {
          "type": "maximum",
          "amount": 350.0,
          "objectType": "resource",
          "object": "Wood"
        },
        {
          "type": "maximum",
          "amount": 75.0,
          "objectType": "resource",
          "object": "Iron"
        },
        {
          "type": "maximum",
          "amount": 350.0,
          "objectType": "resource",
          "object": "Ice"
        },
        {
          "type": "maximum",
          "amount": 600.0,
          "objectType": "resource",
          "object": "Stone"
        },
        {
          "type": "maximum",
          "amount": 50.0,
          "objectType": "resource",
          "object": "Ore"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 1,
      "name": "Storage Shed",
      "resourcesRequired": [
        {name: 'Wood', price: 30, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Consumes wood and ore to produce iron.",
      "secondaryToolTip": "I'm smeelltiing!!",
      "effects": [
        {
          "type": "production",
          "amount": 0.1,
          "objectType": "resource",
          "object": "Iron"
        },
        {
          "type": "production",
          "amount": -0.1,
          "objectType": "resource",
          "object": "Wood"
        },
        {
          "type": "production",
          "amount": -0.3,
          "objectType": "resource",
          "object": "Ore"
        }
      ],
      "isEnablable": true,
      "hasScienceDependancy": true,
      "dependancy": 4,
      "name": "Smeltery",
      "resourcesRequired": [
        {name: 'Stone', price: 250, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.25,
      "toolTipText": "Improves your science limit and production.",
      "secondaryToolTip": "At least calculus hasn't been discovered yet...",
      "effects": [
        {
          "type": "maximum",
          "amount": 500.0,
          "objectType": "resource",
          "object": "Science"
        },
        {
          "type": "bonus",
          "amount": 0.2,
          "objectType": "job",
          "object": "Researcher",
          "resource": "Science"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 5,
      "name": "School",
      "resourcesRequired": [
        {name: 'Wood', price: 100, isCraftable: false},
        {name: 'Stone', price: 120, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.2,
      "toolTipText": "Improves crafting effectiveness.",
      "secondaryToolTip": "I made a birdhouse!",
      "effects": [
        {
          "type": "craftBonus",
          "amount": 0.06,
          "objectType": "",
          "object": ""
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 7,
      "name": "Tinkerer's Station",
      "resourcesRequired": [
        {name: 'Wood', price: 50, isCraftable: false},
        {name: 'Stone', price: 200, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Get clean water from the ground",
      "secondaryToolTip": "Well, well, well, what do we have here?",
      "effects": [
        {
          "type": "maximum",
          "amount": 50.0,
          "objectType": "resource",
          "object": "Water"
        },
        {
          "type": "production",
          "amount": 0.7,
          "objectType": "resource",
          "object": "Water"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 7,
      "name": "Well",
      "resourcesRequired": [
        {name: 'Stone', price: 300, isCraftable: false},
        {name: 'Beam', price: 5, isCraftable: true},
      ],
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Increase your storage limits even more",
      "secondaryToolTip": "Only a warehouse on full moons",
      "effects": [
        {
          "type": "maximum",
          "amount": 100.0,
          "objectType": "resource",
          "object": "Wood"
        },
        {
          "type": "maximum",
          "amount": 50.0,
          "objectType": "resource",
          "object": "Iron"
        },
        {
          "type": "maximum",
          "amount": 50.0,
          "objectType": "resource",
          "object": "Ice"
        },
        {
          "type": "maximum",
          "amount": 250.0,
          "objectType": "resource",
          "object": "Stone"
        },
        {
          "type": "maximum",
          "amount": 25.0,
          "objectType": "resource",
          "object": "Ore"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 7,
      "name": "Warehouse",
      "resourcesRequired": [
        {name: 'Beam', price: 3, isCraftable: true},
        {name: 'Block', price: 5, isCraftable: true},
        {name: 'Nail', price: 1, isCraftable: true},
      ],
    },
    {
      "increaseRatio": 1.3,
      "toolTipText": "Build a house for one bear.",
      "secondaryToolTip": "Little house on the tundra.",
      "effects": [
        {
          "type": "maximum",
          "amount": 1.0,
          "objectType": "resource",
          "object": "Bears"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 7,
      "name": "Cabin",
      "resourcesRequired": [
        {name: 'Wood', price: 120, isCraftable: false},
        {name: 'Stone', price: 150, isCraftable: false},
      ],
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Improves the effectiveness of berry fields.",
      "secondaryToolTip": "Rome wasn't built in a day, but this was!",
      "effects": [
        {
          "type": "bonus",
          "amount": 0.03,
          "objectType": "building",
          "object": "Berry Field",
          "resource": "Berries"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 9,
      "name": "Aquaduct",
      "resourcesRequired": [
        {name: 'Stone', price: 100, isCraftable: false},
      ],
    }
]

export const resources : ResourceBase[] = [
    {
      "name": "Berries",
      "defaultMaximum": 5000.0,
      "color": "black",
    },
    {
      "name": "Wood",
      "defaultMaximum": 200.0,
      "color": "black",
    },
    {
      "name": "Iron",
      "defaultMaximum": 100.0,
      "color": "black",
    },
    {
      "name": "Ice",
      "defaultMaximum": 100.0,
      "color": "#1E90FF",
    },
    {
      "name": "Science",
      "defaultMaximum": 0.0,
      "color": "#228B22",
    },
    {
      "name": "Stone",
      "defaultMaximum": 500.0,
      "color": "#708090",
    },
    {
      "name": "Bears",
      "defaultMaximum": 0.0,
      "color": "black",
    },
    {
      "name": "Water",
      "defaultMaximum": 100.0,
      "color": "#0000B3",
    },
    {
      "name": "Magic",
      "defaultMaximum": 0.0,
      "color": "#9932CC",
    },
    {
      "name": "Ore",
      "defaultMaximum": 150.0,
      "color": "#A52A2A",
    },
    {
      "name": "Diamond",
      "defaultMaximum": 100.0,
      "color": "black",
    },
    {
      "name": "Gold",
      "defaultMaximum": 10.0,
      "color": "black",
    },
]

export const craftableResources : CraftableResourceBase[] = [
    {
      "toolTipText": "A wooden beam. Important for advanced structures.",
      "dependancy": 4,
      "hasScienceDependancy": true,
      "name": "Beam",
      "resourcesRequired": [
        {name: 'Wood', price: 150, isCraftable: false},
      ],
    },
    {
      "toolTipText": "A heavy stone block. Used as a base for structures or to construct its walls.",
      "dependancy": 4,
      "hasScienceDependancy": true,
      "name": "Block",
      "resourcesRequired": [
        {name: 'Stone', price: 300, isCraftable: false},
      ],
    },
    {
      "toolTipText": "Thick iron nails used to keep buildings in one piece.",
      "dependancy": 4,
      "hasScienceDependancy": true,
      "name": "Nail",
      "resourcesRequired": [
        {name: 'Iron', price: 70, isCraftable: false},
      ],
    },
    {
      "toolTipText": "This crystal naturally channels magical energy.",
      "dependancy": 6,
      "hasScienceDependancy": true,
      "name": "Crystal",
      "resourcesRequired": [
        {name: "Ice", price: 100, isCraftable: false},
        {name: "Magic", price: 150, isCraftable: false},
        {name: "Ore", price: 100, isCraftable: false},
      ],
    },
    {
      "toolTipText": "Combining high-carbon diamonds with iron produces a stronger, more workable metal. Wish there was a better way to do this...",
      "dependancy": 10,
      "hasScienceDependancy": true,
      "name": "Steel",
      "resourcesRequired": [
        {name: 'Iron', price: 100, isCraftable: false},
        {name: "Diamond", price: 50, isCraftable: false},
      ],
    }
]

export const jobs : JobBase[] = [
    {
      "name": "Scavenger",
      "toolTipText": "Will pick things up off the ground for you. Is better at finding wood and ice.",
      "effects": [
        {
          "type": "production",
          "amount": 0.15,
          "objectType": "resource",
          "object": "Wood"
        },
        {
          "type": "production",
          "amount": 0.15,
          "objectType": "resource",
          "object": "Ice"
        }
      ]
    },
    {
      "name": "Farmer",
      "toolTipText": "Farmers will produce 5 berries per second.",
      "effects": [
        {
          "type": "production",
          "amount": 5.0,
          "objectType": "resource",
          "object": "Berries"
        }
      ]
    },
    {
      "name": "Researcher",
      "toolTipText": "Produces 0.3 science per second",
      "effects": [
        {
          "type": "production",
          "amount": 0.3,
          "objectType": "resource",
          "object": "Science"
        }
      ]
    },
    {
      "name": "Sorcerer",
      "toolTipText": "Produces 0.03 magic per second.",
      "effects": [
        {
          "type": "production",
          "amount": 0.03,
          "objectType": "resource",
          "object": "Magic"
        }
      ]
    },
    {
      "name": "Miner",
      "toolTipText": "Produces 0.1 stone per second",
      "effects": [
        {
          "type": "production",
          "amount": 0.3,
          "objectType": "resource",
          "object": "Stone"
        },
        {
          "type": "production",
          "amount": 0.1,
          "objectType": "resource",
          "object": "Ore"
        }
      ]
    },
    {
      "name": "Hunter",
      "toolTipText": "Can be sent out hunting every two minutes.",
      "effects": []
    },
    {
      "name": "Trader",
      "toolTipText": "Can be sent out to trade or as an envoy to other civilizations",
      "effects": []
    },
    {
      "name": "Warrior",
      "toolTipText": "Protect your village",
      "effects": []
    }
]

export let sciences : Researchable[] = [
    {
      "dependancyPos": -1,
      "toolTipText": "Allows you see the time of year.",
      "name": "Calendar",
      "resourcesRequired": [
        {name: 'Science', price: 50, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 0,
      "toolTipText": "Unlocks the farmer. Farmers produce 5 berries per second.",
      "name": "Agriculture",
      "resourcesRequired": [
        {name: 'Science', price: 100, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 0,
      "toolTipText": "Unlocks the hunter.",
      "name": "Organized Hunting",
      "resourcesRequired": [
        {name: 'Science', price: 250, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 1,
      "toolTipText": "Unlocks the mine.",
      "name": "Mining",
      "resourcesRequired": [
        {name: 'Science', price: 500, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 3,
      "toolTipText": "Unlocks the smeltery, a building that allows you to make iron.",
      "name": "Metal Work",
      "resourcesRequired": [
        {name: 'Science', price: 1000, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 1,
      "toolTipText": "Fill the sacred tomes with precious bearkind knowledge.",
      "name": "Writing",
      "resourcesRequired": [
        {name: 'Science', price: 750, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 5,
      "toolTipText": "Unlocks the magic pathway.",
      "name": "Spell Casting",
      "resourcesRequired": [
        {name: 'Science', price: 1500, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 4,
      "toolTipText": "Construction is the art of building structures that don\u0027t fall down long enough to be useful.",
      "name": "Construction",
      "resourcesRequired": [
        {name: 'Science', price: 2500, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 5,
      "toolTipText": "I\u0027ll trade you this metal disk for those berries.",
      "name": "Currency",
      "resourcesRequired": [
        {name: 'Science', price: 4000, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 7,
      "toolTipText": "Using the power of math, you can now construct more complex buildings.",
      "name": "Engineering",
      "resourcesRequired": [
        {name: 'Science', price: 7500, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 9,
      "toolTipText": "Mixing different metals and materials can produce stronger building materials.",
      "name": "Alloying",
      "resourcesRequired": [
        {name: 'Science', price: 10000, isCraftable: false},
      ],
    }
]

export let upgrades : Upgrade[] = [
    {
      "dependancy": 3,
      "toolTipText": "Scavengers can use these axes to cut down any small trees they find. Increases wood production.",
      "effects": [
        {
          "type": "bonus",
          "amount": 0.5,
          "objectType": "job",
          "object": "Scavenger",
          "resource": "Wood"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Stone Axes",
      "resourcesRequired": [
        {name: 'Stone', price: 50, isCraftable: false},
      ],
    },
    {
      "dependancy": 8,
      "toolTipText": "Purify some of your ore into gold through reacting impurities with salt.",
      "effects": [
        {
          "type": "production",
          "amount": 0.005,
          "objectType": "building",
          "object": "Smeltery",
          "resource": "Gold"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Salt Cementation",
      "resourcesRequired": [
        {name: 'Water', price: 250, isCraftable: false},
        {name: 'Science', price: 5000, isCraftable: false},
      ],
    },
    {
      "dependancy": 10,
      "toolTipText": "Dig deeper into the planet's crust",
      "effects": [
        {
          "type": "production",
          "amount": 0.01,
          "objectType": "job",
          "object": "Miner",
          "resource": "Diamond"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Deep Mining",
      "resourcesRequired": [
        {name: 'Iron', price: 200, isCraftable: false},
        {name: 'Beam', price: 50, isCraftable: true},
        {name: 'Science', price: 5000, isCraftable: true},
      ],
    },
    {
      "dependancy": 4,
      "toolTipText": "Stronger axes for your scavengers.",
      "effects": [
        {
          "type": "bonus",
          "amount": 0.3,
          "objectType": "job",
          "object": "Scavenger",
          "resource": "Wood"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Iron Axes",
      "resourcesRequired": [
        {name: 'Iron', price: 100, isCraftable: false},
      ],
    },
    {
      "dependancy": 3,
      "toolTipText": "Using hoes to till the soil is much easier.",
      "effects": [
        {
          "type": "bonus",
          "amount": 0.25,
          "objectType": "job",
          "object": "Farmer",
          "resource": "Berries"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Stone Hoes",
      "resourcesRequired": [
        {name: 'Stone', price: 100, isCraftable: false},
      ],
    }
]

export let magic : Researchable[] = [
    {
      "dependancyPos": -1,
      "toolTipText": "Control the mighty powers of dust motes. Also works on snow.",
      "name": "Dustomancy",
      "resourcesRequired": [
        {name: 'Magic', price: 50, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 0,
      "toolTipText": "Changes the properties of some things",
      "name": "Transfiguration",
      "resourcesRequired": [
        {name: 'Magic', price: 100, isCraftable: false},
      ],
    },
    {
      "dependancyPos": 0,
      "toolTipText": "Uhh.. That building was always on fire...",
      "name": "Pyromancy",
      "resourcesRequired": [
        {name: 'Magic', price: 170, isCraftable: false},
      ],
    }
]

export let spells : Spell[] = [
    {
      "name": "Make Wood",
      "toolTipText": "Turn your extra berries into wood.",
      "dependancy": 1,
      "isEnablable": false,
      "effects": [
        {
          "type": "production",
          "amount": -1000.0,
          "objectType": "resource",
          "object": "Berries"
        },
        {
          "type": "production",
          "amount": -5.0,
          "objectType": "resource",
          "object": "Magic"
        },
        {
          "type": "production",
          "amount": 50.0,
          "objectType": "resource",
          "object": "Wood"
        }
      ]
    },
    {
      "name": "Control Snowstorms",
      "toolTipText": "Use dustomancy to lower the likelihood of a snowstorm blowing through your village.",
      "dependancy": 0,
      "isEnablable": true,
      "effects": [
        {
          "type": "production",
          "amount": -0.04,
          "objectType": "resource",
          "object": "Magic"
        }
      ]
    },
    {
      "name": "Mystic Fires",
      "toolTipText": "Use magic to fuel your bonfires instead of wood.",
      "dependancy": 2,
      "isEnablable": true,
      "effects": [
        {
          "type": "production",
          "amount": 0.1,
          "objectType": "building",
          "object": "Smeltery",
          "resource": "Wood"
        },
        {
          "type": "production",
          "amount": -0.05,
          "objectType": "resource",
          "object": "Magic"
        }
      ]
    }
]

export let civilizations : Civilization[] = [
    {
      "name": "Raccoons",
      "imageFile": "Raccoon.jpg",
      "buysResource": 1,
      "buyAmount": 75.0,
      "sellResource": 5,
      "defaultSellAmount": 300.0,
      "scienceFavour": 0.5,
      "magicFavour": 0.5,
      "warFavour": 0.2,
      "populationFavour": 0.5,
      "happinessFavour": 0.6,
      "tradeTime": 30,
      "description": "Explorers from the South. Your village is fascinated by their tales of the tiny oceans they live near."
    },
    {
      "name": "Salamanders",
      "imageFile": "Salamander.jpg",
      "buysResource": 5,
      "buyAmount": 500.0,
      "sellResource": 2,
      "defaultSellAmount": 50.0,
      "scienceFavour": 0.8,
      "magicFavour": 0.6,
      "warFavour": 0.0,
      "populationFavour": 0.5,
      "happinessFavour": 0.8,
      "tradeTime": 30,
      "description": "A peaceful people with great command over both the powers of science and magic. No one actually knows where they come from, your traders just leave goods in the deserts where they are presumed to live and find new goods when they return the next day."
    }
]