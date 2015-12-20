// All transitions are stored here using ReactCSSTransitionGroup Addon, CSS is elsewhere
var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = {
	fadeIn: function(innerElement){
		return(
			<ReactCSSTransitionGroup
			transitionName="transition-fadeIn"
			transitionAppear={true}
			transitionAppearTimeout={500}
			transitionEnterTimeout={500}
			transitionLeaveTimeout={500}>
			{innerElement}
		</ReactCSSTransitionGroup>
		);
	},

	fadeOut: function(innerElement){
		return(<ReactCSSTransitionGroup
			transitionName="transition-fadeOut"
			transitionAppear={true}
			transitionAppearTimeout={4000}
			transitionEnterTimeout={5000}
			transitionLeave={false}>
			{innerElement}
		</ReactCSSTransitionGroup>
		);
	}
}
