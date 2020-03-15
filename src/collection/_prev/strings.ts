import {ArmorTestCollection} from './collection';
import {ArmorTestCollectionGroup} from './group';

export class ArmorTestCollectionStrings implements ArmorTestCollection {
	public readonly valid: ArmorTestCollectionGroup;
	public readonly invalid: ArmorTestCollectionGroup;

	constructor() {
		this.invalid = this.createInvalid();
		this.valid = this.createValid();
	}

	public createValid(): ArmorTestCollectionGroup {
		return new ArmorTestCollectionGroup('Valid Numbers', []);
	}

	public createInvalid(): ArmorTestCollectionGroup {
		return new ArmorTestCollectionGroup('Invalid Numbers', []);
	}
}
