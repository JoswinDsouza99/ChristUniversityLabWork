angular.module("myapp", ['ngRoute'])
         .config(function($routeProvider) {
            $routeProvider.when('/', {
               templateUrl: '/post.html'
            }).when('/one', {
               templateUrl: '/post1.html',
               controller:'onectrl'
            }).when('/one/:first/:last', {
               templateUrl: '/post.html',
               controller:'onectrl'
             }).when('/two', {
                  templateUrl: '/post.html'
            });
         })
         .controller('mainController',function($scope){
            $scope.titles="Home Page"

         })