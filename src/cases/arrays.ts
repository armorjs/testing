import {ArmorTestCase} from '../case';
import {ArmorTestCases} from './cases';
export class ArmorTestCasesArrays extends ArmorTestCases {
	public readonly id: string;

	constructor() {
		const id = 'class_methods';
		const label = 'label';
		super(id, label, [
			new ArmorTestCase(id, 'method_exists', ''),
			new ArmorTestCase(id, 'expected_parameter_count', '')
		]);
		this.id = 'class_methods';
	}
}
