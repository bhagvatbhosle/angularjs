var app=angular.module("myApp",[]);

app.controller("myController",function($scope){
    
    $scope.student={
        firstName:"Bhagvat",
        lastName:"Bhosle",
        rollNo:1500,
        class:"9th",

        subjects:[
            {name:'Marathi',marks:85},
            {name:'Hindi',marks:70},
            {name:'English',marks:75},
            {name:'Mathematics',marks:92},
            {name:'Science',marks:49}
        ],

        fullanme:function(){
            var studenFullName=$scope.student;
            return studenFullName.firstName + " " + studenFullName.lastName;
        }
    };

});