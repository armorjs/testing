import {ArmorTestCases, ArmorTestCasesClass} from '../cases';

import {ArmorTestCase} from '../case';
import {ArmorTestCaseStaticMethodExists} from '../case/static-method-exists';
import {ArmorTestCaseStaticMethodParamCount} from '../case/static-method-param-count';
import {ArmorTestExecutor} from '../executor';
import {ArmorTestInputClassMethod} from '../input';

export class ArmorTestExecutorClassStatic extends ArmorTestExecutor {
	public staticMethod: {
		exists: ArmorTestCaseStaticMethodExists;
		paramCount: ArmorTestCaseStaticMethodParamCount;
	};

	constructor() {
		super('class.static');
		this.staticMethod = {
			exists: new ArmorTestCaseStaticMethodExists(this.id, '', ''),
			paramCount: new ArmorTestCaseStaticMethodParamCount(this.id, '', '')
		};
	}

	public async execute(staticClass: any, expectedMethods: ArmorTestInputClassMethod[]): Promise<any> {
		if (!staticClass) {
			throw new Error(`Test executor with id '${this.id}' execution failed - no class provided.`);
		}

		// tslint:disable-next-line
		for (let i = 0; i < expectedMethods.length; i++) {
			const input: ArmorTestInputClassMethod = expectedMethods[i];

			await this.staticMethod.exists.execute(staticClass, input.name);
			await this.staticMethod.paramCount.execute(staticClass, input.name, input.paramCount);
		}
	}
}
