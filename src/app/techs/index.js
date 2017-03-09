import angular from 'angular';

import {tech} from './tech';
import {techs} from './techs';

import './techs.css';

export const techsModule = 'techs';

angular
  .module(techsModule, [])
  .component('fountainTech', tech)
  .component('fountainTechs', techs);
