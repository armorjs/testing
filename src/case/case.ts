export class ArmorTestCase {
	public readonly parentId: string;
	public readonly id: string;
	public readonly label: string;

	constructor(parentId: string, id: string, label: string) {
		this.id = id;
		this.label = label;
		this.parentId = parentId;
	}
}
