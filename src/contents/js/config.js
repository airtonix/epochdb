require(['angular'], function(angular){

        angular.module('epochdb.config', [
                'ngAnimate',
                'ngSanitize',
                'angular-google-analytics'
            ])

            .constant('Assets', (function ($window){
                    var service = {
                        paths: _.extend({
                                template: null,
                                static: null,
                                api: null
                            }, $window.assetUrls),
                        template: function (path){ return service.paths.template+path },
                        static: function (path){ return service.paths.static+path },
                        api: function (path){ return service.paths.api+path }
                    }
                    return service;
                })(window))

            .config(['AnalyticsProvider', function(AnalyticsProvider){
                                AnalyticsProvider.setAccount('UA-49114426-1');
                                AnalyticsProvider.trackPages(true);
                                AnalyticsProvider.setDomainName('airtonix.github.io');
                                AnalyticsProvider.trackPrefix('epochdb');
                                AnalyticsProvider.useAnalytics(true);
                                AnalyticsProvider.ignoreFirstPageLoad(false);
                                AnalyticsProvider.useECommerce(false);
                                AnalyticsProvider.useEnhancedLinkAttribution(false);
                                AnalyticsProvider.setPageEvent('$routeChangeSuccess');
                            }])

})