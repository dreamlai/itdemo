var app = angular.module("userApp", ["ui.router","oc.lazyLoad"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/");
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state("main", {
        url: "",
        templateUrl: "./modules/main.html?ver=1.0.1",
        abstract: true,
        resolve: {
            loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
                return $ocLazyLoad.load([
                    "js/main.js?ver=1.0.1"
                ]);    
            }]
        },
        controller: "main"
    })
    .state("login", {
        url: "/login",
        controller: "login",
        templateUrl: "./modules/login.html?ver=1.0.1",
        resolve: {
            loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
                return $ocLazyLoad.load('js/login_main.js');    
            }]
        },
    })
    .state("main.tips", {
        url: "/",
        templateUrl: "./modules/tips.html?ver=1.0.1"
    })
    .state("main.article", {
        url: "/article/:page/:size",
        params: {
            "page": "1",
            "size": "10"
        },
        templateUrl: "./modules/article.html?ver=1.0.1",
        resolve: {
            loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
                return $ocLazyLoad.load('js/article_main.js?ver=1.0.1');    
            }]
        },
        controller:'mydata'

    })
    .state("main.add", {
<<<<<<< HEAD
        url: "/add?id",
        templateUrl: "./modules/add_article.html?ver=1.0.5",
        resolve: {
            loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
                return $ocLazyLoad.load('js/add_main.js?ver=1.0.5');    
=======
        url: "/add",
        templateUrl: "./modules/add_article.html?ver=1.0.2",
        resolve: {
            loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){    
                return $ocLazyLoad.load('js/add_main.js?ver=1.0.2');    
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
            }]
        },
        controller:'add'
    })
})