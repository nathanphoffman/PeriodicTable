var gs = require('./reactComponents/globalState.js');
var hf = require('./helperFunctions.js');

module.exports = {

  initialize: function()
  {
    this.listenResize();
  },

  listenResize: function()
  {
    var debounceResize = hf.debounce(resize,25,true);
    window.onresize = debounceResize;
  }
};

// On window resize we need to redo responsive-elements
function resize()
{
  gs.eachComponent({group: 'resize'},
  function(component) {
    component.reference.setState({resize: true});
  });
}
