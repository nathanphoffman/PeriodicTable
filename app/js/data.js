var ajax = require("./ajax.js");
var csvToJson = require("./csvToJson.js");

module.exports = {

  getAllElements: function(callback){
    ajax.get('/elements.csv',function(csv){
      var json = csvToJson.CSV2OBJ(csv);
      cachedElements = json;
      callback(json);
    },3);
  },

  getElement: function(sym,fn){
    if(cachedElements === undefined || cachedElements === null){
      this.getAllElements(function(){
        this._getElement(sym,fn);
      }.bind(this));
    }
    else this._getElement(sym,fn);
  },

  _getElement: function(sym,fn)
  {
    cachedElements.forEach(function(element){
      if(element.Symbol.toUpperCase() == sym.toUpperCase())
      {
        fn(element);
      }
    });
  }
}

var cachedElements;
