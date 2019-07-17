var React = require('react');
var Button = require('./button.jsx');
var transitions = require('./../general/transitions.jsx');
var hf = require('./../../helperFunctions.js');

var color = require('./../periodicTable/actions/color.js');

module.exports = React.createClass({

  getButtons: function(arr, func) {

    var arrComponent = [];

    arr.forEach(function(component, index) {

      var activeClass = "";

      if (this.state && this.state.styledElements) {this.state.styledElements.forEach(function(element) {
          if (element.propName == component.field) {
            activeClass = element.subtract
              ? "activeActionSubtract"
              : "activeActionAdd";
          }
        });}

      // We use this to call back to the individual button
      component['reference'] = this;

      arrComponent.push(
        <Button
          key={index}
          glyph={component.glyph}
          click={func.bind(component)}
          activeClass={activeClass}
          name={component.name}
          type="sub"/>
      );

    }.bind(this));

    return arrComponent;
  },

  buttonDefs: function() {
    switch (this.props.type)
    {case "COLOR":
        return this.getButtons([
          {
            name: 'CLEAR',
            field: '',
            glyph: 'ban-circle'
          }, 
          {
            name: 'MELTING',
            field: 'MeltingPoint-C',
            glyph: 'tint'
          },
          {
            name: 'ATOMICRADIUS',
            field: 'AtomicRadius',
            glyph:'resize-full'
          },
          {
            name: 'SPECIFICHEAT',
            field: 'SpecificHeat',
            glyph: 'fire'
          }, {
            name: 'DENSITY',
            field: 'Density-gcc',
            glyph: 'scale'
          },
          {
            name: 'ELECTRONEGATIVITY',
            field: 'PaulingElectronegativity',
            glyph: 'flash'
          },
          {name:'IONIZATIONENERGY',field:'FirstIonisationEnergy',glyph:'download'}
        ], color.load);


        case "ANALYZE":
          return this.getButtons([
            {
              name: 'GRAPH'
            }, {
              name: 'TABLE'
            }, {
              name: 'UNSELECT'
            }
          ], function() {

            console.log('button clicked!!!');

          });}

        return [];
      },

      render: function() {


        var buttons = this.buttonDefs();
        //transitions.fadeIn(
        return (
          <span>
          <div id="periodicTable" className="navCenter navBottom">{buttons}</div>
          </span>
        );

      }
    });
