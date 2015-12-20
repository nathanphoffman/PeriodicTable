var React = require('react');

module.exports = React.createClass({

  getInitialState: function(){
    return {clicked: false};
  },

  render: function() {

    var btnClass = "btn btn-default";

    //var left = this.props
    var group = this.props.group;
    var number = this.props.number;
    var period = this.props.period;
    var widthSpace = 4.8;
    var heightSpace = 7;

    var left;

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
    var top = Number(period*heightSpace) + '%';

    var btnStyle = {
      left: left,
      top: top
    };

    return (<button style={btnStyle} type="button" onClick={this.processElement} className={btnClass}>
    	<div className="element-table-number">
    		{this.props.number}
    	</div>
    	<div className="element-table-symbol">
    		<b>{this.props.element}</b>
    	</div>
    	<div className="element-table-mass">
    		{this.props.mass}
    	</div>
    </button>);
  },

  processElement: function()
  {
    this.setState({clicked: true});
  }

});
