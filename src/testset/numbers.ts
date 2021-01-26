import {Testset} from '../testset';
import {TestsetGroup} from './group';

export class TestsetNumbers implements Testset {
	public readonly valid: TestsetGroup;
	public readonly invalid: TestsetGroup;

	constructor() {
		this.invalid = this.createInvalid();
		this.valid = this.createValid();
	}

	public createValid(): TestsetGroup {
		return new TestsetGroup('Valid Numbers', 'label', []);
	}

	public createInvalid(): TestsetGroup {
		return new TestsetGroup('Invalid Numbers', 'label', []);
	}
}
