var React = require('react');

module.exports = React.createClass({

  render: function() {

    var classNames = "";

    if (this.props.type && this.props.type == "sub") {
      classNames += "btnAction ";
    } else {
      classNames += "btnTop ";
    }

    // set active class
    if (this.props.activeClass !== null && this.props.activeClass) {
      classNames += this.props.activeClass + ' ';
    }

    if (this.props.glyph) {
      var glyphClass = "glyphicon glyphicon-" + this.props.glyph;
    } else {
      var glyphClass = "";
    }

    var textClass = "navText hidden-xs";

    if (this.props.type && this.props.type == 'sub') {
      textClass += " hidden-sm";
    }

    if (this.props.hide) {
      classNames += " hidden-xs";
    }

    var click = function() {};

    if (this.props.click && typeof this.props.click === 'function') {
      click = this.props.click;
    }

    return (
      <a href="#" onClick={this.props.click} id={this.props.name} className={classNames}>
        <span className={glyphClass} aria-hidden="true"></span>
        <span className={textClass}>{this.props.name}</span>
      </a >
    );
  }

});
