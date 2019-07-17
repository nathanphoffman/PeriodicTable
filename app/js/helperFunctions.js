var React = require('react');

module.exports = {
  containsProperty: function (arr, prop, value) {
    if (!value) {
      value = null;
    }

    var result = {
      arr: [],
      max: 0
    };

    var last = null;

    arr.forEach(function (e) {

      // This gets max/min values in the array, needs rewrite
      if (e[prop] === value) {
        result.arr.push(e);
        result.max = e[prop] > result.max
          ? e[prop]
          : result.max;
      }

      if (!result.absMax && e[prop]) {
        result.absMax = e[prop];
      }

      if (!result.absMin && e[prop]) {
        result.absMin = e[prop];
      }

      result.absMax = e[prop] > result.absMax
        ? e[prop]
        : result.absMax;
      result.absMin = e[prop] < result.absMin
        ? e[prop]
        : result.absMin;

    });

    return result;
  },

  debounce: function (func, wait, immediate) {
    console.log('debouncing');
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  btnHandler: function (handler, component) {
    //console.log(arguments);
    var type = handler.target.parentElement.id;
    console.log(type);
    if (handler.target.id != "") { 
      component.setState({ type: handler.target.id }); } 
    else if (type !== undefined && type != "") 
      { component.setState({ type: type }); }
  },

  getIndexByAttr: function (array, attr, value) {
    var index = -1;

    for (var i = 0; i < array.length; i++) {
      if (array[i][attr] === value) { return i; }
    }

    return -1;
  },

  removeFromArray: function (array, attr, value) {
    var index = this.getIndexByAttr(array, attr, value);
    array.splice(index, 1);
    return array;
  },

  sortObjectArray: function (objArray, attr) {

    var newArr = objArray;

    function compare(a, b) {
      if (a[attr] < b[attr])
        return -1;
      if (a[attr] > b[attr])
        return 1;
      return 0;
    }

    return newArr.sort(compare);
  },

  getRankingInArray: function (objs, prop, obj, key) {

    if (isNaN(obj[prop])) {
      return NaN;
    }

    var ranking = 0;
    var last = null;  
    
    let copyObjs = [...objs];
    copyObjs.sort((a,b)=>Number(a[prop])-Number(b[prop]));

    let index = copyObjs.findIndex(x=>x[key] === obj[key]);
    return index;

  },

  getValidArrayLength: function (elements, prop) {
    var length = 1;
    elements.forEach(function (element) {
      if (!isNaN(element[prop])) {
        length++;
      }
    });

    return length;
  }

}
