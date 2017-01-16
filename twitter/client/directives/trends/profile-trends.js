var app = angular.module('app.directives');

app.directive('profileTrends', function profileTrends() {

    return {
        restrict : 'E',
        template : [
            '<section class="profile-trends-container col-md-12">',
            '   <header class="profile-trends-container-header">',
            '       Trends',
            '   </header>',
            '   <section>',
            '       <trend hash="AngularJS" count="2,147"></trend>',
            '       <trend hash="React" count="4,303"></trend>',
            '       <trend hash="FelippeNaB2W" count="1,906"></trend>',
            '       <trend hash="B2WDigital" count="7,987"></trend>',
            '       <trend hash="FrontEndCarioca" count="208"></trend>',
            '       <trend hash="FrontInRio" count="243"></trend>',
            '       <trend hash="SubmarinoCom" count="86,456"></trend>',
            '       <trend hash="BlackFriday" count="347"></trend>',
            '       <trend hash="B2WInterview" count="9,651"></trend>',
            '       <trend hash="JavaScriptS2" count="234"></trend>',
            '   </section>',
            '</section>'
        ].join('')
    };

});