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

import {EMPTY_STRING, HTML_UNESCAPED_INVALID, HTML_UNESCAPED_VALID, PADDED} from '../dataset/strings';

import {DatasetItems} from '../dataset/items';

export type StringFuncWrapper = (input: string) => any;

export async function stringArgValidation(
	fn: StringFuncWrapper,
	expectedResult: any,
	dataSet: DatasetItems<string>,
	label: string
) {
	describe(label, () => {
		for (let data of dataSet) {
			it(data.label, () => {
				expect(fn(data.value)).toEqual(expectedResult);
			});
		}
	});
}
export async function emptySuite(fn: StringFuncWrapper, expectedResult: any) {
	stringArgValidation(fn, expectedResult, EMPTY_STRING, 'empty string suite');
}

export async function padded(fn: StringFuncWrapper, expectedResult: any) {
	stringArgValidation(fn, expectedResult, PADDED, 'padded suite');
}
export async function validHTML(fn: StringFuncWrapper, expectedResult: any) {
	stringArgValidation(fn, expectedResult, HTML_UNESCAPED_VALID, 'valid HTML suite');
}
export async function unvalidHTML(fn: StringFuncWrapper, expectedResult: any) {
	stringArgValidation(fn, expectedResult, HTML_UNESCAPED_INVALID, 'invalid HTML suite');
}
