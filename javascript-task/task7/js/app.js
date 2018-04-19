var app = angular.module("userApp", ["ui.router","oc.lazyLoad"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/");
    $stateProvider
    .state("main", {
        url: "/",
        templateUrl: "./modules/main.html"
    })
    .state("article", {
        url: "/article/:page/:size",
        params: {
            "page": "1",
            "size": "10"
        },
        templateUrl: "./modules/article.html?7",
        resolve: {
            loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
                return $ocLazyLoad.load('js/article_main.js?5');    
            }]
        },
        controller:'mydata'

    })
    .state("add", {
        url: "/add",
        templateUrl: "./modules/add_article.html"
    })
})

