
  var resumeExample = angular.module('resumeExample', ["ui.router", "ngAnimate", 'ui.bootstrap'])
    resumeExample.config(function($stateProvider, $urlRouterProvider){    
      $stateProvider
          .state("about", {
              url: "/about",
              templateUrl: 'views/about.html'
          })
          .state("skills", {
              url: "/skills",
              templateUrl: 'views/skills.html',
              controller: 'skillCtrl'
          })
          .state("work", {
              url: "/work",
              templateUrl: 'views/work.html',
              controller: 'workCtrl'
          })
          .state("contact", {
              url: "/contact",
              templateUrl: 'views/contact.html'
          })
           $urlRouterProvider.otherwise("/about");
    })
    .run(function($rootScope, $animate) {
      $rootScope.pageanimate = true;
      $rootScope.toggleAnimate = function () {
        if ($rootScope.pageanimate === true) {
            $rootScope.pageanimate = false;
            $animate.enabled(false);
        } else {
            $rootScope.pageanimate = true;
            $animate.enabled(true);
        }
      }
      $rootScope.itemClicked = function(item){
        console.log(item)
        $rootScope.selectedIndex = item
      }
      
    });
    