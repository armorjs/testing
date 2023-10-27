import type {BaseObject} from '@toreda/types';
import {TestCase} from '../../test/case';
import type {TestCaseData} from '../../test/case/data';

/**
 * @category Prefabs
 */
export class InstanceMethodExists extends TestCase<unknown, boolean> {
	constructor(data: TestCaseData<unknown, boolean>) {
		super('prefab.instance.method.exists', data);
	}

	public async task(instance: unknown, methodName: string): Promise<void> {
		it(this.label, () => {
			const o = instance as BaseObject;
			expect(o).toBeDefined();
			expect(o.prototype).toBeDefined();

			expect(o.prototype[methodName]).not.toBeUndefined();
			expect(typeof o.prototype[methodName]).toBe('function');
		});
	}
}
