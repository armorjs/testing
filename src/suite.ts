/**
 * @category Suites
 */
export class Suite<ArgT> {
	public readonly id: string;

	constructor(id: string) {
		this.assertInit(id);

		this.id = id;
	}

	private assertInit(id: string): void {
		if (id === undefined || id === null) {
			throw new Error(`suite:${this.id}:id:missing`);
		}

		if (typeof id !== 'string') {
			throw new Error(`suite:${this.id}:id:bad_format`);
		}
	}
}
