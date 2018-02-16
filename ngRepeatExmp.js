var app=angular.module('myApp',[]);
app.controller('myController',function($scope){
    $scope.employees = [{firstName:'Bhagvat',LastName:'Bhosle'},
    {firstName:'Pandurang',LastName:'Bhosle'},
    {firstName:'Rajguru',LastName:'Gaddamwar'},
    {firstName:'Uddhav',LastName:'Bhosle'}
    ];
});