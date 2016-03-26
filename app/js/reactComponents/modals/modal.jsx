var React = require('react');
var ModalElement = require('./element.jsx');
var ModalVideos = require('./videos.jsx');
var Links = require('./links.jsx');

module.exports = React.createClass({

  render: function() {

    // state will be returned when the element is loaded
    if (!(this.props && this.props.parentState && this.props.parentState.element))
    {return (<span></span>);}
    else {
      var element = this.props.parentState.element;
      var title = 'Element: ' + element.Name;
      return (
              <div>
              <h3>{title}</h3>
              <ModalElement element={element}></ModalElement>
              <ModalVideos element={element}></ModalVideos>
              <Links element={element} wiki={this.props.parentState.api.wiki}></Links>
              </div>

      );
    }
  }
});
