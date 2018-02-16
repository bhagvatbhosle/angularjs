var app=angular.module('myApp',[]);
app.controller('myController',function($scope){
   $scope.students={
    firstName: 'Bhagvat',
    lastName: 'Bhosle',
    fees:400,
    
    subjects:[
        {name:'Physics',marks:70},
        {name:'Chemistry',marks:80},
        {name:'Math',marks:65}
     ],
    
     fullName:function(){
       var name=$scope.students;
    return name.firstName+" "+name.lastName;
   }
};
});