import { ArmorTestExecutor } from './executor';

export class ArmorTestCase {
	public readonly id: string;
	public readonly label: string;

	constructor(id: string, label: string) {
		this.id = id;
		this.label = label;
	}

	public async execute(executor: ArmorTestExecutor): Promise<any> {

	}
}
