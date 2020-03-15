import {ArmorTestCases, ArmorTestCasesClass} from '../cases';

import {ArmorTestCase} from '../case';
import {ArmorTestCaseInstanceMethodExists} from '../case/instance-method-exists';
import {ArmorTestCaseInstanceMethodParamCount} from '../case/instance-method-param-count';
import {ArmorTestExecutor} from '../executor';
import {ArmorTestInputClassMethod} from '../input';

export class ArmorTestExecutorClassInstance extends ArmorTestExecutor {
	public instanceMethod: {
		exists: ArmorTestCaseInstanceMethodExists;
		paramCount: ArmorTestCaseInstanceMethodParamCount;
	};

	constructor(methods: ArmorTestInputClassMethod[]) {
		super('class', [new ArmorTestCasesClass()]);
		this.instanceMethod = {
			exists: new ArmorTestCaseInstanceMethodExists(this.id, '', ''),
			paramCount: new ArmorTestCaseInstanceMethodParamCount(this.id, '', '')
		};
	}

	public async execute(instance: any, expectedMethods: ArmorTestInputClassMethod[]): Promise<any> {
		if (!instance) {
			throw new Error(`Test executor with id '${this.id}' execution failed - no instance provided.`);
		}

		// tslint:disable-next-line
		for (let i = 0; i < expectedMethods.length; i++) {
			const input: ArmorTestInputClassMethod = expectedMethods[i];

			await this.instanceMethod.exists.execute(instance, input.name);
			await this.instanceMethod.paramCount.execute(instance, input.name, input.paramCount);
		}
	}
}
