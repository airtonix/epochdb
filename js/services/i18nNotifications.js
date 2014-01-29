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