import {InstanceMethodExists} from '../instance/method/exists';
import {InstanceMethodParamCount} from '../../instance/method/param/count';
import type {Method} from '../method';
import {Suite} from '../suite';

/**
 * @category Prefabs
 */
export class ClassInstance extends Suite<unknown> {
	public method: {
		exists: InstanceMethodExists;
		paramCount: InstanceMethodParamCount;
	};

	constructor() {
		super('class.instance');
		this.method = {
			exists: new InstanceMethodExists(this.id, '', ''),
			paramCount: new InstanceMethodParamCount(this.id, '', '')
		};
	}

	public async run(instance: unknown, methods: Method[]): Promise<void> {
		if (!instance) {
			throw new Error(`Test executor with id '${this.id}' execution failed - no instance provided.`);
		}

		if (!Array.isArray(methods)) {
			throw new Error(`prefab:${this.id}:methods:bad_format`);
		}

		for (const method of methods) {
			await this.method.exists.run(instance, method.name);
			await this.method.paramCount.run(instance, method.name, method.paramCount);
		}
	}
}
