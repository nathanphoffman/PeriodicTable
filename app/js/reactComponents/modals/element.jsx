var React = require('react');

module.exports = React.createClass({

  render: function(){

    var element = this.props.element;
    var table = [];

    var index = 0;
    for(var property in element)
    {
      index++;
      table.push(<tr key={index}><td>{property}</td><td>{element[property]}</td></tr>);
    }

    return <div className="col-md-4"><table><tbody>{table}</tbody></table></div>;
  }

});
