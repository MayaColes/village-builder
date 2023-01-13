import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Polar-Bear-Game-V2';

  resources = [
    {
      "name": "Berries",
      "defaultMaximum": 5000.0,
      "maximum": 0,
      "amount": 7,
      "isVisible": true,
      "color": "black",
      "identifier": "b"
    },
    {
      "name": "Wood",
      "defaultMaximum": 200.0,
      "maximum": 0,
      "amount": 7,
      "isVisible": true,
      "color": "black",
      "identifier": "w"
    },
  ]
  craftableResources = [
    {
      "toolTipText": "A wooden beam. Important for advanced structures.",
      "canCraft": true,
      "dependancy": 4,
      "scienceDependancy": true,
      "name": "Beam",
      "identifier": "b",
      amount : 10,
      isCraftable: true,
      hasScienceDependancy: false,
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
      "canCraft": true,
      "dependancy": 4,
      "scienceDependancy": true,
      "name": "Block",
      "identifier": "B",
      amount : 10,
      isCraftable: true,
      hasScienceDependancy: false,
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
  ]
  events : {time: number, text: string}[] = [{time: 1, text: 'here'}];
  updateEvents(){
    this.events.push({time: 1, text: 'here'})
  }
  civilizations = []
  jobs = []
  magic = []
  spells = []
  upgrade = []
  sciences = []
  buildings = [
    {
      increaseRatio: 1.25,
      toolTipText: "Produces Berries.",
      secondaryToolTip: "No snacking",
      effects: [
        {
          typeOfEffect: "+",
          effectAmount: 0.73,
          effectAmountWithBonus: 0.73,
          effectsWhatObjectType: "r",
          effectsWhatObject: "b",
          effectsWhatResource: "!"
        }
      ],
      isEnablable: false,
      isBuildable: false,
      hasScienceDependancy: true,
      dependancy: -1,
      name: "Berry Field",
      identifier: "b",
      resourcesRequired: [
        "b"
      ],
      price: [
        10.0
      ],
      resourceCraftable: [
        false
      ],
      numberBuilt: 10,
      numberEnabled: 0,
    },
    {
      increaseRatio: 1.25,
      toolTipText: "Produces Berries.",
      secondaryToolTip: "No snacking",
      effects: [
        {
          typeOfEffect: "+",
          effectAmount: 0.73,
          effectAmountWithBonus: 0.73,
          effectsWhatObjectType: "r",
          effectsWhatObject: "b",
          effectsWhatResource: "!"
        }
      ],
      isEnablable: false,
      isBuildable: false,
      hasScienceDependancy: true,
      dependancy: -1,
      name: "Berry Field",
      identifier: "b",
      resourcesRequired: [
        "b"
      ],
      price: [
        10.0
      ],
      resourceCraftable: [
        false
      ],
      numberBuilt: 10,
      numberEnabled: 0,
    },
  ]
}
