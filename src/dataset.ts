import type {DatasetGroups} from './dataset/groups';

/**
 * @category Datasets
 */
export abstract class Dataset {
	static [k: string]: DatasetGroups<unknown, unknown>;
	public static Valid: DatasetGroups<unknown, unknown>;
}
