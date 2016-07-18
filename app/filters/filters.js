angular.module('app.filters', [])

.filter('toDate', function ($filter) {

    return function (input) {
        input = prepareDateForAllBrowsers(input);
        currentTime = (new Date()).getTime();
        date = (new Date(input)).getTime();

        dateDifference = currentTime - date;
        seconds = Math.abs(dateDifference) / 1000;
        minutes = seconds / 60;
        hours = minutes / 60;

        if(seconds < 60) {
            return Math.floor(seconds) + ' s';
        }
        else if(minutes < 60) {
            return Math.floor(minutes) + ' m';
        }
        else if(hours < 24) {
            return Math.floor(hours) + ' h';
        }
        else {
            return $filter('date')(input, "d 'de' MMM").toString().toLowerCase();
        }
    };
})

.filter('toMediaTweet', function() {

    return function(input) {
        var text = input.text;
        var i = 0;

        if(typeof input.entities.media !== 'undefined') {
            for(i = 0; i < input.entities.media.length; i++) {
                var htmlImages = '<a class="tweet-media" href="{url}" target="_blank"><img src="{media_url}"></a>';

                htmlImages = htmlImages.replace('{url}', input.entities.media[i].expanded_url);
                htmlImages = htmlImages.replace('{media_url}', input.entities.media[i].media_url_https);

                text = text.replace(input.entities.media[i].url, htmlImages);
            }
        }
        if(typeof input.entities.urls !== 'undefined') {

            for(i = 0; i < input.entities.urls.length; i++) {
                var htmlLinks = '<a href="{url}" target="_blank">{display_url}</a>';

                htmlLinks = htmlLinks.replace('{url}', input.entities.urls[i].url);
                htmlLinks = htmlLinks.replace('{display_url}', input.entities.urls[i].display_url);

                text = text.replace(input.entities.urls[i].url, htmlLinks);
            }
        }

        return text;
    };
});

function prepareDateForAllBrowsers(input) {

    var monthArray = {  "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3,
                        "May": 4, "Jun": 5, "Jul": 6, "Aug": 7,
                        "Sep": 8, "Oct": 9, "Nev": 10, "Dec":11
                    };
    var regex = /^[^ ]+ ([^ ]+) (\d{1,2}) (\d{2}):(\d{2}):(\d{2}) \+(\d{4}) (\d{4})$/;
    var match = regex.exec(input);
    var month   = monthArray[match[1]],
        date    = match[2],
        hours   = match[3],
        minutes = match[4],
        seconds = match[5],
        ms      = match[6],
        year    = match[7];

    var dateObject = new Date(year, month, date, hours, minutes , seconds, ms);

    return dateObject.getTime();
}
