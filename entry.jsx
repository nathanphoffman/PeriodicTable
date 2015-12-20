'use strict'

//try{
    var React = require('react');
    var ReactDOM = require('react-dom');

    var Page = require('./app/js/reactComponents/page.jsx');

    ReactDOM.render(
      <Page />,
      document.getElementById('reactJS')
    );



/*
}
catch(e)
{
    console.log(e);
}
*/
