import {AnyObj} from '@toreda/types';
import {DatasetItem} from './dataset/item';

/**
 * Empty values frequently used in unit testing. These labeled values offer
 * important context in unit testing which helps the reader understand why
 * a certain value is used.
 */
export class Empty {
	/** Useful to test edge cases where a populated array is expected but an empty
	 * array is received instead.
	 */
	public static array: DatasetItem<unknown[]> = {
		label: 'empty array',
		value: [] as unknown[]
	} as const;
	/** Useful to test for edge cases where string values.
	 */
	public static string: DatasetItem<string> = {
		label: 'Empty String',
		value: ''
	} as const;
	public static object: DatasetItem<AnyObj> = {
		label: 'empty object',
		value: {}
	} as const;
}
