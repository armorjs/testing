import {ArmorTestCase} from './case';

export class ArmorTestCaseStaticMethodExists extends ArmorTestCase {
	constructor(parentId: string, id: string, label: string) {
		super(parentId, id, label);
	}

	public async execute(instance: any, methodName: string): Promise<any> {
		it(this.label, () => {
			expect(instance[methodName]).not.toBeUndefined();
			expect(typeof instance[methodName]).toBe('function');
		});
	}
}
