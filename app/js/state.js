module.exports = {

  rootComponent: null,

  setRootComponent: function(_rootComponent){
    this.rootComponent = _rootComponent;
  },

  setState: function(state){
    console.log(state);
    this.rootComponent.setState(state);
  }
};
