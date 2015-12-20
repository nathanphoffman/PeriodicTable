var React = require("react");
var PeriodicTable = require("./periodicTable/periodicTable.jsx");
var Navbar = require("./navbar/navbar.jsx");
var ajax = require("../ajax.js");

//var N = require("./registry.js").getComponent('navbar');
//var P = require("./registry.js").getComponent('periodicTable');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      length: 0
    }
  },

  render: function() {

    var cell = this.state.length < 1
      ? null
      : (
        <span>
          <Navbar/>
          <PeriodicTable elements={this.state.data}/>
        </span>
      );

    return cell;
  },

  componentDidMount: function() {
    ajax.get('/app/data/elements.json', function(data) {
      this.setState({data: data, length: data.length});
    }.bind(this), 3);
  }
});
