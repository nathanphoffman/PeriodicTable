var React = require('react');
var Element = require('./element.jsx');

var transitions = require('./../general/transitions.jsx');
var data = require("../../data.js");
var color = require('./actions/color.js');

var $ = require('jquery');
var hf = require('./../../helperFunctions.js');

module.exports = React.createClass({

	componentDidMount: function(){
		// on resize the table's display format may change, this will re-render the table if needed
	  $(window).resize(hf.debounce(function(){
			this.forceUpdate();
		}.bind(this),25,true));
	},

	componentWillUnmount: function(){
		$(window).off("resize");
	},

	render: function(){

		var cells = [];
		var elements = this.props.elements;
		console.log(elements);
		// This is to save resources and perform loops before individual elements are created
		var config = color.prepare(elements);

		var key = 0;
		console.log(elements);
		elements.forEach(function(element){

			console.log(element.Name);
			// Make sure it is a valid element, all emenets must have names this also eliminates csv dups
			if(element.Name != "")
			{
				key++;
				cells.push(
					<Element
						key={key}
						element={element}
						hexColor={color.getColor(element,config)}
						/>
				);
			}
		});

		return transitions.fadeIn(
			<span>
				<div onClick={function(){
						this.setState({bah: true})
					}.bind(this)}>
					{cells}
				</div>
			</span>
		);
}

});
