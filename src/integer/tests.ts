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

import type {TestCaseData} from '../test/case/data';

/**
 * @category Test Cases - Integers
 */
export class IntegerTests {
	public static Valid = {
		Positive: [
			{label: '0', args: 0},
			{label: '1', args: 1},
			{label: '15', args: 15},
			{label: '30', args: 30},
			{label: '100', args: 100},
			{label: '1000', args: 1000},
			{label: '100000', args: 100000},
			{label: 'MAX_SAFE_INT', args: Number.MAX_SAFE_INTEGER}
		] as TestCaseData<number, boolean>[]
	} as const;
	public static Invalid = {
		Negative: [
			{label: '-100', args: -100},
			{label: '-10', args: '-10'},
			{label: '-1', args: Number.MIN_SAFE_INTEGER}
		] as TestCaseData<number, boolean>[],
		BadType: [
			{label: '-999.9999', args: -999.9999},
			{label: '-1.1', args: -1.1},
			{label: '0.1', args: 0.1},
			{label: 'a positive decimal value', args: 5.5},
			{label: 'a positive decimal value', args: 9.99999},
			{label: 'apositive decimal value less than 1', args: 0.2271},
			{label: 'NaN', args: NaN},
			{label: 'bigger than MAX_SAFE_INTEGER', args: Number.MAX_SAFE_INTEGER + 1},
			{label: 'smaller than MIN_SAFE_INTEGER', args: Number.MIN_SAFE_INTEGER - 1},
			{label: 'epsilon', args: Number.EPSILON},
			{label: 'positive infinity', args: Number.POSITIVE_INFINITY},
			{label: 'negative infinity', args: Number.NEGATIVE_INFINITY}
		] as TestCaseData<number, boolean>[],
		Falsy: []
	} as const;
}
