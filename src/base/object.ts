export interface BaseObject {
	[k: string]: unknown;
	prototype: BaseObject;
	length?: number;
}
