import {ClassStaticData} from './static/data';
import type {Method} from '../method';
import {StaticMethodExists} from '../static/method/exists';
import {StaticMethodParamCount} from '../static/method/param/count';
import {Suite} from '../suite';

/**
 * @category Prefabs
 */
export class ClassStatic extends Suite<unknown> {
	public staticMethod: {
		exists: StaticMethodExists;
		paramCount: StaticMethodParamCount;
	};

	constructor(data: ClassStaticData) {
		super('class.static');
		this.staticMethod = {
			exists: new StaticMethodExists({
				label: ''
			}),
			paramCount: new StaticMethodParamCount({})
		};
	}

	public async execute(staticClass: unknown, methods: Method[]): Promise<void> {
		if (!staticClass) {
			throw new Error(`Test executor with id '${this.id}' execution failed - no class provided.`);
		}

		for (const method of methods) {
			await this.staticMethod.exists.run(staticClass, method.name);
			await this.staticMethod.paramCount.run(staticClass, method.name, method.paramCount);
		}
	}
}
