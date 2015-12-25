var gs = require('./../../globalState.js');
var hf = require('./../../../helperFunctions.js');
var status = require('./status.js');

module.exports = {

  load: function(handler) {
    //gs.setState({});
    //console.log("would have loaded " + this.field);
    var ctrlKey = handler.ctrlKey || false;
    handler.preventDefault();

    // reset to default if empty string
    if (this.field == "") {
      styledElements.splice(0, styledElements.length);
      curve = 0;
    } else if (this.field == 'curve') {
      curve = !curve;
    } else {
      // only allow one of each prop to be added
      var index = hf.getIndexByAttr(styledElements, 'propName', this.field);

      if (index === -1) {
        styledElements.push({
          propName: this.field,
          subtract: ctrlKey
        });
      }
      // otherwise remove it:
      else {
        styledElements.splice(index, 1);
      }
    }

    var table = gs.getTopMember('table');
    table.reference.setState({});

    // sets button styles
    this.reference.setState({
      styledElements: styledElements,
      curve: curve
    });
  },

  // We prepare the full elements array, get ranges and sort to improve performance
  prepare: function(elements) {

    var result = {
      ranges: [],
      elements: elements
    };

    styledElements.forEach(function(styledElement) {
      var propName = styledElement.propName;
      var prop = hf.containsProperty(elements, propName);

      if (!curve) {
        result.ranges[propName] = Math.abs(prop.absMax) + Math.abs(prop.absMin);
      }
      else {
        result.ranges[propName] = hf.getValidArrayLength(elements,propName);
      }
    });

    return result;

  },

  // Gets the color based on prepare() and the value of the element prop
  getColor: function(element,config) {

    var ranges = config.ranges;
    var sortedElements = config.sortedElements;
    var elements = config.elements;

    // White is default if no colors are applied
    if (styledElements.length == 0) {
      return 255;
    }

    var total = 0;
    var skip = false;

    styledElements.forEach(function(styledElement) {
      var propName = styledElement.propName;
      var range = ranges[propName];
      var value = null;

      if (!curve) {
        value = element[propName];
      } else {
        value = hf.getRankingInArray(elements,propName,element[propName]);
          //console.log(value);
      }

      if(isNaN(value))
      {
        skip = true;
        return;
      }
      else {
        total += Number(value / range);
        total = styledElement.subtract ? 1 - total : total;
      }

    }.bind(this));

    if(skip) { return NaN; }

    var percent = (total / styledElements.length);
    var color = Math.ceil(255 - percent * 255);
    return color;

  }

}

var styledElements = [];
var curve = false;
