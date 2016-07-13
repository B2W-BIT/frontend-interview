import angular from 'angular';
import MainMenu from './main-menu/mainMenu';
import ProfileCard from './profile-card/profileCard';
import ProfileFollowers from './profile-followers/profileFollowers';
import profileNumbers from './profile-numbers/profileNumbers';
import profilePhotosVideos from './profile-photos-videos/profilePhotosVideos';
import Timeline from './timeline/timeline';
import widgetSuggestions from './widget-suggestions/widgetSuggestions';
import widgetTrends from './widget-trends/widgetTrends';

let commonModule = angular.module('app.common', [
  MainMenu,
  ProfileCard,
  ProfileFollowers,
  profileNumbers,
  profilePhotosVideos,
  Timeline,
  widgetSuggestions,
  widgetTrends
])
.name;

export default commonModule;
