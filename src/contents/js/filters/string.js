angular.module('epochdb.filters.string', [])

	.filter("lower", function(){
		return function(value){
			return value.lower();
		}
	})
	
	.filter("length", function(){
		return function(value){
			if(value) return value.length;
			return value;
		}
	})