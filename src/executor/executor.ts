import {ArmorTestCases} from '../cases';

export class ArmorTestExecutor {
	public readonly id: string;
	public readonly cases: ArmorTestCases[];

	constructor(id: string, cases: ArmorTestCases[]) {
		this.id = id;
		this.cases = cases;
	}

	public async execute(testFunction: any, value: any, expectedResult: any): Promise<any> {
		if (!testFunction) {
			throw new Error(
				`ArmorTestExecutor execution with id ${this.id} failed - testFunction argument is missing.`
			);
		}

		if (typeof testFunction !== 'function') {
			throw new Error(
				`ArmorTestExecutor execution with id '${this.id}' failed - testFunction argument not a valid function.`
			);
		}

		// tslint:disable-next-line
		for (let i = 0; i < this.cases.length; i++) {
			const testCase: ArmorTestCase = this.cases[i];
		}
	}

	public executeSync(testFunction: any, value: any, expectedResult: any): void {
		if (!testFunction) {
			throw new Error(`ArmorTestExecutor sync execution with id ${this.id} failed - test function missing.`);
		}
	}
}
