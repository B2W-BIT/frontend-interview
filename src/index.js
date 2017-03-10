import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome-webpack';

import angular from 'angular';
import 'angular-ui-router';
import routesConfig from './routes';

import {mainModule} from './app/main/index';
import {techsModule} from './app/techs';

import {navbar} from './app/navbar/navbar';
import {header} from './app/header/header';
import {profileNavbar} from './app/profile-navbar/profile-navbar';

import './index.css';

angular
  .module('app', [mainModule, techsModule, 'ui.router'])
  .config(routesConfig)
  .component('appNavbar', navbar)
  .component('appHeader', header)
  .component('profileNavbar', profileNavbar);
