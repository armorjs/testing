import {TestsetItem} from './item';
import {TestsetParam} from './param';

export class TestsetGroup {
	public readonly id: string;
	public readonly label: string;
	public readonly items: TestsetItem[];

	constructor(id: string, label: string, items: TestsetItem[]) {
		this.id = id;
		this.label = label;
		this.items = this.createItems(items);
	}

	public createItems(items: TestsetParam[]): TestsetItem[] {
		if (!Array.isArray(items)) {
			throw new Error(`Test collection with id '${this.id}' failed to create
			test items - items argument not a valid array.`);
		}

		const cleanItems: TestsetItem[] = [];
		items.forEach((item: TestsetParam) => {
			cleanItems.push(new TestsetItem(item.label, item.value));
		});

		return cleanItems;
	}
}
