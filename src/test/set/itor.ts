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

import type {Itor, ItorItem} from '@toreda/types';

import {TestCase} from '../case';

/**
 * Iterator created during `for of` iteration. Saves position and accesses one
 * TestCase value on each iteration until end of TestCases array is reached.
 *
 * @category Test Sets
 */
export class TestSetItor<ValueT, ResultT>
	implements Itor<TestCase<ValueT, ResultT> | null, TestSetItor<ValueT, ResultT>>
{
	public ndx: number;
	public readonly items: TestCase<ValueT, ResultT>[];

	constructor(items: TestCase<ValueT, ResultT>[]) {
		this.ndx = 0;
		this.items = items;
	}

	public next(): ItorItem<TestCase<ValueT, ResultT> | null> {
		if (!Array.isArray(this.items) || !this.items[this.ndx]) {
			return {
				value: null,
				done: true
			};
		}

		return {
			value: this.items[this.ndx],
			done: false
		};
	}
}
