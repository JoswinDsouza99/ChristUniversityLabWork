angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var news=[
        {Category:'Movies',Headlines:"Tenet: Christopher Nolan promises another mind-boggling experience",Date:new Date("2020-11-30")},
        {Category:'Sports',Headlines:"F1 set for high-speed race, days after fireball and without Hamilton",Date:new Date("2020-12-03")},
        {Category:'Money',Headlines:"Burger King IPO Attracts More Than Three Time Bids on Day 1",Date:new Date("2020-12-02")},
        {Category:'LifeStyle',Headlines:"Explore the world’s oldest living culture through Australia’s Aboriginal adventures",Date:new Date("2020-11-30")}
    ];
    console.log(news);
    $scope.news=news;
    $scope.rowlimit=4;
});