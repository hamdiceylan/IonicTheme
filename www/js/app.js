// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.liveScore', {
    url: '/liveScore',
    views: {
      'menuContent': {
        templateUrl: 'templates/liveScore.html'
      }
    }
  })
  .state('app.finishedGames', {
    url: '/finishedGames',
    views: {
      'menuContent': {
        templateUrl: 'templates/finishedGames.html'
      }
    }
  })
  .state('app.betList', {
    url: '/betList',
    views: {
      'menuContent': {
        templateUrl: 'templates/betList.html'
      }
    }
  })
  .state('app.coupons', {
    url: '/coupons',
    views: {
      'menuContent': {
        templateUrl: 'templates/coupons.html'
      }
    }
  })
  .state('app.bettingForecast', {
    url: '/bettingForecast',
    views: {
      'menuContent': {
        templateUrl: 'templates/bettingForecast.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/liveScore');
});
