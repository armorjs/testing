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
			throw new Error(`ArmorTestCases init failed - label argument missing or not a valid string.`)
		}

		if (!Array.isArray(cases)) {
			throw new Error(`ArmorTestCases init failed - cases argument missing or not a valid array.`);
		}

		this.cases = cases;
	}

	public async execute(executor: ArmorTestExecutor): Promise<any> {
		if (!Array.isArray(this.cases)) {
			throw new Error(`ArmorTestCases with id ${this.id} failed - test cases missing.`);
		}

		// tslint:disable-next-line
		for (let i = 0; i < this.cases.length; i++) {
			const testCase = this.cases[i];

			await testCase =
		}
	}

	public executeSync(fn: any): void {}
}
