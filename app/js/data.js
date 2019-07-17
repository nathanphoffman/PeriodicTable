var ajax = require("./ajax.js");
var csvToJson = require("./csvToJson.js");

module.exports = {

  getAllElements: function(callback){
    ajax.get('./elements.csv',function(csv){
      var json = csvToJson.CSV2OBJ(csv);
      cachedElements = json;
      callback(json);
    },3);
  },

  getElement: function(sym,elements,callback)
  {
    elements.forEach(function(element){
      if(String(element.Symbol).toUpperCase() == String(sym).toUpperCase())
        callback(element);
    });
  }
};
