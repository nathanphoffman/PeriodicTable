var ajax = require('./ajax.js');
var $ = require('jquery');
var React = require('react');

module.exports = {

  wikiSummaryApi: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=",

  getWikiSummary: function(article,callback)
  {
    console.log('getting summary');
    // we use jsonp here to avoid cross origin headers, ? gets replaced by the callback
    ajax.getJSONP(this.wikiSummaryApi + encodeURIComponent(article) + '&callback=?',function(response){
      var pages = response.query.pages;
      var top1Page = pages[Object.keys(pages)[0]]; // we do not care what page it is, we take top 1 page
      console.log(top1Page.extract);

      // We have to split the paragraphs manually because react does not allow JS string to html
      var paragraphs = top1Page.extract.split("\n");
      var jsx = [];
      paragraphs.forEach(function(paragraph){
        jsx.push(paragraph);
        jsx.push(<br/>);
        jsx.push(<br/>);
      });

      callback(jsx);
    });
  }
}
