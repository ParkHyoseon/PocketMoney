// view/indexView
define(
	[
		'backbone',
	], function(
		Backbone
	){
		var indexView =  Backbone.View.extend({
			el: 'div.container',

			render: function() {
				this.$el.html('<p>test</p>');
			}
		});

		return new indexView;
});