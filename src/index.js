import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome-webpack';

import angular from 'angular';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main/main';
import {header} from './app/header/header';
import {navbar} from './app/navbar/navbar';
import {sidebar} from './app/sidebar/sidebar';

import {techsModule} from './app/techs';

import './index.css';

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('appHeader', header)
  .component('appNavbar', navbar)
  .component('appSidebar', sidebar);
