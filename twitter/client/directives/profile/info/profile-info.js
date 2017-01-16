var app = angular.module('app.directives');

app.directive('profileInfo', function profileInfo() {

    return {
        restrict : 'E',
        priority: 1,
        scope: {
            user: '='
        },
        template : [
            '<section class="profile-info-container">',
            '   <article>',
            '       <div class="row profile-info-name">',
            '           <span class="profile-info-name-title">{{ user.name }}</span>',
            '       </div>',
            '       <div class="row profile-info-name">',
            '           <span class="profile-info-name-at">{{ user.screen_name | screenName }}</span>',
            '       </div>',
            '   </article>',
            '   <article class="profile-info-description-container">',
            '       <div class="row profile-info-name">',
            '           <span>{{ user.description }}</span>',
            '       </div>',
            '   </article>',
            '   <article class="profile-info-description-container">',
            '       <profile-info-icon icon="fa-map-marker" text="user.location"></profile-info-icon>',
            '       <profile-info-icon icon="fa-link" text="user.name" is-link="true"></profile-info-icon>',
            '       <profile-info-icon icon="fa-calendar" text="user.created_at"></profile-info-icon>',
            '   </article>',
            '   <article class="profile-info-description-container">',
            '       <button class="btn btn-tweet btn-full">',
            '           <i class="fa fa-pencil-square-o" aria-hidden="true"></i>',
            '           <span>Tweet to {{ user.name }}</span>',
            '       </button>',
            '   </article>',
            '</section>'
        ].join('')
    };

});