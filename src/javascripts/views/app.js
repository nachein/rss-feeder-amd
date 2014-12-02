var Backbone = require('Backbone');

module.exports = Backbone.View.extend({
	tagName: 'div',
	el: '#todo-app',
	template: 'application',
	initialize: function(){
        this.render();
      },
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});