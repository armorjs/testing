import {Test} from '../test';
import {TestInputMethodResult} from '../input/method-result';

export class TestCaseMethodResult extends Test {
	constructor(parentId: string, id: string, label: string) {
		super(parentId, id, label);
	}

	public async execute(input: TestInputMethodResult): Promise<any> {
		it(this.label, () => {
			const result = input.func.apply(input.instance, input.args);
			expect(result).toBe(input.expectedResult);

			if (input.expectedResultType !== 'undefined') {
				expect(typeof result).toBe(input.expectedResultType);
			}
		});
	}
}
