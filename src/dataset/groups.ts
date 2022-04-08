import type {DatasetGroup} from './group';

export type DatasetGroups<ValueT, ResultT> = Record<string, DatasetGroup<ValueT, ResultT>>;
