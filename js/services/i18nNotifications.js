;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('services.i18nNotifications', [
  'services.notifications',
  'services.localisedMessages'
  ])

  .factory('i18nNotifications', [
    'localisedMessages',
    'notifications',
    function (localisedMessages, notifications) {

      var prepareNotification = function(msgKey, type, interpolateParams, otherProperties) {
         return angular.extend({
           message: localisedMessages.get(msgKey, interpolateParams),
           type: type
         }, otherProperties);
      };

      var I18nNotifications = {
        pushSticky:function (msgKey, type, interpolateParams, otherProperties) {
          return notifications.pushSticky(prepareNotification(msgKey, type, interpolateParams, otherProperties));
        },
        pushForCurrentRoute:function (msgKey, type, interpolateParams, otherProperties) {
          return notifications.pushForCurrentRoute(prepareNotification(msgKey, type, interpolateParams, otherProperties));
        },
        pushForNextRoute:function (msgKey, type, interpolateParams, otherProperties) {
          return notifications.pushForNextRoute(prepareNotification(msgKey, type, interpolateParams, otherProperties));
        },
        getCurrent:function () {
          return notifications.getCurrent();
        },
        remove:function (notification) {
          return notifications.remove(notification);
        }
      };

      return I18nNotifications;
    }]);
},{}]},{},[1])
;