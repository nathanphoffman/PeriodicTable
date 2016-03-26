var React = require('react');

module.exports = React.createClass({

render: function(){
    var element = this.props.element;

    var cells = [];

    // Wiki
    cells.push(getCell(
      "Wikipedia",
      this.props.wiki,
      "https://en.wikipedia.org/wiki/" + element.Name,
      element.Name));

    // Theodore Gray
    var grayLink = "http://theodoregray.com/periodictable/Elements/" + pad(element.AtomicNumber,3) + "/index.s7.html";
    cells.push(getCell(
      "Theodore Gray",
      ["Theodore Gray is a well known element collector who created the popular book The Elements.  He has a webpage for nearly every element on this table where he shows off samples or associated materials."],
      grayLink,
      element.Name));

    return(<div className="col-md-6">{cells}</div>)
  }
});

function getCell(title,description,link,element)
{
  title += " (" + element + ")";
  return (<div><a target="_blank" href={link}><h3>{title}</h3></a><text>{description}</text></div>);
}

// taken from http://stackoverflow.com/questions/2998784/how-to-output-integers-with-leading-zeros-in-javascript
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
