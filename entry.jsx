'use strict'

//try{
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Page = require('./app/js/reactComponents/page.jsx');
    var listeners = require('./app/js/listeners.js');

    var data = require('./app/js/data.js');

    // Initial Render
    var renderedComponent = ReactDOM.render(
      <Page route="default"/>,
      document.getElementById('reactJS')
    );

    routie({
      'table': function(){
         renderedComponent.setState({route: "table"});
      },
      'element/:symbol': function(symbol){
        data.getElement(symbol, function(element){
          renderedComponent.setState({route: "element", element:element});
        }.bind(this));
      },
      '*': function(){
        renderedComponent.setState({route: "default"});
      }
    });

    listeners.initialize();
