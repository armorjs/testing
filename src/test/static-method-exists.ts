import {Test} from '../test';

export class TestCaseStaticMethodExists extends Test {
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
