var React = require("react");

var PeriodicTable = require("./periodicTable/periodicTable.jsx");
var Navbar = require("./navbar/navbar.jsx");
var Modal = require("./modals/modal.jsx");

var ajax = require("../ajax.js");
var csvToJson = require("../csvToJson.js");
var gs = require('./globalState.js');

//var N = require("./registry.js").getComponent('navbar');
//var P = require("./registry.js").getComponent('periodicTable');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      length: 0,
      displayElement: null
    }
  },

/*
if(this.state.clicked)
{
  //console.log('click');
  elementModal = <Modal element={this.props.element}></Modal>
}

*/

  render: function() {

    var modules = [], key = 0;

    modules.push(<Navbar key={key++}/>);
    modules.push(<PeriodicTable key={key++} elements={this.state.data}/>);

    if(this.state.displayElement != null)
    {
      modules.push(<Modal key={key++} element={this.state.displayElement}></Modal>);
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

    ajax.get('/elements.csv', function(csv) {
      var data = csvToJson.CSV2OBJ(csv);
      //console.log(data);
      this.setState({data: data, length: data.length});
    }.bind(this),3);

  },

  componentWillUnmount: function(){
    gs.unregister(this.uniqueId);
  }

});
