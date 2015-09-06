'use strict';
var test = require('ava');
var splitArray = require('./');

test('splits simple array', function (t) {
	t.same(
		splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2),
		[['a', 'b'], ['c', 'd'], ['e', 'f']]
	);

	t.same(
		splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 3),
		[['a', 'b', 'c'], ['d', 'e', 'f']]
	);

	t.end();
});

test('handles the last item correctly', function (t) {
	t.same(
		splitArray(['a', 'b', 'c', 'd', 'e', 'f', 'foo'], 6),
		[['a', 'b', 'c', 'd', 'e', 'f'], ['foo']]
	);

	t.end();
});

test('Throws on nonsense input', function (t) {
	['foo', function () {}, null, {}].forEach(function (input) {
		t.throws(function () {
			splitArray(input, 1);
		});
	});

	t.end();
});
