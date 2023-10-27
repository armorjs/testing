import type {TestInput} from './test/input';

/**
 * @category Test Input - Booleans
 */
export class Booleans {
	public static Range = {
		Valid: [
			{label: 'true', value: true},
			{label: 'false', value: false}
		] as TestInput<boolean>[]
	} as const;
	public static Invalid = {
		Truthy: [
			{label: 'one (number)', value: 1},
			{label: 'empty object', value: {}},
			{label: 'single element array', value: ['a']},
			{label: 'string of length 1', value: 'a' as any},
			{label: 'empty array', value: []}
		] as TestInput<boolean>[],
		Falsy: [
			{label: 'null', value: null as any},
			{label: 'NaN', value: NaN as any},
			{label: 'undefined', value: undefined as any},
			{label: 'zero', value: 0},
			{label: 'negative zero', value: -0},
			{label: 'empty double qoute', value: ''},
			{label: 'empty single quote', value: ''},
			{label: 'empty backtick', value: ``}
		] as TestInput<boolean>[]
	} as const;
}
