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
