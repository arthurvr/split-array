'use strict';
var assert = require('assert');
var splitArray = require('./');

it('splits simple array', function () {
	assert.deepEqual(
		splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2),
		[['a', 'b'], ['c', 'd'], ['e', 'f']]
	);

	assert.deepEqual(
		splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 3),
		[['a', 'b', 'c'], ['d', 'e', 'f']]
	);
});

it('handles the last item correctly', function () {
	assert.deepEqual(
		splitArray(['a', 'b', 'c', 'd', 'e', 'f', 'foo'], 6),
		[['a', 'b', 'c', 'd', 'e', 'f'], ['foo']]
	);
});

it('Throws on nonsense input', function () {
	['foo', function () {}, null, {}].forEach(function (input) {
		assert.throws(function () {
			splitArray(input, 1);
		});
	});
});
