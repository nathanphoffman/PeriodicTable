var React = require('react');
var Modal = require('./../modals/modal.jsx');
var elementDisplay = require('./elementDisplay.js');
module.exports = React.createClass({

  render: function() {

  var element = {
      number: this.props.element.AtomicNumber,
      mass: this.props.element.Atomic_Weight,
      period: this.props.element.Period,
      group: this.props.element.Group,
      element: this.props.element.Symbol
    };

    var originalElement = this.props.element;
    var btnClass = "btn btn-default";
    var hexColor = this.props.hexColor || "#fff";

    //var left = this.props
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    var btnStyle = {};
    var mass = "";

    // We must make the text color different than background, we take 125 as the midpoint
    //  to determine if it is dark or light
    var text = hexColor > 125 ? 50 : 210;

    // This controls the responsiveness of the elements/table
    if(this.state && this.state.iconView) {
      btnStyle.width = "50";
      btnStyle.height = "50";
      btnStyle.position = "relative";
      btnStyle.margin = "3";
    }
    else if(height > 800 && width >= 1800)
    {
      //console.log(1800);
      btnStyle = elementDisplay.getExtendedPosition(element,2.7,6.5);
      var rounded = Math.round(element.mass*100)/100;
      mass = !isNaN(rounded) ? rounded : '-';
    }
    else if(height > 800 && width >= 1200)
    {
      btnStyle = elementDisplay.getStandardPosition(element,4.5,6.5);
      var rounded = Math.round(element.mass*100)/100;
      mass = !isNaN(rounded) ? rounded : '-';
    }
    else if(width >= 768) {
      btnStyle = elementDisplay.getStandardPosition(element,4.5,5);
    }

    btnStyle.backgroundColor = 'rgb(' + hexColor + ',' + hexColor + ',' + hexColor + ')';
    btnStyle.color = 'rgb(' + text + ',' + text + ',' + text + ')';

    var elementModal = "";

    return (<button style={btnStyle} type="button" onClick={function(){
      // We have to return the function containing the element so it does not change as new elements are set
      var elem = element.element;
      return function(){
        window.location.href = "#element/" + elem;
      };
    }()} className={btnClass}>
      <div className="element-table-number">
        {element.number}
      </div>
      <div className="element-table-symbol">
        <b>{element.element}</b>
      </div>
      <div className="element-table-mass">
        {mass}
      </div>
    </button>);

  }

});
