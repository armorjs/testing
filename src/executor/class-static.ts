import {Tests, TestsClass} from '../cases';

import {Test} from '../test';
import {TestStaticMethodExists} from '../test/static-method-exists';
import {TestStaticMethodParamCount} from '../test/static-method-param-count';
import {Executor} from '../executor';
import {TestInputClassMethod} from '../test-input-class-method';

export class TestExecutorClassStatic extends Executor {
	public staticMethod: {
		exists: TestStaticMethodExists;
		paramCount: TestStaticMethodParamCount;
	};

	constructor() {
		super('class.static');
		this.staticMethod = {
			exists: new TestStaticMethodExists(this.id, '', ''),
			paramCount: new TestStaticMethodParamCount(this.id, '', '')
		};
	}

	public async execute(staticClass: any, expectedMethods: TestInputClassMethod[]): Promise<any> {
		if (!staticClass) {
			throw new Error(`Test executor with id '${this.id}' execution failed - no class provided.`);
		}

		// tslint:disable-next-line
		for (let i = 0; i < expectedMethods.length; i++) {
			const input: TestInputClassMethod = expectedMethods[i];

			await this.staticMethod.exists.execute(staticClass, input.name);
			await this.staticMethod.paramCount.execute(staticClass, input.name, input.paramCount);
		}
	}
}
