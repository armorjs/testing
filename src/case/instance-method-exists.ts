import {ArmorTestCase} from './case';

export class ArmorTestCaseInstanceMethodExists extends ArmorTestCase {
	constructor(parentId: string, id: string, label: string) {
		super(parentId, id, label);
	}

	public async execute(instance: any, methodName: string): Promise<any> {
		it(this.label, () => {
			expect(instance.prototype[methodName]).not.toBeUndefined();
			expect(typeof instance.prototype[methodName]).toBe('function');
		});
	}
}
