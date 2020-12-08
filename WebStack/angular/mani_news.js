angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listNews=[
        {id:'n01',Category:'Movies',Headlines:"Tenet: Christopher Nolan promises another mind-boggling experience",Date:new Date("2020-11-30")},
        {id:'n02',Category:'Sports',Headlines:"F1 set for high-speed race, days after fireball and without Hamilton",Date:new Date("2020-12-03")},
        {id:'n03',Category:'Money',Headlines:"Burger King IPO Attracts More Than Three Time Bids on Day 1",Date:new Date("2020-12-02")},
        {id:'n04',Category:'LifeStyle',Headlines:"Explore the world’s oldest living culture through Australia’s Aboriginal adventures",Date:new Date("2020-11-30")}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listNews[index].Category=$scope.Category;
        $scope.listNews[index].Headlines=$scope.Headlines;
        $scope.listNews[index].Date=$scope.Date;
    }
    $scope.add=function()
    {
        $scope.listNews.push({
            id:$scope.id,Category:$scope.Category,Headlines:$scope.Headlines,Date:$scope.Date
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listNews.length;i++)
        if($scope.listNews[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var news=$scope.listNews[index];
        $scope.id=news.id;
        $scope.Category=news.Category;
        $scope.Headlines=news.Headlines;
        $scope.Date=news.Date;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listNews.splice(index,1);
        }
    };
});