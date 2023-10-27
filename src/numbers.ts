import type {TestInput} from './test/input';

/**
 * @category Test Cases - Numbers
 */
export class Numbers {
	public static Valid = {
		Truthy: [] as TestInput<number>[],
		Standard: [] as TestInput<number>[]
	} as const;
	public static Invalid = {} as const;
}
