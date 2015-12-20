var $ = require('jquery');

module.exports = {
	get: function (url,callback,num) {
		
		typeof num === 'undefined' ? 0 : num;
		
		$.ajax({
			url: url
		}).done(callback).fail(function(){
			
			// retry on failure x times
			if(num++ > globals.ajaxRetry)
				module.exports.get(url,callback,num);

			throw "A problem occured while pulling data.";
		});
	}
}