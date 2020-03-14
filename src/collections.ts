import {ArmorTestCollectionArrays} from './collection/arrays';
import {ArmorTestCollectionBooleans} from './collection/booleans';
import {ArmorTestCollectionNumbers} from './collection/numbers';

export class ArmorTestCollections {
	public readonly arrays: ArmorTestCollectionArrays;
	public readonly booleans: ArmorTestCollectionBooleans;
	public readonly numbers: ArmorTestCollectionNumbers;

	constructor() {
		this.arrays = new ArmorTestCollectionArrays();
		this.booleans = new ArmorTestCollectionBooleans();
		this.numbers = new ArmorTestCollectionNumbers();
	}
}
