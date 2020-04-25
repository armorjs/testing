import {ArmorTestCases} from '../cases';

export class ArmorTestExecutor {
	public readonly id: string;

	constructor(id: string) {
		this.id = id;
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
	}

	public executeSync(testFunction: any, value: any, expectedResult: any): void {
		if (!testFunction) {
			throw new Error(`ArmorTestExecutor sync execution with id ${this.id} failed - test function missing.`);
		}
	}
}
