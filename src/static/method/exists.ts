import {BaseObject} from '../../base/object';
import {TestCase} from '../../test/case';
import type {TestCaseData} from '../../test/case/data';

/**
 * @category Prefabs
 */
export class StaticMethodExists extends TestCase<unknown, boolean> {
	constructor(data: TestCaseData<unknown, boolean>) {
		super(data);
	}

	public async execute(instance: unknown, methodName: string): Promise<void> {
		it(this.label, () => {
			const o = instance as BaseObject;
			expect(o).toBeDefined();
			expect(o[methodName]).not.toBeUndefined();
			expect(typeof o[methodName]).toBe('function');
		});
	}
}
