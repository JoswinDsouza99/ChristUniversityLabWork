angular.module('myapp',[])
.controller('myctrl', function($scope)
{
    $scope.listProducts=[
            {id:'p01', name:'computer', price:45000,quantitiy:240},
            {id:'p02', name:'mobile', price:20000,quantitiy:500},
            {id:'p03', name:'television', price:60000,quantitiy:350},
            {id:'p04', name:'laptop', price:95000,quantitiy:100}
    ];
});