var myApp = angular.module('myApp', [
	 'ngRoute',
	 'ngResource',
	 'akoenig.deckgrid'
]);
angular.module('myApp').config([
    '$routeProvider',
    function configure ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'HomeController',
            templateUrl: '/templates/home.html'
        });

    }
]);
angular.module('myApp').factory('Account', ['$resource',
	function($resource){
		return $resource('/accounts/:id.json', {}, {
			query: {method:'GET', isArray:true}
    });
}]);
angular.module('myApp').controller('HomeController', [
    '$scope', 'Account', 
    function initialize ($scope, Account) {
		$scope.accounts = Account.query();
        $scope.photos = [
            {id: 'photo-1', name: 'Kevin Tsai', image: 'http://graph.facebook.com/100000249468276/picture?type=large'},
            {id: 'photo-2', name: 'Great photo', image: 'http://lorempixel.com/450/400/city'},
            {id: 'photo-3', name: 'Strange photo', image: 'http://lorempixel.com/400/300/people'},
            {id: 'photo-4', name: 'A photo?', image: 'http://lorempixel.com/400/300/transport'},
            {id: 'photo-5', name: 'What a photo', image: 'http://lorempixel.com/450/300/fashion'},
            {id: 'photo-6', name: 'Silly photo', image: 'http://lorempixel.com/400/300/technics'},
            {id: 'photo-7', name: 'Weird photo', image: 'http://lorempixel.com/410/350/sports'},
            {id: 'photo-8', name: 'Modern photo', image: 'http://lorempixel.com/400/300/nightlife'},
            {id: 'photo-9', name: 'Classical photo', image: 'http://lorempixel.com/400/300/nature'},
            {id: 'photo-10', name: 'Dynamic photo', image: 'http://lorempixel.com/420/300/abstract'},
            {id: 'photo-11', name: 'Neat photo', image: 'http://lorempixel.com/400/300/sports'},
            {id: 'photo-12', name: 'Bumpy photo', image: 'http://lorempixel.com/400/300/nightlife'},
            {id: 'photo-13', name: 'Brilliant photo', image: 'http://lorempixel.com/400/380/nature'},
            {id: 'photo-14', name: 'Excellent photo', image: 'http://lorempixel.com/480/300/technics'},
            {id: 'photo-15', name: 'Gorgeous photo', image: 'http://lorempixel.com/400/300/sports'},
            {id: 'photo-16', name: 'Lovely photo', image: 'http://lorempixel.com/400/300/nightlife'},
            {id: 'photo-17', name: 'A "wow" photo', image: 'http://lorempixel.com/400/300/nature'},
            {id: 'photo-18', name: 'Bodacious photo', image: 'http://lorempixel.com/400/300/abstract'}
        ];
    }
]);
angular.module('myApp').directive('imageloaded', [
    function () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {   
                var cssClass = attrs.loadedclass;
                element.bind('load', function (e) {
                    angular.element(element).addClass(cssClass);
                });
            }
        }
    }
]);