'use strict'

//try{
    var React = require('react');
    var ReactDOM = require('react-dom');
    var gs = require('./app/js/reactComponents/globalState.js');
    var hf = require('./app/js/helperFunctions.js');

    var Page = require('./app/js/reactComponents/page.jsx');

    ReactDOM.render(
      <Page />,
      document.getElementById('reactJS')
    );

    var debounceResize = hf.debounce(resize,25,false);

    function resize()
    {
      gs.eachComponent({group: 'resize'},
  		function(component) {
        component.reference.setState({resize: true});
      });
    }
    // On window resize we need to redo responsive-elements
    window.onresize = debounceResize;


/*
}
catch(e)
{
    console.log(e);
}
*/
