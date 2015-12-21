module.exports = {
	containsProperty: function (arr, prop, value) {
		if (!value) {
			value = null;
		}

		var result = {
			arr: [],
			max: 0
		};

		arr.forEach(function (e) {

			if (e[prop] === value) {
				result.arr.push(e);
				result.max = e[prop] > result.max ? e[prop] : result.max;
			}

			if(!result.absMax && e[prop])
			{
				result.absMax = e[prop];
			}

			if(!result.absMin && e[prop])
			{
				result.absMin = e[prop];
			}

			result.absMax = e[prop] > result.absMax ? e[prop] : result.absMax;
			result.absMin = e[prop] < result.absMin ? e[prop] : result.absMin;

		});

		return result;
	},

	debounce: function(func, wait, immediate){
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
	}
}
