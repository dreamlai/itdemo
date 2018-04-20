var app = angular.module("userApp", ["ui.router","oc.lazyLoad"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/");
    $stateProvider
    .state("main", {
        url: "/",
        templateUrl: "./modules/main.html?ver=2.0"
    })
    .state("article", {
        url: "/article/:page/:size",
        params: {
            "page": "1",
            "size": "10"
        },
        templateUrl: "./modules/article.html?ver=12.0",
        resolve: {
            loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
                return $ocLazyLoad.load('js/article_main.js?ver=12.0');    
            }]
        },
        controller:'mydata'

    })
    .state("add", {
        url: "/add",
        templateUrl: "./modules/add_article.html?ver=18.0",
        resolve: {
            loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
                return $ocLazyLoad.load('js/add_main.js?ver=18.0');    
            }]
        },
        controller:'add'
    })
})

