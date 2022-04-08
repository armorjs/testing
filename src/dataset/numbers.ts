export const UNITS_VALID = new Set([0, 1, 7, 10, 25, 50, 100, 1000, 10000, 100000, Number.MAX_SAFE_INTEGER]);

export const FLOATS_VALID = new Set([-1.1, -0.1, 0, 0.1, 1.1, 10.1, 9.999, 25.7731, 99.99999971]);

export const FLOATS_INVALID = new Set([
	NaN,
	'aaa',
	[],
	['a'],
	{},
	{a: true},
	{b: 1091},
	Symbol(111),
	Number.POSITIVE_INFINITY,
	Number.NEGATIVE_INFINITY
]);
