import type {BaseObject} from '../../../base/object';
import {TestCase} from '../../../test/case';
import type {TestCaseData} from '../../../test/case/data';

/**
 * @category Prefabs
 */
export class StaticMethodParamCount extends TestCase<unknown, boolean> {
	constructor(data: TestCaseData<unknown, boolean>) {
		super(data);
	}

	public async task(instance: unknown, methodName: string, expected: number): Promise<void> {
		it(this.label, () => {
			const o = instance as BaseObject;
			expect(o).toBeDefined();
			expect(o.prototype).toBeDefined();

			expect(o[methodName]).not.toBeUndefined();
			expect(o[methodName].length).toBe(expected);
		});
	}
}
