
var TweetView = Backbone.View.extend({
	tagName: "li",

	className: "tweet",

	initialize: function () {
		this.model.on("change", this.render, this);
	},

	events: {
		"click #delete": "onClickDelete",
		"click #expand": "onClickExpand"
	},

	onClickDelete: function () {
		if (confirm("Are you sure?"))
			this.model.destroy();
	},

	onClickExpand: function () {
		var self = this;
		this.model.fetch({
			success: function () {
				self.$el.append("<div class='details'>" + self.model.get("retweets") + " retweets</details>");
			},

			error: function () {
				console.log("Error")
			}
		});
	},

	render: function () {
		this.$el.html("<div class='tweet'>" + this.model.get("body") + " <button id='expand'></button><button id='delete'></button></div>");

		return this;
	}
});