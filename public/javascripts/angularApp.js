/**
 * Created by Sifryd on 29/11/2015.
 */
var app = angular.module('noStressWebsite', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.posts = [
            {title:"post1", upvotes:5},
            {title:"post2", upvotes:12},
            {title:"post3", upvotes:2},
            {title:"post4", upvotes:7},
            {title:"post5", upvotes:10}
        ];
    }]);