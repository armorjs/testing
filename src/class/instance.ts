/**
 *	MIT License
 *
 *	Copyright (c) 2019 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import {InstanceMethodExists} from '../instance/method/exists';
import {InstanceMethodParamCount} from '../instance/method/param/count';
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
			exists: new InstanceMethodExists({}),
			paramCount: new InstanceMethodParamCount({})
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
