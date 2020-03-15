import {ArmorTestCase} from '../case';
import {ArmorTestExecutor} from '../executor';

export class ArmorTestCases {
	public readonly id: string;
	public readonly label: string;
	public readonly cases: ArmorTestCase[];

	constructor(id: string, label: string, cases: ArmorTestCase[]) {
		this.id = id;

		if (typeof id !== 'string') {
			throw new Error(`ArmorTestCases init failed - id argument missing or not a valid string.`);
		}

		this.label = label;
		if (typeof label !== 'string') {
			throw new Error(`ArmorTestCases init failed - label argument missing or not a valid string.`);
		}

		if (!Array.isArray(cases)) {
			throw new Error(`ArmorTestCases init failed - cases argument missing or not a valid array.`);
		}

		this.cases = cases;
	}


}
