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

import type {TestInput} from './test/input';

/**
 * @category Test Input - Booleans
 */
export class Booleans {
	public static Range = {
		Valid: [
			{label: 'true', value: true},
			{label: 'false', value: false}
		] as TestInput<boolean>[]
	} as const;
	public static Invalid = {
		Truthy: [
			{label: 'one (number)', value: 1},
			{label: 'empty object', value: {}},
			{label: 'single element array', value: ['a']},
			{label: 'string of length 1', value: 'a' as any},
			{label: 'empty array', value: []}
		] as TestInput<boolean>[],
		Falsy: [
			{label: 'null', value: null as any},
			{label: 'NaN', value: NaN as any},
			{label: 'undefined', value: undefined as any},
			{label: 'zero', value: 0},
			{label: 'negative zero', value: -0},
			{label: 'empty double qoute', value: ''},
			{label: 'empty single quote', value: ''},
			{label: 'empty backtick', value: ``}
		] as TestInput<boolean>[]
	} as const;
}
