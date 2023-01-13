import { Building, Civilization, CraftableResource, Job, Researchable, Resource, Spell, Upgrade } from "./data-interfaces";

export let buildings : Building[] = [
    {
      "increaseRatio": 3.0,
      "toolTipText": "This house can hold two bears. Bears need 3 berries and 0.5 water per second.",
      "secondaryToolTip": "Nice and cold :)",
      "effects": [
        {
          "typeOfEffect": "m",
          "effectAmount": 2.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "B",
          "effectsWhatResource": "!"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": -1,
      "name": "Igloo",
      "identifier": "i",
      "resourcesRequired": [
        "I"
      ],
      "price": [
        10.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "increaseRatio": 1.25,
      "toolTipText": "Produces Berries.",
      "secondaryToolTip": "No snacking",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 0.73,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "b",
          "effectsWhatResource": "!"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": -1,
      "name": "Berry Field",
      "identifier": "b",
      "resourcesRequired": [
        "b"
      ],
      "price": [
        10.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "increaseRatio": 1.25,
      "toolTipText": "Libraries can be used to store science. They also provide a bonus to your science production.",
      "secondaryToolTip": "What are these squiggly marks?",
      "effects": [
        {
          "typeOfEffect": "m",
          "effectAmount": 250.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "s",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "%",
          "effectAmount": 0.1,
          "effectsWhatObjectType": "j",
          "effectsWhatObject": "r",
          "effectsWhatResource": "s"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": -1,
      "name": "Library",
      "identifier": "l",
      "resourcesRequired": [
        "w"
      ],
      "price": [
        20.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Provides a 20% bonus to stone production.",
      "secondaryToolTip": "What\u0027s mine is mine and what\u0027s yours is also mine.",
      "effects": [
        {
          "typeOfEffect": "%",
          "effectAmount": 0.2,
          "effectsWhatObjectType": "j",
          "effectsWhatObject": "m",
          "effectsWhatResource": "S"
        },
        {
          "typeOfEffect": "%",
          "effectAmount": 0.05,
          "effectsWhatObjectType": "j",
          "effectsWhatObject": "m",
          "effectsWhatResource": "o"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 3,
      "name": "Mine",
      "identifier": "m",
      "resourcesRequired": [
        "w"
      ],
      "price": [
        50.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "increaseRatio": 2.5,
      "toolTipText": "Uses wood to melt ice into water.",
      "secondaryToolTip": "So warm...",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 1.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "W",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "-",
          "effectAmount": 0.1,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "w",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "-",
          "effectAmount": 0.1,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "I",
          "effectsWhatResource": "!"
        }
      ],
      "isEnablable": true,
      "hasScienceDependancy": true,
      "dependancy": -1,
      "name": "Bonfire",
      "identifier": "B",
      "resourcesRequired": [
        "w"
      ],
      "price": [
        10.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Increases your magic limit and gives a small magic production bonus. ",
      "secondaryToolTip": "I wonder what they do up there?",
      "effects": [
        {
          "typeOfEffect": "m",
          "effectAmount": 20.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "m",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "%",
          "effectAmount": 0.06,
          "effectsWhatObjectType": "j",
          "effectsWhatObject": "S",
          "effectsWhatResource": "m"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 6,
      "name": "Tower",
      "identifier": "t",
      "resourcesRequired": [
        "w",
        "S"
      ],
      "price": [
        30.0,
        50.0
      ],
      "resourceCraftable": [
        false,
        false
      ]
    },
    {
      "increaseRatio": 1.5,
      "toolTipText": "Increase your resource limits.",
      "secondaryToolTip": "Don\u0027t organize your stuff, just hide it behind walls.",
      "effects": [
        {
          "typeOfEffect": "m",
          "effectAmount": 1000.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "b",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "m",
          "effectAmount": 350.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "w",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "m",
          "effectAmount": 75.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "i",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "m",
          "effectAmount": 350.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "I",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "m",
          "effectAmount": 600.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "S",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "m",
          "effectAmount": 50.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "o",
          "effectsWhatResource": "!"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 1,
      "name": "Storage Shed",
      "identifier": "s",
      "resourcesRequired": [
        "w"
      ],
      "price": [
        30.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Consumes wood and ore to produce iron.",
      "secondaryToolTip": "I\u0027m smeelltiing!!",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 0.1,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "I",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "-",
          "effectAmount": 0.1,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "w",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "-",
          "effectAmount": 0.3,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "o",
          "effectsWhatResource": "!"
        }
      ],
      "isEnablable": true,
      "hasScienceDependancy": true,
      "dependancy": 4,
      "name": "Smeltery",
      "identifier": "S",
      "resourcesRequired": [
        "S"
      ],
      "price": [
        250.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "increaseRatio": 1.25,
      "toolTipText": "Improves your science limit and production.",
      "secondaryToolTip": "I just nap here and it looks like i\u0027m learning.",
      "effects": [
        {
          "typeOfEffect": "m",
          "effectAmount": 500.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "s",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "%",
          "effectAmount": 0.2,
          "effectsWhatObjectType": "j",
          "effectsWhatObject": "r",
          "effectsWhatResource": "s"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 5,
      "name": "School",
      "identifier": "c",
      "resourcesRequired": [
        "w",
        "S"
      ],
      "price": [
        100.0,
        120.0
      ],
      "resourceCraftable": [
        false,
        false
      ]
    },
    {
      "increaseRatio": 1.2,
      "toolTipText": "Improves crafting effectiveness.",
      "secondaryToolTip": "I made a birdhouse!",
      "effects": [
        {
          "typeOfEffect": "%",
          "effectAmount": 0.06,
          "effectsWhatObjectType": "e",
          "effectsWhatObject": "!",
          "effectsWhatResource": "!"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 7,
      "name": "Tinkerer\u0027s Station",
      "identifier": "T",
      "resourcesRequired": [
        "w",
        "S"
      ],
      "price": [
        50.0,
        200.0
      ],
      "resourceCraftable": [
        false,
        false
      ]
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "You can now get clean water from the ground.",
      "secondaryToolTip": "Well, well, well, what do we have here?",
      "effects": [
        {
          "typeOfEffect": "m",
          "effectAmount": 50.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "W",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "+",
          "effectAmount": 0.7,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "W",
          "effectsWhatResource": "!"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 7,
      "name": "Well",
      "identifier": "w",
      "resourcesRequired": [
        "S",
        "b"
      ],
      "price": [
        300.0,
        5.0
      ],
      "resourceCraftable": [
        false,
        true
      ]
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Increase your resource limits even more!",
      "secondaryToolTip": "",
      "effects": [
        {
          "typeOfEffect": "m",
          "effectAmount": 100.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "w",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "m",
          "effectAmount": 50.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "i",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "m",
          "effectAmount": 50.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "I",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "m",
          "effectAmount": 250.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "S",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "m",
          "effectAmount": 25.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "o",
          "effectsWhatResource": "!"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 7,
      "name": "Warehouse",
      "identifier": "W",
      "resourcesRequired": [
        "b",
        "B",
        "i"
      ],
      "price": [
        3.0,
        5.0,
        1.0
      ],
      "resourceCraftable": [
        true,
        true,
        true
      ]
    },
    {
      "increaseRatio": 1.3,
      "toolTipText": "Build a house for one bear.",
      "secondaryToolTip": "Little house on the tundra.",
      "effects": [
        {
          "typeOfEffect": "m",
          "effectAmount": 1.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "B",
          "effectsWhatResource": "!"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 7,
      "name": "Cabin",
      "identifier": "C",
      "resourcesRequired": [
        "w",
        "S"
      ],
      "price": [
        120.0,
        150.0
      ],
      "resourceCraftable": [
        false,
        false
      ]
    },
    {
      "increaseRatio": 1.15,
      "toolTipText": "Improves the effectiveness of berry fields.",
      "secondaryToolTip": "Rome wasn't built in a day, but this was!",
      "effects": [
        {
          "typeOfEffect": "%",
          "effectAmount": 0.03,
          "effectsWhatObjectType": "b",
          "effectsWhatObject": "b",
          "effectsWhatResource": "b"
        }
      ],
      "isEnablable": false,
      "hasScienceDependancy": true,
      "dependancy": 9,
      "name": "Aquaduct",
      "identifier": "a",
      "resourcesRequired": [
        "S"
      ],
      "price": [
        100.0
      ],
      "resourceCraftable": [
        false
      ]
    }
]

export let resources : Resource[] = [
    {
      "name": "Berries",
      "defaultMaximum": 5000.0,
      "color": "black",
      "identifier": "b"
    },
    {
      "name": "Wood",
      "defaultMaximum": 200.0,
      "color": "black",
      "identifier": "w"
    },
    {
      "name": "Iron",
      "defaultMaximum": 100.0,
      "color": "black",
      "identifier": "i"
    },
    {
      "name": "Ice",
      "defaultMaximum": 100.0,
      "color": "#1E90FF",
      "identifier": "I"
    },
    {
      "name": "Science",
      "defaultMaximum": 0.0,
      "color": "#228B22",
      "identifier": "s"
    },
    {
      "name": "Stone",
      "defaultMaximum": 500.0,
      "color": "#708090",
      "identifier": "S"
    },
    {
      "name": "Bears",
      "defaultMaximum": 0.0,
      "color": "black",
      "identifier": "B"
    },
    {
      "name": "Water",
      "defaultMaximum": 100.0,
      "color": "#0000B3",
      "identifier": "W"
    },
    {
      "name": "Magic",
      "defaultMaximum": 0.0,
      "color": "#9932CC",
      "identifier": "m"
    },
    {
      "name": "Ore",
      "defaultMaximum": 150.0,
      "color": "#A52A2A",
      "identifier": "o"
    },
    {
      "name": "Diamond",
      "defaultMaximum": 100.0,
      "color": "black",
      "identifier": "d"
    },
    {
      "name": "Gold",
      "defaultMaximum": 10.0,
      "color": "black",
      "identifier": "g"
    },
]

export let craftableResources : CraftableResource[] = [
    {
      "toolTipText": "A wooden beam. Important for advanced structures.",
      "dependancy": 4,
      "hasScienceDependancy": true,
      "name": "Beam",
      "identifier": "b",
      "resourcesRequired": [
        "w"
      ],
      "price": [
        150.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "toolTipText": "A heavy stone block. Used as a base for structures or to construct its walls.",
      "dependancy": 4,
      "hasScienceDependancy": true,
      "name": "Block",
      "identifier": "B",
      "resourcesRequired": [
        "S"
      ],
      "price": [
        300.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "toolTipText": "Thick iron nails used to keep buildings in one piece.",
      "dependancy": 4,
      "hasScienceDependancy": true,
      "name": "Iron Nail",
      "identifier": "i",
      "resourcesRequired": [
        "i"
      ],
      "price": [
        70.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "toolTipText": "This crystal can be used to channel magical energy.",
      "dependancy": 6,
      "hasScienceDependancy": true,
      "name": "Crystal",
      "identifier": "c",
      "resourcesRequired": [
        "I",
        "m",
        "o"
      ],
      "price": [
        100.0,
        150.0,
        100.0
      ],
      "resourceCraftable": [
        false,
        false,
        false
      ]
    },
    {
      "toolTipText": "Combining high-carbon diamonds with iron produces a stronger, more workable metal.",
      "dependancy": 10,
      "hasScienceDependancy": true,
      "name": "Steel",
      "identifier": "s",
      "resourcesRequired": [
        "i",
        "d"
      ],
      "price": [
        100.0,
        100.0
      ],
      "resourceCraftable": [
        false,
        false
      ]
    }
]

export let jobs : Job[] = [
    {
      "name": "Scavenger",
      "toolTipText": "Will pick things up off the ground for you. Is better at finding wood and ice.",
      "identifier": "s",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 0.15,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "w",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "+",
          "effectAmount": 0.15,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "I",
          "effectsWhatResource": "!"
        }
      ]
    },
    {
      "name": "Farmer",
      "toolTipText": "Farmers will produce 5 berries per second.",
      "identifier": "f",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 5.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "b",
          "effectsWhatResource": "!"
        }
      ]
    },
    {
      "name": "Researcher",
      "toolTipText": "Produces 0.3 science per second. They all have pocket protectors.",
      "identifier": "r",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 0.3,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "s",
          "effectsWhatResource": "!"
        }
      ]
    },
    {
      "name": "Sorcerer",
      "toolTipText": "Produces 0.03 magic per second.",
      "identifier": "S",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 0.03,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "m",
          "effectsWhatResource": "!"
        }
      ]
    },
    {
      "name": "Miner",
      "toolTipText": "Produces 0.1 stone per second",
      "identifier": "m",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 0.3,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "S",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "+",
          "effectAmount": 0.1,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "o",
          "effectsWhatResource": "!"
        }
      ]
    },
    {
      "name": "Hunter",
      "toolTipText": "Can be sent out hunting every two minutes.",
      "identifier": "h",
      "effects": []
    },
    {
      "name": "Trader",
      "toolTipText": "Can be sent out to trade or as an envoy",
      "identifier": "t",
      "effects": []
    },
    {
      "name": "Warrior",
      "toolTipText": "Protect your village",
      "identifier": "w",
      "effects": []
    }
]

export let sciences : Researchable[] = [
    {
      "dependancyPos": -1,
      "toolTipText": "Allows you see the time of year.",
      "name": "Calendar",
      "identifier": "c",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        50.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 0,
      "toolTipText": "Unlocks the farmer. Farmers produce 5 berries per second.",
      "name": "Agriculture",
      "identifier": "a",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        100.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 0,
      "toolTipText": "Unlocks the hunter.",
      "name": "Organized Hunting",
      "identifier": "o",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        250.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 1,
      "toolTipText": "Unlocks the mine.",
      "name": "Mining",
      "identifier": "m",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        500.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 3,
      "toolTipText": "Unlocks the smeltery, a building that allows you to make iron.",
      "name": "Metal Work",
      "identifier": "M",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        1000.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 1,
      "toolTipText": "Fill the sacred tomes with precious bearkind knowledge.",
      "name": "Writing",
      "identifier": "w",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        750.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 5,
      "toolTipText": "Unlocks the magic pathway. \u003cbr\u003e\u003cbr\u003e Fireball! FireBall!",
      "name": "Spell Casting",
      "identifier": "s",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        1500.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 4,
      "toolTipText": "Construction is the art of building structures that don\u0027t fall down long enough to be useful.",
      "name": "Construction",
      "identifier": "C",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        2500.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 5,
      "toolTipText": "I\u0027ll give you this metal circle for your berries.",
      "name": "Currency",
      "identifier": "U",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        4000.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 7,
      "toolTipText": "Using the power of math, you can now construct more complex buildings.",
      "name": "Engineering",
      "identifier": "E",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        7500.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 9,
      "toolTipText": "Mixing different metals and materials can produce stronger building materials.",
      "name": "Alloying",
      "identifier": "A",
      "resourcesRequired": [
        "s"
      ],
      "price": [
        10000.0
      ],
      "resourceCraftable": [
        false
      ]
    }
]

export let upgrades : Upgrade[] = [
    {
      "dependancy": 3,
      "toolTipText": "Scavengers can use these axes to cut down small trees that they find. Increases wood production.",
      "effects": [
        {
          "typeOfEffect": "%",
          "effectAmount": 0.5,
          "effectsWhatObjectType": "j",
          "effectsWhatObject": "s",
          "effectsWhatResource": "w"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Stone Axes",
      "identifier": "s",
      "resourcesRequired": [
        "S"
      ],
      "price": [
        50.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancy": 8,
      "toolTipText": "Purify some of your ore into gold through reacting impurities with salt.",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 0.005,
          "effectsWhatObjectType": "b",
          "effectsWhatObject": "S",
          "effectsWhatResource": "g"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Salt Cementation",
      "identifier": "S",
      "resourcesRequired": [
        "W",
        "s"
      ],
      "price": [
        250.0,
        5000.0
      ],
      "resourceCraftable": [
        false,
        false
      ]
    },
    {
      "dependancy": 10,
      "toolTipText": "Dig deep into the crust of the planet.",
      "effects": [
        {
          "typeOfEffect": "+",
          "effectAmount": 0.01,
          "effectsWhatObjectType": "j",
          "effectsWhatObject": "m",
          "effectsWhatResource": "d"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Deep Mining",
      "identifier": "d",
      "resourcesRequired": [
        "i",
        "b",
        "s"
      ],
      "price": [
        200.0,
        50.0,
        5000.0
      ],
      "resourceCraftable": [
        false,
        true,
        false
      ]
    },
    {
      "dependancy": 4,
      "toolTipText": "Stronger axes for your scavengers.",
      "effects": [
        {
          "typeOfEffect": "%",
          "effectAmount": 0.3,
          "effectsWhatObjectType": "j",
          "effectsWhatObject": "s",
          "effectsWhatResource": "w"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Iron Axes",
      "identifier": "i",
      "resourcesRequired": [
        "i"
      ],
      "price": [
        100.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancy": 3,
      "toolTipText": "Using hoes to till the soil is much easier.",
      "effects": [
        {
          "typeOfEffect": "%",
          "effectAmount": 0.25,
          "effectsWhatObjectType": "j",
          "effectsWhatObject": "f",
          "effectsWhatResource": "b"
        }
      ],
      "hasScienceDependancy": true,
      "name": "Stone Hoes",
      "identifier": "h",
      "resourcesRequired": [
        "S"
      ],
      "price": [
        100.0
      ],
      "resourceCraftable": [
        false
      ]
    }
]

export let magic : Researchable[] = [
    {
      "dependancyPos": -1,
      "toolTipText": "Control the mighty powers of dust motes. Also works on snow.",
      "name": "Dustomancy",
      "identifier": "d",
      "resourcesRequired": [
        "m"
      ],
      "price": [
        50.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 0,
      "toolTipText": "Turn this into that! Wow!",
      "name": "Transfiguration",
      "identifier": "t",
      "resourcesRequired": [
        "m"
      ],
      "price": [
        100.0
      ],
      "resourceCraftable": [
        false
      ]
    },
    {
      "dependancyPos": 0,
      "toolTipText": "Uhh.. That building was always on fire...",
      "name": "Pyromancy",
      "identifier": "p",
      "resourcesRequired": [
        "m"
      ],
      "price": [
        170.0
      ],
      "resourceCraftable": [
        false
      ]
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
          "typeOfEffect": "-",
          "effectAmount": 1000.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "b",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "-",
          "effectAmount": 5.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "m",
          "effectsWhatResource": "!"
        },
        {
          "typeOfEffect": "+",
          "effectAmount": 50.0,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "w",
          "effectsWhatResource": "!"
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
          "typeOfEffect": "-",
          "effectAmount": 0.04,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "m",
          "effectsWhatResource": "!"
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
          "typeOfEffect": "+",
          "effectAmount": 0.1,
          "effectsWhatObjectType": "b",
          "effectsWhatObject": "S",
          "effectsWhatResource": "w"
        },
        {
          "typeOfEffect": "-",
          "effectAmount": 0.05,
          "effectsWhatObjectType": "r",
          "effectsWhatObject": "m",
          "effectsWhatResource": "!"
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