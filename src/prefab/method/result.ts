import {MethodResult} from '../../method/result';
import {TestCase} from '../../test/case';
import type {TestCaseData} from '../../test/case/data';

/**
 * @category Prefabs
 */
export class PrefabMethodResult extends TestCase<unknown, boolean> {
	constructor(data: TestCaseData<unknown, boolean>) {
		super(data);
	}

	public async execute(input: MethodResult): Promise<void> {
		it(this.label, () => {
			const result = input.func.apply(input.instance, input.args);
			expect(result).toBe(input.expectedResult);

			if (input.expectedResultType !== 'undefined') {
				expect(typeof result).toBe(input.expectedResultType);
			}
		});
	}
}
