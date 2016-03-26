module.exports = {

  getStandardPosition: function(element, width, height)
  {
    var left;

    var widthSpace = Math.ceil(width*1.1);
    var heightSpace = Math.ceil(height*1.1);

    var group = element.group;
    var number = element.number;
    var period = element.period;

    if(group != "null")
      {
        left = Number(group*widthSpace) + '%';
      }
      else {
        if(number < 89)
        {
          left = Number((3+(number-57))*widthSpace) + '%';
          period = Number(period) + 2.5;
        }
        else {
          left = Number((3+(number-89))*widthSpace) + '%';
          period = Number(period) + 2.5;
        }
      }
      var top = Number(period*heightSpace + 6) + '%';

      return {
        left: left,
        top: top,
        width: width + "%",
        height: height + "%",
        position: "absolute"
      };
  },

  getExtendedPosition: function(element, width,height)
  {
    var left;

    var widthSpace = Math.ceil(width*1.1);
    var heightSpace = Math.ceil(height*1.1);

    var group = element.group;
    var number = Number(element.number);
    var period = element.period;

    if(group != "null")
      {
        if(group > 2)
        {
          group = Number(group) + 14;
        }
        left = Number(Number(group)*widthSpace) + '%';
      }
      else {

        if(number < 89)
        {
          left = Number((3+(number-57))*widthSpace) + '%';
        }
        else {
          left = Number((3+(number-89))*widthSpace) + '%';
        }
      }
      var top = Number(period*heightSpace + 6) + '%';

      return {
        left: left,
        top: top,
        width: width + "%",
        height: height + "%",
        position: "absolute"
      };
  }
}
