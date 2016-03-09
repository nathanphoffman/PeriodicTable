var React = require("react");

var PeriodicTable = require("./periodicTable/periodicTable.jsx");
var Navbar = require("./navbar/navbar.jsx");
var Modal = require("./modals/modal.jsx");

var ajax = require("../ajax.js");
var gs = require('./globalState.js');

var data = require("../data.js");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      length: 0,
      displayElement: null
    }
  },

  render: function() {

    var modules = [], key = 0;

    modules.push(<Navbar key={key++}/>);

    if(this.state.route && this.state.route == "table")
    {
      modules.push(<PeriodicTable key={key++} elements={this.state.data}/>);
    }

    if(this.state.route && this.state.route == "element")
    {
      modules.push(<Modal key={key++} element={this.state.element}></Modal>);
    }

    var cell = this.state.length < 1
      ? null
      : (
        <span>
          {modules}
        </span>
      );

    return cell;
  },

  componentDidMount: function() {
    this.uniqueId = gs.register(this, ['page']);

    var elements = data.getAllElements(function(elements){
      this.setState({data: elements, length: elements.length});
    }.bind(this));
  },

  componentWillUnmount: function(){
    gs.unregister(this.uniqueId);
  }

});
