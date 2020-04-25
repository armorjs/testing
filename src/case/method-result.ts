import {ArmorTestCase} from './case';
import {ArmorTestInputMethodResult} from '../input/method-result';

export class ArmorTestCaseMethodResult extends ArmorTestCase {
	constructor(parentId: string, id: string, label: string) {
		super(parentId, id, label);
	}

	public async execute(input: ArmorTestInputMethodResult): Promise<any> {
		it(this.label, () => {
			const result = input.func.apply(input.instance, input.args);
			expect(result).toBe(input.expectedResult);

			if (input.expectedResultType !== 'undefined') {
				expect(typeof result).toBe(input.expectedResultType);
			}
		});
	}
}
