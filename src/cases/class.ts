import {ArmorTestCaseInstanceMethodExists} from '../case/instance-method-exists';
import {ArmorTestCaseInstanceMethodParamCount} from '../case/instance-method-param-count';
import {ArmorTestCases} from './cases';

export class ArmorTestCasesClass extends ArmorTestCases {
	constructor() {
		const id = 'class';
		const label = 'Class';
		super(id, label, [
			// new ArmorTestCaseInstanceMethodExists(id, 'methods.exists', ''),
			// new ArmorTestCaseInstanceMethodParamCount(id, 'method.expected_param_count', '')
		]);
	}
}
