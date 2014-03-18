require(['angular'], function(angular){

		angular.module('epochdb.config', [
			'ngAnimate',
			'ngSanitize',
			'angular-google-analytics'
		])
			.config(function('AnalyticsProvider') {
					// initial configuration
					AnalyticsProvider.setAccount('UA-49114426-1');

					// track all routes (or not)
					AnalyticsProvider.trackPages(true);

					//Optional set domain (Use 'none' for testing on localhost)
					AnalyticsProvider.setDomainName('airtonix.github.io');

					// url prefix (default is empty)
					// - for example: when an app doesn't run in the root directory
					AnalyticsProvider.trackPrefix('epochdb');

					// Use analytics.js instead of ga.js
					AnalyticsProvider.useAnalytics(true);

					// Ignore first page view... helpful when using hashes and whenever your bounce rate looks obscenely low.
					AnalyticsProvider.ignoreFirstPageLoad(false);

					//Enabled eCommerce module for analytics.js
					AnalyticsProvider.useECommerce(false);

					//Enable enhanced link attribution
					AnalyticsProvider.useEnhancedLinkAttribution(true);

					//Enable analytics.js experiments
					// AnalyticsProvider.setExperimentId('12345');

					//Set custom cookie parameters for analytics.js
					// AnalyticsProvider.setCookieConfig({
					//   cookieDomain: 'airtonix.github.io',
					//   cookieName: 'myNewName',
					//   cookieExpires: 20000
					// });

					// change page event name
					AnalyticsProvider.setPageEvent('$stateChangeSuccess');
				})

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

})