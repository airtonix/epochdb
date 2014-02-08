# Dayz Epoch Database

This is the development branch of [EpochDB](http://airtonix.github.io/epochdb/), a web-application that provides no nonsense item reference for Dayz Epoch players.

## Contributing

checkout the [guidlines on contributing](http://airtonix.github.io/epochdb/#/contributing) before charging ahead. If in doubt [leave a ticket](https://github.com/airtonix/epochdb/issues) and we'll clear it up.

Main development occurs on the `develop` branch, pull requests submitted to any other branch will be rejected.

## Local Development

* Make sure you have NodeJs, Git installed
* I recommend adding this `~/.bashrc` snippet: [https://gist.github.com/airtonix/8835110](https://gist.github.com/airtonix/8835110)
* clone/fork the repository
* install dependancies:
  * `npm install`
  * `bower install`
* Run the preview server `$ grunt`
* start playing with the code.

## Building

* `$ grunt build`

## Testing before Deployment

* `$ grunt test`

## Deploying

* `$ grunt deploy`

## Created with

* NodeJs
	* [wintersmith](https://github.com/jnordberg/wintersmith)
		* Wintersmith Jade
		* Wintersmith Json
		* Wintersmith Sass
	* Grunt
	* Bower

* AngularJs
	* Angular Route Segment
	* Angular Animate

* RequireJs
* Modernizr
* Lodash
* Sass
	* Zurb Foundation
	* Bourbon