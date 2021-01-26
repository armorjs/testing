import {Test} from '../test';
import {TestInstanceMethodExists} from '../test/instance-method-exists';
import {TestInstanceMethodParamCount} from '../test/instance-method-param-count';
import {Executor} from '../executor';
import {TestInputClassMethod} from '../input';

export class TestExecutorClassInstance extends Executor {
	public instanceMethod: {
		exists: TestInstanceMethodExists;
		paramCount: TestInstanceMethodParamCount;
	};

	constructor(methods: TestInputClassMethod[]) {
		super('class.instance');
		this.instanceMethod = {
			exists: new TestInstanceMethodExists(this.id, '', ''),
			paramCount: new TestInstanceMethodParamCount(this.id, '', '')
		};
	}

	public async execute(instance: any, expectedMethods: TestInputClassMethod[]): Promise<any> {
		if (!instance) {
			throw new Error(`Test executor with id '${this.id}' execution failed - no instance provided.`);
		}

		// tslint:disable-next-line
		for (let i = 0; i < expectedMethods.length; i++) {
			const input: TestInputClassMethod = expectedMethods[i];

			await this.instanceMethod.exists.execute(instance, input.name);
			await this.instanceMethod.paramCount.execute(instance, input.name, input.paramCount);
		}
	}
}
