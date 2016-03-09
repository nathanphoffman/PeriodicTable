var React = require('react');
var ModalElement = require('./element.jsx');
var ModalVideos = require('./videos.jsx');
var Links = require('./links.jsx');
var gs = require('./../globalState.js');

module.exports = React.createClass({

  render: function() {

    // state will be returned when the element is loaded
    if (!(this.props && this.props.element))
    {return (<span></span>);}
    else {
      var element = this.props.element;
      var title = 'Element: ' + element.Name;
      return (
              <div>
              <h3>{title}</h3>
              <ModalElement element={element}></ModalElement>
              <Links element={element}></Links>
              <ModalVideos element={element}></ModalVideos>
              </div>

      );
    }
  }
});
