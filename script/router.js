define(['backbone'], function(Backbone){
	var MainRouter = Backbone.Router.extend({
		routes: {
			'': 'index'
		},

		initialize: function() {

		},

		index: function() {
			require(['view/indexView'], function(IndexView){
				
			});
		}
	});

	new MainRouter();
	
	Backbone.history.start();
});