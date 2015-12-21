var React = require('react');
var gs = require('./../globalState.js');

module.exports = React.createClass({

  getInitialState: function() {
    return {clicked: false};
  },

  click: function() {
    gs.eachComponent({group: 'button', ignoreId: this.uniqueId},
		function(component) {
      component.reference.setState({clicked: false});
    });

		this.setState({clicked: true});
  },

  render: function() {
    var clickClass = this.state.clicked
      ? "active"
      : "";

      if(this.props.glyph)
      {
      var glyphClass = "glyphicon glyphicon-" + this.props.glyph;
    }
    else {
      var glyphClass = "";
    }

    var textClass = "navText";

    if(!this.props.type && this.props.type != 'sub')
    {
      textClass += " hidden-xs";
    }

      var classNames = "btnTop";

      if(this.props.hide)
      {
        classNames += " hidden-xs";
      }

    return (
        <a onClick={this.click} href="#" className={classNames}>
          <span className={glyphClass} aria-hidden="true"></span>
          <span className={textClass}>{this.props.name}</span>
        </a >
    );
  },

  componentDidMount: function() {
    this.uniqueId = gs.register(this, ['button']);
  },

	componentWillUnmount: function(){
		gs.unregister(this.uniqueId);
	}

});
