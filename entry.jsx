'use strict'

//try{
var React = require('react');
var ReactDOM = require('react-dom');
var Page = require('./app/js/reactComponents/page.jsx');

var data = require('./app/js/data.js');
var state = require('./app/js/state.js');
var api = require('./app/js/api.jsx');

data.getAllElements(function(elements){

  // Initial Render, we save the component to a state module we can access everywhere
  state.setRootComponent(ReactDOM.render(
    <Page route="default" elements={elements}/>,
    document.getElementById('reactJS')
  ));

  routie({
    '': function(){
      state.setState({route: "table"});
    },
    'table': function(){
      state.setState({route: "table"});
    },
    'element/:symbol': function(symbol){
      data.getElement(symbol, elements, function(element){
        api.getWikiSummary(element.Name,function(response){
        state.setState({route: "element", element:element, api:{wiki:response}});
      });
      }.bind(this));
    },
    '*': function(){
      state.setState({route: "default"});
    }
  });
});
