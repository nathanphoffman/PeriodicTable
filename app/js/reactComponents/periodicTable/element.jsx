var React = require('react');
var gs = require('./../globalState.js');

module.exports = React.createClass({

  getInitialState: function(){
    return {clicked: false};
  },

  render: function() {

    var btnClass = "btn btn-default";
    var hexColor = this.props.hexColor || "#fff";

    console.log(hexColor);

    //var left = this.props
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var btnStyle = {};
    var mass = "";
    var text = hexColor > 125 ? 50 : 210;

    if(width >= 1800 && !this.state.iconView)
    {
      btnStyle = this.extendedTable(2.7,6.5);
      var rounded = Math.round(this.props.mass*100)/100;
      mass = !isNaN(rounded) ? rounded : '-';
    }
    else if(width >= 1200 && !this.state.iconView)
    {
      btnStyle = this.standardTable(4.5,6.5);
      var rounded = Math.round(this.props.mass*100)/100;
      mass = !isNaN(rounded) ? rounded : '-';
    }
    else if(width >= 768 && !this.state.iconView) {
      btnStyle = this.standardTable(4.5,5);
    }
    else {
      btnStyle.width = "50";
      btnStyle.height = "50";
      btnStyle.position = "relative";
      btnStyle.margin = "3";

    }

    btnStyle.backgroundColor = 'rgb(' + hexColor + ',' + hexColor + ',' + hexColor + ')';
    btnStyle.color = 'rgb(' + text + ',' + text + ',' + text + ')';

    return (<button style={btnStyle} type="button" onClick={this.processElement} className={btnClass}>
      <div className="element-table-number">
        {this.props.number}
      </div>
      <div className="element-table-symbol">
        <b>{this.props.element}</b>
      </div>
      <div className="element-table-mass">
        {mass}
      </div>
    </button>);

  },

  processElement: function()
  {
    this.setState({clicked: true});
  },

  extendedTable: function(width,height)
  {
    var left;

    var widthSpace = width*1.1;
    var heightSpace = height*1.1;

    var group = this.props.group;
    var number = this.props.number;
    var period = this.props.period;

    if(group != "null")
      {
        if(group > 2)
        {
          group += 14;
        }
        left = Number(group*widthSpace) + '%';
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

    var group = this.props.group;
    var number = this.props.number;
    var period = this.props.period;

    if(group != "null")
      {
        left = Number(group*widthSpace) + '%';
      }
      else {
        if(number < 89)
        {
          left = Number((3+(number-57))*widthSpace) + '%';
          period += 2.5;
        }
        else {
          left = Number((3+(number-89))*widthSpace) + '%';
          period += 2.5;
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
