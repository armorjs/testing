import {ArmorTestCollectionGroup, ArmorTestCollectionItem} from './group';
import {ArmorTestCollection} from './collection';

export class ArmorTestCollectionBooleans implements ArmorTestCollection {
	public readonly valid: ArmorTestCollectionGroup;
	public readonly invalid: ArmorTestCollectionGroup;

	constructor() {
		this.invalid = this.createInvalid();
		this.valid = this.createValid();
	}

	public createValid(): ArmorTestCollectionGroup {
		return new ArmorTestCollectionGroup('booleans.valid', 'Valid Booleans', [
			{label: 'boolean (true)', value: true},
			{label: 'boolean (false)', value: false},
			{label: 'string (empty)', value: ''},
			{label: 'string (normal)', value: 'Bakers love bread?'}
			{label: 'object', value: {}},
			{label: 'function', value: () => {}},
			{label: 'undefined', value: undefined},
			{label: 'null', value: null},
			{label: 'array (empty)', value: []},
			{label: 'array (string elements)', value: ['one', 'two', 'three']}
		]);
	}

	public createInvalid(): ArmorTestCollectionGroup {
		return new ArmorTestCollectionGroup('booleans.invalid', 'Invalid Booleans', [

		]);
	}
}
