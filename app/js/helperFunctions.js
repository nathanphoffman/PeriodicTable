module.exports = {
	containsProperty: function (arr, prop, value) {
		if (!value) {
			value = null;
		}

		var result = {
			arr: [],
			max: 0,
			absMax: 0
		};

		arr.forEach(function (e) {
			if (e[prop] === value) {
				result.arr.push(e);
				result.max = e[prop] > result.max ? e[prop] : result.max;
			}

			result.absMax = e[prop] > result.absMax ? e[prop] : result.absMax;

		});

		return result;
	}
}