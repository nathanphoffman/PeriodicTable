
var React = require('react');
var Button = require('./button.jsx');
var gs = require('./../globalState.js');
//var registry = require('./../registry.js');
//var Button = require("./../registry_data.js");
//var Button = registry.getComponent('navbar','Button');

console.log(Button);

module.exports = React.createClass({

events: {
  self: this,
  linkClick: function(state){
    self.state();
  }},

  render: function()
  {
    return(
      <nav onClick={this.click} className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div>
            <ul className="nav navbar-nav">
              <Button events={this.events} name="Periodic Table" glyph="list-alt" />
              <Button events={this.events} name="Icons" glyph="th-large" />
              <Button events={this.events} name="Compare" glyph="resize-horizontal" />
              <Button events={this.events} name="About" glyph="info-sign" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
