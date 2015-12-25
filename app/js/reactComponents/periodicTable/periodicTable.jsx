var Element = require('./element.jsx');
var transitions = require('./../general/transitions.jsx');
var React = require('react');
var gs = require('./../globalState.js');

var color = require('./actions/color.js');

module.exports = React.createClass({


	componentDidMount: function() {
		this.uniqueId = gs.register(this, ['table']);
	},

	componentWillUnmount: function(){
		gs.unregister(this.uniqueId);
	},

	getInitialState: function(){
		return {};
	},

		render: function(){

		var elements = this.props.elements;
		var cells = [];

		// This is to save resources and perform loops before individual elements are created
		var config = color.prepare(elements);

		var key = 0;
		elements.forEach(function(element){
			key++;
			cells.push(<Element test={Math.random()}
			element={element.Symbol}
			key={key}
			number={element.AtomicNumber}
			mass={element.Atomic_Weight}
			period={element.Period}
			group={element.Group}
			hexColor={color.getColor(element,config)}
			/>);

	});

	return transitions.fadeIn(<div onClick={function(){
		this.setState({bah: true})
	}.bind(this)}>{cells}</div>);


/*

		var cells = [];
		var key = 0;
		var maxRowCount = hf.containsProperty(elements,"Period").absMax;

		for(var i = 0; i <= maxRowCount; i++)
		{
			var rowElements = hf.containsProperty(this.props.elements,"Period",i);
			var maxColumns = hf.containsProperty(rowElements.arr,"Group").absMax;

			for(var j = 0; j <= maxColumns; j++)
			{
				var colElements = hf.containsProperty(rowElements.arr,"Group",j);

				if(colElements.arr.length > 1)
				{
					throw "ERROR: Periodic table has multiple elements specified for the same row and column.";
				}
				else if(colElements.arr.length === 0)
				{
					cells.push(<span className="element-placeholder"></span>)
				}
				else
				{
					var element = colElements.arr[0];
					var key = key+1;
					cells.push(<Element test={Math.random()}
					element={element.Symbol}
					key={key}
					number={element.AtomicNumber}
					mass={element.Atomic_Weight}
					/>);
				}
			}
			cells.push(<br/>);

		}
		console.log(cells);
		return transitions.fadeIn(<div onClick={function(){ this.setState({bah: true}) }.bind(this)}>{cells}</div>);
*/
		}

	});
