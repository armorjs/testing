import {ArmorTestCollectionItem} from './item';
import {ArmorTestCollectionItemParam} from './item-param';

export class ArmorTestCollectionGroup {
	public readonly id: string;
	public readonly label: string;
	public readonly items: ArmorTestCollectionItem[];

	constructor(id: string, label: string, items: ArmorTestCollectionItemParam[]) {
		this.id = id;
		this.label = label;
		this.items = this.createItems(items);
	}

	public createItems(items: ArmorTestCollectionItemParam[]): ArmorTestCollectionItem[] {
		if (!Array.isArray(items)) {
			throw new Error(`Test collection with id '${this.id}' failed to create
			test items - items argument not a valid array.`);
		}

		const cleanItems: ArmorTestCollectionItem[] = [];
		items.forEach((item: ArmorTestCollectionItemParam) => {
			cleanItems.push(new ArmorTestCollectionItem(item.label, item.value));
		});

		return cleanItems;
	}
}
