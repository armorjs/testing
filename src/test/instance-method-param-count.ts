import {Test} from '../test';

export class TestCaseInstanceMethodParamCount extends Test {
	constructor(parentId: string, id: string, label: string) {
		super(parentId, id, label);
	}

	public async execute(instance: any, methodName: string, expected: number): Promise<any> {
		it(this.label, () => {
			expect(instance.prototype[methodName]).not.toBeUndefined();
			expect(instance.prototype[methodName].length).toBe(expected);
		});
	}
}
