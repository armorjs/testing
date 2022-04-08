import type {TestCaseData} from '../test/case/data';

/**
 * @category Dataset - Booleans
 */
export class BooleanTests {
	public static Valid = {
		Values: [
			{label: 'true', args: true},
			{label: 'false', args: false}
		] as TestCaseData<boolean, boolean>[]
	} as const;
	public static Invalid = {
		Truthy: [
			{label: 'one (number)', args: 1},
			{label: 'empty object', args: {}},
			{label: 'single element array', args: ['a']},
			{label: 'string of length 1', args: 'a' as any},
			{label: 'empty array', args: []}
		] as TestCaseData<boolean, boolean>[],
		Falsy: [
			{label: 'null', args: null as any},
			{label: 'NaN', args: NaN as any},
			{label: 'undefined', args: undefined as any},
			{label: 'zero', args: 0},
			{label: 'negative zero', args: -0},
			{label: 'empty double qoute', args: ''},
			{label: 'empty single quote', args: ''},
			{label: 'empty backtick', args: ``}
		] as TestCaseData<boolean, boolean>[]
	} as const;
}
