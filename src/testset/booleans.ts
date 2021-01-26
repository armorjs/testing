import {TestsetGroup} from './group';
import {TestsetItem} from './item';
import { Testset } from '../testset';

export class TestsetBooleans implements Testset {
	public readonly valid: TestsetGroup;
	public readonly invalid: TestsetGroup;

	constructor() {
		this.invalid = this.createInvalid();
		this.valid = this.createValid();
	}

	public createValid(): TestsetGroup {
		return new TestsetGroup('booleans.valid', 'Valid Booleans', [
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

	public createInvalid(): TestsetGroup {
		return new TestsetGroup('booleans.invalid', 'Invalid Booleans', [

		]);
	}
}
