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

import {Empty} from './empty';
import type {TestInput} from './test/input';

/**
 * @category Test Cases - Floats
 */
export class Floats {
	public static Positive = {
		CommonValid: [
			{label: '0', value: 0},
			{label: '0.1', value: 0.1},
			{label: '0.255', value: 0.255},
			{label: '0.5', value: 0.5},
			{label: '0.75', value: 0.755},
			{label: '0.99991', value: 0.99991},
			{label: '1', value: 1},
			{label: '1.55', value: 1.55},
			{label: '15', value: 15},
			{label: '15.9999', value: 15.9999},
			{label: '30.1', value: 30.1},
			{label: '100', value: 100},
			{label: '1000', value: 1000},
			{label: '100000', value: 100000},
			{label: 'MAX_SAFE_INT', value: Number.MAX_SAFE_INTEGER},
			{label: 'MIN_SAFE_INT', value: Number.MIN_SAFE_INTEGER}
		] as TestInput<number>[]
	} as const;
	public static NonFloat = {
		NonNumber: [
			{label: 'zero (string)', value: '0' as any},
			{label: 'empty array', value: Empty.array.value as any},
			{label: 'empty object', value: Empty.object.value as any},
			{label: 'empty string', value: Empty.string.value as any}
		] as TestInput<number>[],
		InvalidNonFloat: [] as TestInput<number>[]
	} as const;
	public static NonFinite = {
		Invalid: [
			{label: 'positive infinity', value: Number.POSITIVE_INFINITY},
			{label: 'negative infinity', value: Number.NEGATIVE_INFINITY}
		] as TestInput<number>[]
	} as const;
}
