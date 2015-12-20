// Registry keeps official definitions of every controller to enforce consistency
// We use this to formally define relationships and names

var registry = require('./registry_data.js');
module.exports = function(){
  registry.prototype.getComponent = function(parent, child) {
    if (!child) {
      return requestComponent(registry[parent]);
    } else {
      return requestComponent(registry[parent].children[child]);
    }
  }
  return registry;
}();

function requestComponent(component)
{
  return require(component.baseUrl + component.url);
}



/*



*/

/*
function getRegistry(search) {

  console.log(typeof search);

  if (typeof search === 'string') // no array is passed
  {
    return registry[search];
  } else if (!search || search.length === 0) { // return everything if nothing is passed
    return entireRegistry();
  } else {
    return searchRegistry(search);
  }
}

function searchRegistry(search) {
  var obj = {};
  search.forEach(function(register) {
    obj[register] = registry[register];
  });
  return obj;
}

function entireRegistry() {
  var obj = {};
  for (var register in registry) {
    obj[register] = registry[register];
  }
  return obj;
}
*/
