import type {PrefabId} from './prefab/id';
import {TestCase} from './test/case';
import type {TestCaseData} from './test/case/data';

/**
 * @category Prefabs
 */
export class Prefab<T, ReturnT> {
	public readonly id: PrefabId;

	constructor(id: PrefabId) {
		super(data);
		this.assertPrefab(id);
		this.id = id;
	}

	private assertPrefab(id: PrefabId): void {
		if (id === undefined || id === null) {
			throw new Error(`prefab:id:missing`);
		}

		if (typeof id !== 'string') {
			throw new Error('prefab:id:bad_format');
		}
	}
}
