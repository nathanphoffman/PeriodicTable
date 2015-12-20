var Element = require('./element.jsx');
var hf= require('./../../helperFunctions.js');
var transitions = require('./../general/transitions.jsx');
var React = require('react');

module.exports = React.createClass({

		render: function(){

		var elements = this.props.elements;

		console.log(elements);
		var cells = [];

		elements.forEach(function(element){

			cells.push(<Element test={Math.random()}
			element={element.Symbol}
			key={element.AtomicNumber}
			number={element.AtomicNumber}
			mass={element.Atomic_Weight}
			period={element.Period}
			group={element.Group}
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
