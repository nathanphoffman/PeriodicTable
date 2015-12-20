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
      var glyphClass = "glyphicon glyphicon-" + this.props.glyph;
      var textClass = "hidden-xs navText";

    return (
      <li className={clickClass}>
        <a onClick={this.click} href="#">
          <span className={glyphClass} aria-hidden="true"></span>
          <span className={textClass}>{this.props.name}</span>
        </a >
      </li>
    );
  },

  componentDidMount: function() {
    this.uniqueId = gs.register(this, ['button']);
  },

	componentWillUnmount: function(){
		gs.unregister(this.uniqueId);
	}

});
