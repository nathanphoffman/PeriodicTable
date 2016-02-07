var React = require('react');

module.exports = React.createClass({
  render: function(){
    var element = this.props.element;
    //["Periodic Video 1"]

    //return (<iframe width="560" height="315" src={element["Periodic Video 1"]} frameborder="0"></iframe>);
    var videos = element.PeriodicVideos.split(',');
    var videoTags = [];

    videos.forEach(function(video){
      var videoSrc = "https://www.youtube.com/embed/" + video + "?list=PL7A1F4CF36C085DE1";
      videoTags.push(<iframe className="video" src={videoSrc} frameborder="0" allowfullscreen></iframe>);
    });

    return (<div className="col-md-6"><h1>Periodic Videos:</h1>{videoTags}</div>);
    //return (<span></span>);
  }
});
