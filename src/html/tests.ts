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

import type {TestCaseData} from '../test/case/data';
import {TestInput} from '../test/input';

/**
 * @category Dataset - HTML
 */
export class HtmlTests {
	public static JavascriptSnippet = {
		Valid: [
			{label: 'example1', value: 'str.toUpperCase()'},
			{label: 'example2', value: 'let obj={1: 125, 2: 149.7};'},
			{label: 'example3', value: "alert('Welcome')"},
			{label: 'example4', value: "alert('Welcome')"}
		] as TestInput<string>[],
		Invalid: [
			{label: 'example1', value: 'str.toUpperCase;'},
			{label: 'example2', value: 'str.tolowercase();'},
			{label: 'example3', value: 'let a={1=125, 2=149.7};'},
			{label: 'example4', value: 'alert(((();'}
		] as TestInput<string>[]
	} as const;

	public static Document = {
		UnescapedValid: [
			{
				label: 'example1',
				args: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <b><p><div></div></p></b>
                </body>
            </html>`
			},
			{
				label: 'example2',
				args: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <div> <input /> <button></button></div>
                </body>
            </html>`
			},
			{
				label: 'example3',
				args: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <ul><li></li><li></li><li></li></ul>
                </body>
            </html>`
			},
			{
				label: 'example4',
				args: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <div><a /></div>
                </body>
            </html>`
			}
		] as TestCaseData<string, boolean>[],
		UnescapedInvalid: [
			{
				label: 'example1',
				args: `<html>
                    <head>
                        <title></title>
                    </head>
                    <body>
                        <p><div><div><b></div></p></b>
                    </body>
                </html>`
			},
			{
				label: 'example2',
				args: `<html>
                <head>
                    <title></title>
                </head>
                <body>
                    <tr><td><td></td></tr>
                </body>
            </html>`
			},
			{
				label: 'example3',
				args: `<html>
                    <head>
                        <title></title>
                    </head>
                    <body>
                        <div><a></div>
                </html>`
			},
			{
				label: 'example4',
				args: `<html>
                    <head>
                    <body>
                        <div>
                            <h1><span><li></span></h1>
                    </body>
                </html>`
			}
		] as TestCaseData<string, boolean>[]
	};
}
