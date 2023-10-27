import type {AnyObj} from '@toreda/types';
import type {TestInput} from './test/input';

/**
 * Empty values frequently used in unit testing. These labeled values offer
 * important context in unit testing which helps the reader understand why
 * a certain value is used.
 */
export class Empty {
	/** Useful to test edge cases where a populated array is expected but an empty
	 * array is received instead.
	 */
	public static array: TestInput<unknown[]> = {
		label: 'empty array',
		value: [] as unknown[]
	} as const;
	/** Useful to test for edge cases where string values.
	 */
	public static string: TestInput<string> = {
		label: 'Empty String',
		value: ''
	} as const;
	public static object: TestInput<AnyObj> = {
		label: 'empty object',
		value: {}
	} as const;
}
