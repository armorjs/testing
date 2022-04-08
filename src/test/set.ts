/**
 *	MIT License
 *
 *	Copyright (c) 2022 Toreda, Inc.
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

import type {ArrayFunc, Iterable} from '@toreda/types';

import {Log} from '@toreda/log';
import {TestCase} from './case';
import type {TestCases} from './cases';
import {TestSetItor} from './set/itor';
import type {TestSetOptions} from './set/options';

/**
 * Iterable container holding Test Sets that share one common Value Type and Result Type.
 *
 * @category Test Sets
 */
export class TestSet<ValueT, ResultT> {
	public readonly cases: TestCases<ValueT, ResultT>;
	public readonly log: Log;

	constructor(options?: TestSetOptions<ValueT, ResultT>) {
		this.cases = this.casesMk(options?.cases);
		this.log = this.logMk(options?.log);
	}

	private casesMk(cases?: TestCases<ValueT, ResultT>): TestCases<ValueT, ResultT> {
		if (!Array.isArray(cases)) {
			return [] as TestCases<ValueT, ResultT>;
		}

		return cases;
	}

	private logMk(log?: Log): Log {
		if (!log) {
			return new Log();
		}

		return log;
	}

	[Symbol.iterator](): TestSetItor<ValueT, ResultT> {
		return new TestSetItor<ValueT, ResultT>(this.cases);
	}

	public forEach(func: ArrayFunc<TestCase<ValueT, ResultT>, TestCase<ValueT, ResultT>>): void {
		for (let i = 0; i < this.cases.length; i++) {
			const value = this.cases[i];

			try {
				func(value, i, this.cases);
			} catch (e) {}
		}
	}
}
