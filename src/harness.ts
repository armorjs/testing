import type {TestSet} from './test/set';

/**
 * @category Test Harness
 */
export class Harness<ValueT, ResultT> {
	public async run(sets: TestSet<ValueT, ResultT> | TestSet<ValueT, ResultT>[]): Promise<void> {
		if (!Array.isArray(sets)) {
			return this.runSet(sets);
		}

		for (const set of sets) {
			await this.runSet(set);
		}
	}

	public async runSet(set: TestSet<ValueT, ResultT>): Promise<void> {
		if (!set) {
			throw new Error(`harness:runSet:set:arg:missing`);
		}

		for (const test of set) {

		}
	}
}
