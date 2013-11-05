/************

requirejs.config({
	path : ...
});

***********/

define(['router'], function(Router){
	return {
		launch: function() {
			//애플리케이션 시작점
			console.log("start");
		}
	}
});