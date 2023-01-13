import { Component } from '@angular/core';
import { buildings, resources, craftableResources, jobs, sciences, upgrades, magic, spells, civilizations } from './game-object-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Polar-Bear-Game-V2';

  events : {time: number, text: string}[] = [];

  buildings = buildings

  resources = resources;

  craftableResources = craftableResources;

  jobs = jobs;

  sciences = sciences;

  upgrades = upgrades;

  magic = magic;

  spells = spells;

  civilizations = civilizations;
}
