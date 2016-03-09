module.exports = {

  register: function(component, groups, state) {

    state = state || {};
    groups = groups || [];

    var uniqueId = _uniqueId++;
    _components[uniqueId] = {
      uniqueId: uniqueId,
      reference: component,
      state: state,
      groups: groups
    };

    return uniqueId;
  },

  unregister: function(uniqueId) {
    _components.forEach(function(component, index) {
      if (component.uniqueId === uniqueId) {
        component.splice(index, 1);
        return;
      }
    });
  },

  getState: function(uniqueId) {
    var component = getComponent(uniqueId);
    return component.state;
  },

  setState: function(uniqueId, state) {
    _components[uniqueId].state = state;
  },

  eachComponent: function(config, func) {

    var targetGroup = config.group;
    var ignoreId = config.ignoreId || -1;

    _components.forEach(function(component) {
      component.groups.forEach(function(group) {
        if (group == targetGroup && ignoreId != component.uniqueId) {
          func(component);
        }
      });
    });
  },

  getTopMember: function(targetGroup)
  {
    var comp = null;

    _components.forEach(function(component) {
      component.groups.forEach(function(group) {
        if (group == targetGroup) {
          comp = component;
        }
      });
    });

    return comp;
  }


}

function getComponent(uniqueId) {
  return _components[uniqueId];
}

var _uniqueId = 0;
var _components = [];
