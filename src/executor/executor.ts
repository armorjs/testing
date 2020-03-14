import {ArmorTestCase} from '../case';
import {ArmorTestFunction} from '../function';

export class ArmorTestExecutor {
	public readonly id: string;
	public readonly cases: ArmorTestCase[];
	constructor(id: string, cases: ArmorTestCase[]) {
		this.id = id;
		this.cases = cases;
	}

	public async execute(fn: any): Promise<any> {
		if (!this.fn) {
			throw new Error(`ArmorTestExecutor execution with id ${this.id} failed - test function missing.`);
		}
	}

	public executeSync(): void {
		if (!this.fn) {
			throw new Error(`ArmorTestExecutor sync execution with id ${this.id} failed - test function missing.`);
		}
	}
}
