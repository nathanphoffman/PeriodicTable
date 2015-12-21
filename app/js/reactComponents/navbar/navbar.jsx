
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
      <div onClick={this.click} className="navParent">
        <div className="navCenter navTop">
              <Button hide={true} events={this.events} name="VIEW" glyph="eye-open" />
              <Button events={this.events} name="SORT" glyph="resize-vertical" />
              <Button events={this.events} name="COLOR" glyph="tint" />
              <Button events={this.events} name="ANALYZE" glyph="stats" />
              <Button events={this.events} name="ABOUT" glyph="info-sign" />
        </div>
        <div id="periodicTable" className="navCenter navBottom">
              <Button events={this.events} name="DENSITY" glyph="" type="sub" />
              <Button events={this.events} name="MELTING" glyph="" type="sub"/>
              <Button events={this.events} name="BOILING" glyph="" type="sub"/>
              <Button events={this.events} name="FREEZING" glyph="" type="sub"/>
              <Button events={this.events} name="IONICRADIUS" glyph="" type="sub"/>
              <Button events={this.events} name="ATOMICRADIUS" glyph="" type="sub"/>
              <Button events={this.events} name="COVALENTRADIUS" glyph="" type="sub"/>
              <Button events={this.events} name="SPECIFICHEAT" glyph="" type="sub"/>
              <Button events={this.events} name="SPECIFICVOLUME" glyph="" type="sub"/>
        </div>
      </div>
    );
  }
});
