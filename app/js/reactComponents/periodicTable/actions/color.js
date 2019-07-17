
var hf = require('./../../../helperFunctions.js');
var status = require('./status.js');
var gs = require('./../../../state.js');

/*
  This file gets called by every element to color it for highlighting rules
*/

module.exports = {

  load: function (handler) {

    //gs.setState({});
    //console.log("would have loaded " + this.field);
    var ctrlKey = handler.ctrlKey || false;
    handler.preventDefault();
    curve = true;
    //curve = !curve;
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

    // sets button styles
    this.reference.setState({
      styledElements: styledElements,
      curve: curve
    });

    gs.rootComponent.forceUpdate();
  },

  // We prepare the full elements array, get ranges and sort to improve performance
  prepare: function (elements) {

    var result = {
      ranges: [],
      elements: elements
    };

    // these are the styles selected
    styledElements.forEach(function (styledElement) {
      var propName = styledElement.propName;
      var prop = hf.containsProperty(elements, propName);

     // if (!curve) {
      //  result.ranges[propName] = Math.abs(prop.absMax) + Math.abs(prop.absMin);
      //}
      //else {
        //result.ranges[propName] = Math.abs(prop.absMax) + Math.abs(prop.absMin);
        result.ranges[propName] = hf.getValidArrayLength(elements, propName);
     // }
    });

    return result;

  },

  // Gets the color based on prepare() and the value of the element prop
  getColor: function (element, config) {

    var ranges = config.ranges;
    var sortedElements = config.sortedElements;
    var elements = config.elements;

    //console.log(styledElements);

    // White is default if no colors are applied
    if (styledElements.length == 0) {
      return 255;
    }

    //var skip = false;
    var total = 0;
    styledElements.forEach(function (styledElement) {

      console.log(element.Name);

      var propName = styledElement.propName;
      var range = ranges[propName];
      var value = hf.getRankingInArray(elements, propName, element, 'Name');

      console.log(value);
      console.log(range);

      if (isNaN(value)) value = 0;
      else total += Number(value / range);
      
    }.bind(this));

    //if (skip) { return NaN; }
    //var percent = 0;
    var percent = (total / styledElements.length);
    console.log(percent);
    var color = Math.ceil(255 - Math.floor(percent * 255));
    return color;

  }

}

var styledElements = [];
var curve = false;
