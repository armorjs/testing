import {TestsetArrays} from './testset/arrays';
import {TestsetBooleans} from './testset/booleans';
import {TestsetNumbers} from './testset/numbers';

export class Testsets {
	public readonly arrays: TestsetArrays;
	public readonly booleans: TestsetBooleans;
	public readonly numbers: TestsetNumbers;

	constructor() {
		this.arrays = new TestsetArrays();
		this.booleans = new TestsetBooleans();
		this.numbers = new TestsetNumbers();
	}
}
