import type {Dataset} from '../dataset';
import {TestCaseData} from '../test/case/data';

/**
 * @category Test Cases - Strings
 */
export class StringTests implements Dataset {
	public static Valid = {
		Values: [] as TestCaseData<string, boolean>[]
	} as const;
	public static Invalid = {
		Truthy: [] as TestCaseData<string, boolean>[],
		Falsy: [] as TestCaseData<string, boolean>[]
	} as const;
}
