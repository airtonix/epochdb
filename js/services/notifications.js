;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('services.notifications', [])
	.factory('notifications', [
		'$rootScope',
		function ($rootScope) {

			var notifications = {
				'STICKY' : [],
				'ROUTE_CURRENT' : [],
				'ROUTE_NEXT' : []
			};
			var notificationsService = {};

			var addNotification = function (notificationsArray, notificationObj) {
				if (!angular.isObject(notificationObj)) {
					throw new Error("Only object can be added to the notification service");
				}
				notificationsArray.push(notificationObj);
				return notificationObj;
			};

			$rootScope.$on('$routeChangeSuccess', function () {
				notifications.ROUTE_CURRENT.length = 0;

				notifications.ROUTE_CURRENT = angular.copy(notifications.ROUTE_NEXT);
				notifications.ROUTE_NEXT.length = 0;
			});

			notificationsService.getCurrent = function(){
				return [].concat(notifications.STICKY, notifications.ROUTE_CURRENT);
			};

			notificationsService.pushSticky = function(notification) {
				return addNotification(notifications.STICKY, notification);
			};

			notificationsService.pushForCurrentRoute = function(notification) {
				return addNotification(notifications.ROUTE_CURRENT, notification);
			};

			notificationsService.pushForNextRoute = function(notification) {
				return addNotification(notifications.ROUTE_NEXT, notification);
			};

			notificationsService.remove = function(notification){
				angular.forEach(notifications, function (notificationsByType) {
					var idx = notificationsByType.indexOf(notification);
					if (idx>-1){
						notificationsByType.splice(idx,1);
					}
				});
			};

			notificationsService.removeAll = function(){
				angular.forEach(notifications, function (notificationsByType) {
					notificationsByType.length = 0;
				});
			};

			return notificationsService;
		}]);
},{}]},{},[1])
;