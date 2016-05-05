angular.module('resumeExample').controller("workCtrl", function($scope,$rootScope, $http, $modal) {
  $http.get('data1/resume.json').
    success(function(data, status, headers, config) {
        $scope.projectDetails = data;
        console.log(data);
    }).
    error(function(data, status, headers, config) {
        console.log(status);
    });
    $scope.popup = function(indx){
        console.log(typeof(indx))
        $scope.selectedProject =indx;
        console.log($scope.selectedProject)
        if(indx%2==0){
            $scope.selectedPopup = 'type1'
            console.log('type1')
        }else{
            $scope.selectedPopup = 'type2'
            console.log('type')
        }
    }
})
.directive('outerWheel', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.replace = 'true';
    directive.template = "<div id='outerWheel'>\n"+
        "<span class='section1'>HTML</span>\n"+
        "<span class='section2'><span class='circleLeft'>Jquery</span><span class='circleRight'>CSS</span></span>\n"+
        "<span class='section3'>Javascript</span>\n"+
        "<div id='borderWheel'>\n"+
        "   <img src='images/aw-logo.png' class='logo' width='80'>\n"+
        "</div>\n"+
    "</div>";
    return directive;
})
.directive('joint', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.replace = 'true';
    directive.template = "<span class='joint'>\n"+
        "<span class='leftCircle'></span>\n"+
        "<span class='jointLine'></span>\n"+
        "<span class='RightCircle'></span>\n"+
        "</span>"+
    "</div>";
    return directive;
})
.directive('projectDetailsPopup', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.replace = 'true';
    directive.templateUrl = "views/popup.html";
    return directive;
})
//define service
.service('setGet', function() {
   var Details='';
     this.set = function (index) {
      Details= index;
    },

    this.get = function () {
        return Details;
    }
})
