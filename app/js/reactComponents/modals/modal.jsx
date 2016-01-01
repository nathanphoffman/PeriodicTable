var React = require('react');
var ModalElement = require('./element.jsx');
var ModalVideos = require('./videos.jsx');
var Links = require('./links.jsx');
var gs = require('./../globalState.js');

module.exports = React.createClass({

  getInitialState: function(){
    return {hide: false};
  },

  close: function() {
    var page = gs.getTopMember('page');
    page.state.displayElement = null;
    page.reference.setState(page.state);
  },

  render: function() {
    //console.log('render');
    //console.log(this.state.hide);
    var element = this.props.element;
    console.log(element);
    var title = 'Element: ' + element.Name;

    if (this.state && this.state.hide)
    {return (<span></span>);}
    else {return (
        <div className="modalOverlay">
          <div className="modalContainer">
            <div className="modalContent">
              <h3><button onClick={this.close}>X</button>{title}</h3>
              <ModalElement element={element}></ModalElement>
              <Links element={element}></Links>
              <ModalVideos element={element}></ModalVideos>
            </div>
          </div>
        </div>
      );}
  }
});
