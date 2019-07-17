
var React = require('react');
var Button = require('./button.jsx');
var NavbarBottom = require('./navbarBottom.jsx');
var hf= require('./../../helperFunctions.js');

module.exports = React.createClass({

  getInitialState: () => ({type: 'VIEW'}),

  click: function(handler){
    hf.btnHandler(handler,this);
  },

  isActive: function(button){
    if(this.state.type !== undefined && button == this.state.type) return 'active';
    else return '';
  },

  render: function()
  {
    if(this.props.viewbar && this.state.type != 'VIEW') this.setState({type:'VIEW'});
    return(
      <div className="navParent">
        <div onClick={this.click} className="navCenter navTop">
              <Button activeClass={this.isActive('VIEW')} hide={true} name="VIEW" glyph="eye-open" />
                <Button activeClass={this.isActive('SORT')} name="SORT" glyph="resize-vertical" />
                <Button activeClass={this.isActive('COLOR')} name="COLOR" glyph="tint" />
                <Button activeClass={this.isActive('ANALYZE')} name="ANALYZE" glyph="stats" />
              <Button activeClass={this.isActive('ABOUT')} name="ABOUT" glyph="info-sign" />
        </div>
        <NavbarBottom type={this.state.type}></NavbarBottom>
      </div>
    );
  }
});
