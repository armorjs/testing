import {Test} from '../test';

export class Testsets {
	public readonly id: string;
	public readonly label: string;
	public readonly cases: Test[];

	constructor(id: string, label: string, cases: Test[]) {
		this.id = id;

		if (typeof id !== 'string') {
			throw new Error(`TestCases init failed - id argument missing or not a valid string.`);
		}

		this.label = label;
		if (typeof label !== 'string') {
			throw new Error(`TestCases init failed - label argument missing or not a valid string.`);
		}

		if (!Array.isArray(cases)) {
			throw new Error(`TestCases init failed - cases argument missing or not a valid array.`);
		}

		this.cases = cases;
	}


}
