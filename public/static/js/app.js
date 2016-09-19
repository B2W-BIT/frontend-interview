var app = angular.module('app', ['infinite-scroll']);

app.run(function($rootScope) {
    $rootScope.visibleTweetsReply = 1;
    $rootScope.visibleTweetsOnly = 0;
    $rootScope.visibleTweetsMedia = 0;

    $rootScope.visible = function (only,reply,media) {
    	$rootScope.visibleTweetsReply = reply;
    	$rootScope.visibleTweetsOnly = only;
    	$rootScope.visibleTweetsMedia = media;
    };
});

app.controller('tweets', ['$scope', '$http', function ($scope, $http) {
    $http.get("http://localhost:5000/tweets?page=1&reply=False").success(function (data) {
    	$scope.tweets = data;
    	var page = 2;
    	$scope.busy = false;
		$scope.loadTweets = function() {
			if($scope.busy) {
				return;
			}
			$scope.busy = true;
			$http.get("http://localhost:5000/tweets?page="+page+"&reply=False").success(function (data) {
				for(var i = 0;i<data.length;i++){
					$scope.tweets.push(data[i]);
				}
				$scope.busy = false;
			});
			page++;
		};
    });
}]);

app.controller('tweets-only', ['$scope', '$http', function ($scope, $http) {
    $http.get("http://localhost:5000/tweets?page=1&reply=True").success(function (data) {
    	$scope.tweets = data;
    	var page = 2;
    	$scope.busy = false;
		$scope.loadTweets = function() {
			if($scope.busy) {
				return;
			}
			$scope.busy = true;
			$http.get("http://localhost:5000/tweets?page="+page+"&reply=True").success(function (data) {
				for(var i = 0;i<data.length;i++){
					$scope.tweets.push(data[i]);
				}
				$scope.busy = false;
			});
			page++;
		};
    });
}]);

app.controller('user',['$scope','$http', function ($scope,$http) {
	$http.get("http://localhost:5000/info-user").success(function (data) {
		$scope.infos = data;
	});
}]);



app.controller('trends',['$scope','$http',function ($scope,$http) {
	$http.get("http://localhost:5000/trends").success(function (data) {
		$scope.trends = data;
	});
}]);

app.controller('tweets-media', ['$scope', '$http', function ($scope, $http) {
    $http.get("http://localhost:5000/tweets-media?page=1").success(function (data) {
    	$scope.tweets = data;
    	var page = 2;
    	$scope.busy = false;
		$scope.loadTweets = function() {
			if($scope.busy) {
				return;
			}
			$scope.busy = true;
			$http.get("http://localhost:5000/tweets-media?page="+page).success(function (data) {
				for(var i = 0;i<data.length;i++){
					$scope.tweets.push(data[i]);
				}
				$scope.busy = false;
			});
			page++;
		};
    });
}]);

app.controller('flickr',['$scope','$http',function ($scope,$http) {
	$http.get("http://localhost:5000/flickr").success(function (data) {
		$scope.flickr = data.images;
		$scope.total = data.total;
	});
}]);

app.controller('who-follow',['$scope','$http',function ($scope,$http) {
	$http.get("http://localhost:5000/who-follow").success(function (data) {
		$scope.follow = data;
	});
}]);