import test from 'ava';
import splitArray from './';

test('splits simple array', t => {
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

test('handles the last item correctly', t => {
	t.same(
		splitArray(['a', 'b', 'c', 'd', 'e', 'f', 'foo'], 6),
		[['a', 'b', 'c', 'd', 'e', 'f'], ['foo']]
	);

	t.end();
});

test('Throws on nonsense input', t => {
	['foo', function () {}, null, {}].forEach(input => {
		t.throws(() => {
			splitArray(input, 1);
		});
	});

	t.end();
});
