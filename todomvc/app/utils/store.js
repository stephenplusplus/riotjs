function DB(key) {
	'use strict';

	var store = window.localStorage;

	return {
		get: function () {
			return JSON.parse(store[key] || '{}');
		},

		put: function (data) {
			store[key] = JSON.stringify(data);
		}
	};
}
