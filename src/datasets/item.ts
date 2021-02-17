export interface DatasetsItem<T> {
    label: string,
    value: T
}
export type DatasetItems<T> =Array <DatasetsItem<T>>;