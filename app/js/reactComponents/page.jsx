var React = require("react");

var PeriodicTable = require("./periodicTable/periodicTable.jsx");
var Navbar = require("./navbar/navbar.jsx");
var Modal = require("./modals/modal.jsx");

var ajax = require("../ajax.js");

module.exports = React.createClass({

  render: function() {
    console.log('rerender!!!!');
    var elements = this.props.elements;
    if(this.state && this.state.route)
    {
      var modules = [];
      var key = 0;
      modules.push(
        <Navbar key={key++} viewbar={this.state.route != "table"}/>
      );

      if(this.state.route == "table")
      {
        console.log(elements);
        modules.push(
          <PeriodicTable
            key={key++}
            parentState={this.state}
            elements={elements}/>
        );
      }

      if(this.state.route == "element")

      modules.push(
        <Modal key={key++} parentState={this.state}></Modal>
      );

      // if we have a state set return the page
      return this.state.length < 1
      ? null
      : (
        <span>
          {modules}
        </span>
      );
    }
    else return (
      <span>Loading...</span>
    );
  }

});
