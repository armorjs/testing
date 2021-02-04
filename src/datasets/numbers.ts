export const INTS_NEG = new Set([-100, -10, -1, Number.MIN_SAFE_INTEGER]);

export const INTS_POS = new Set([0, 1, 15, 30, 100, 1000, 100000, Number.MAX_SAFE_INTEGER]);

export const INTS_INVALID = new Set([-999.9999, -1.1, 0.1, 5.5, 9.99999, 0.2271, NaN, Number.MAX_SAFE_INTEGER + 1,
Number.MIN_SAFE_INTEGER - 1, Number.EPSILON, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]);

export const UNITS_INVALID = new Set([-10, -0, -1.1, -0.1, 1.1, 5.1, 100.1, 1000.1, 10000.1, NaN, Number.POSITIVE_INFINITY,
Number.NEGATIVE_INFINITY, Number.EPSILON, Number.MIN_SAFE_INTEGER]);

export const UNITS_VALID = new Set([0, 1, 7, 10, 25, 50, 100, 1000, 10000, 100000, Number.MAX_SAFE_INTEGER]);

export const FLOATS_VALID= new Set([-1.1, -0.1, 0, 0.1, 1.1, 10.1, 9.999, 25.7731, 99.99999971])

export const FLOATS_INVALID= new Set([NaN, 'aaa', [], ['a'], {}, {'a': true}, {'b': 1091}, Symbol(111), Number.POSITIVE_INFINITY,
Number.NEGATIVE_INFINITY])
