var React = require('react');
var gs = require('./../globalState.js');
var Modal = require('./../modals/modal.jsx');

var element = {};

module.exports = React.createClass({

  render: function() {

  element = {
      number: this.props.element.AtomicNumber,
      mass: this.props.element.Atomic_Weight,
      period: this.props.element.Period,
      group: this.props.element.Group,
      element: this.props.element.Symbol
    };

    var originalElement = this.props.element;

    //console.log(this.props.element);

    var btnClass = "btn btn-default";
    var hexColor = this.props.hexColor || "#fff";

    //var left = this.props
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

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
    else if(width >= 1800)
    {
      //console.log(1800);
      btnStyle = this.extendedTable(2.7,6.5);
      var rounded = Math.round(element.mass*100)/100;
      mass = !isNaN(rounded) ? rounded : '-';
    }
    else if(width >= 1200)
    {
      btnStyle = this.standardTable(4.5,6.5);
      var rounded = Math.round(element.mass*100)/100;
      mass = !isNaN(rounded) ? rounded : '-';
    }
    else if(width >= 768) {
      btnStyle = this.standardTable(4.5,5);
    }


    btnStyle.backgroundColor = 'rgb(' + hexColor + ',' + hexColor + ',' + hexColor + ')';
    btnStyle.color = 'rgb(' + text + ',' + text + ',' + text + ')';

    var elementModal = "";


    return (<button style={btnStyle} type="button" onClick={processElement.bind(originalElement)} className={btnClass}>
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

  },


  extendedTable: function(width,height)
  {
    var left;

    var widthSpace = Math.ceil(width*1.1);
    var heightSpace = Math.ceil(height*1.1);

    var group = element.group;
    var number = Number(element.number);
    var period = element.period;

    if(group != "null")
      {
        if(group > 2)
        {
          group = Number(group) + 14;
        }
        left = Number(Number(group)*widthSpace) + '%';
      }
      else {

        if(number < 89)
        {
          left = Number((3+(number-57))*widthSpace) + '%';
        }
        else {
          left = Number((3+(number-89))*widthSpace) + '%';
        }
      }
      var top = Number(period*heightSpace + 6) + '%';

      return {
        left: left,
        top: top,
        width: width + "%",
        height: height + "%",
        position: "absolute"
      };

  },

  standardTable: function(width, height)
  {
    var left;

    var widthSpace = Math.ceil(width*1.1);
    var heightSpace = Math.ceil(height*1.1);

    var group = element.group;
    var number = element.number;
    var period = element.period;

    if(group != "null")
      {
        left = Number(group*widthSpace) + '%';
      }
      else {
        if(number < 89)
        {
          left = Number((3+(number-57))*widthSpace) + '%';
          period = Number(period) + 2.5;
        }
        else {
          left = Number((3+(number-89))*widthSpace) + '%';
          period = Number(period) + 2.5;
        }
      }
      var top = Number(period*heightSpace + 6) + '%';

      return {
        left: left,
        top: top,
        width: width + "%",
        height: height + "%",
        position: "absolute"
      };

  },
    componentDidMount: function() {
      this.uniqueId = gs.register(this, ['element','resize']);
    },

  	componentWillUnmount: function(){
  		gs.unregister(this.uniqueId);
  	}

});

function processElement()
{
  var page = gs.getTopMember('page');
  page.state.displayElement = this;
  page.reference.setState(page.state);
}
