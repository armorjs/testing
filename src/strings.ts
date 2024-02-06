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
 * @category Test Cases - Strings
 */
export class Strings {
	public static Padding = {
		Variable: [
			{label: 'one-space', value: ' '},
			{label: 'two-space', value: '  '},
			{label: 'three-space', value: '   '},
			{label: 'four-space', value: '    '},
			{label: 'five-space', value: '     '}
		] as TestInput<string>[]
	} as const;
	public static Emojis = {
		Single: [
			{label: 'wink', value: 'U+1F609'},
			{label: 'sad', value: 'U+1F625'},
			{label: 'mask', value: 'U+1F637'},
			{label: 'joy', value: 'U+1F604'},
			{label: 'smirk', value: 'U+1F60F'}
		] as TestInput<string>[],
		Multi: [
			{label: 'happy-set', value: 'U+1F603 U+1F604 U+1F601 U+1F606 U+1F923'},
			{label: 'sad-set', value: 'U+1F615 U+1F61F U+1F641 U+2639 U+1F62E'},
			{label: 'charactor-set', value: 'U+1F476 U+1F9D4 U+1F466 U+1F471'},
			{label: 'icons-set', value: 'U+1F6B2 U+1F6A7 U+26F5 U+1F6A2 U+2708'}
		] as TestInput<string>[]
	} as const;
	public static AlphaNumeric = {
		Valid: [
			{label: 'alphanumeric string (10 chars)', value: 'PXPrpSTs7g'},
			{
				label: 'alphanumeric string (12 chars)',
				value: 'RkAAkf9IMIvP'
			},
			{
				label: 'alphanumeric string (15 chars)',
				value: 'ZRvOQf2Jr7zw7ZW'
			},
			{
				label: 'alphanumeric string (20 chars)',
				value: 'lfavHX2qFEV7StV1g3ki'
			},
			{
				label: 'alphanumeric string (25 chars)',
				value: '7e5cJEczvmSig1N0QIYm81TBB'
			},
			{
				label: 'alphanumeric string (30 chars)',
				value: 'WinjDkkKKydLFtgjn8tY7TMM4nwJw8'
			},
			{
				label: 'alphanumeric string (40 chars)',
				value: 'Muf48UlZZJAxiS8C6pHR9KRBm8Lkwf34h5FU1dU5'
			},
			{
				label: 'alphanumeric string (50 chars)',
				value: 'MGJANgqkS6G7iLPpHkl3lk3bULcg2yvZyQoUfPPxsDYdVO7eHW'
			},
			{
				label: 'alphanumeric string (60 chars)',
				value: '076F6r6Z0wrRVdFu7Xq9nfCYKdHhB5Du0KrIADLstqCL9mBiGmfYe3KBISaQ'
			},
			{
				label: 'alphanumeric string (70 chars)',
				value: '2ZPCgcgbGHEnodCReRNiVw7DsN8ME1vvaWCXbDYdFUhELP9QUWE1KnVP0SIU19wIf9Bp7q'
			},
			{
				label: 'alphanumeric string (80 chars)',
				value: 'soAVmohU7rYdyNYjTaOkXQ1dIxdBMpxIh8kNzjH4BGLfo6PdzoiCtGN0BpgxVD5sVuTmL2UwkA8FSdjs'
			},
			{
				label: 'alphanumeric string (90 chars)',
				value: 'gz9MRREcJEPfGFYYJbbomebZl43vMJIu4hJE9LpMaJ8jcud0dhmglRJKrVzsf5gSzTSNfqhoiZpajGBfnOGPvv5Tn8'
			},
			{
				label: 'alphanumeric string (100 chars)',
				value: 'dz2E3xlMz3UDQWkOQG7OEGiId0bWLmHK0Zut559KtvrKK8toIhP9Kyp9Ls9AICuQrbrAoqCfC1JfnEiw8vNjFrfV5XQmC0ktl9h0'
			},
			{
				label: 'alphanumeric string (120 chars)',
				value: 'BAHMOIbDYF8ieqo0heFwMJeGm2csQ5nCnXEplSao04TPe8Tw5B0tgh7nZzfDiSwGsi984fIgNb5ryw8IEkAMYqHkSnUhYYthFKZhTXAs1sCCk2nPTs8yqLJn'
			},
			{
				label: 'alphanumeric string (150 chars)',
				value: 'IoBlY5BFoj6GDf8j30ZIgm38WTSK1OBXVksKp9gAulclQNpa16FSl4sW1oIjGoekyETNd4rukg6erGI7G2YdrCGvTRXi555VGCXgtBtwK77FInqD90sRK6Z7nyvimbhO91OHiXvzrhdPGkY7uNnZTZ'
			},
			{
				label: 'alphanumeric string (200 chars)',
				value: 'dbXfEgiyWbJVWC4tdAD70WDPTdpoM5OkMF0TCBIflSNN4ynrkbMRgI2miVKEyAOnDLCipM3p5q8V0HshFwjppDGTCjBBRTmWKmGE9Qd3vVXiAGJUfmLrFZC3PTENWm1D6xHHV6IJdaVrVIMKJGFtyQYvysEISh4mMzIJx5lLhBg0RljBHVtcD5NMjss5LBdELUQP378P'
			},
			{
				label: 'alphanumeric string (400 chars)',
				value: 'C7xgaOmpsLgDK2Mz287VAdSfJZRVHY07RxnlP9vyvo5vjNF9zqrrwL4PyndfPpaqGOxmDpbrnAmW23WkDXhOuHDpHqAz2BFyOMXlqyzPT5rl5yzR7Jqh76eLILa9PZy4T0UtgmtbCGgxeGDMhSlBo1kGWs6zRDmyg74mHoIGQtbYymavKqyptmNGyg6iDMPYLk8lym7GLbWBJ4eXN9FvyaR4Sjbz0ijfiE4ZRBQLMnqGvYyzGC5Lr0fUDdOu9rKbjz11uw4PICLgXmZq0Po0OoYpgpgQ1B7HLPuFTp3DU1EjkQ3VWuQiNA6u2ObOntao4Va8GNpShiMt97VVM59LkSC4U742Ox3VrV61cCc4PKIay67vGYylAlOItj8Kh1IGBOoefooU0Mh00Ewt'
			},
			{
				label: 'alphanumeric string (1001 chars)',
				value: '0lnzQt2T2fbvC3YAYQP33t1hJW1zYKYbth1fv5MFJzBvYgKfdGo0Xbq9HPkN0keCzDi3CqoJb0LZpd9Py6AfJ3x9l7vU0NeakJ7IXN9ETj4GYwhMP63vPWAEteJH5M94B4LTjBpW92zCd1zTXabRHyIk6EiswNbBG7hpA14XitipLNdikseWA5RHcNV4FvTDLDsBSfD4hIoxNNWQniouG03cNoysjpjEByYnGuoJL6kw8CQXqeqY5zecjz3FD39SNxCsAj3KGNk8kOBqhVMmiCDJw7Mh7S6V71N4eDfcCwfAF8QviZYzJiBhmEYLY5Uj0HKRe7hQlMv3RjaFh4kZHqYUwPYGDdw6zVHLDTssKkOyfgoyHikIsX6u5k3s0puf6KiUVeLOiHLX9h9v2EXiQPnBal1QwhsyJncwW4Csma2k6rm2W8JjtU78OfV1gEOokHpivMkjlVwyql6Ha0UskrJtzsV78KVgRmsULDiy8Rpy4NpWnear1GBkLz0K24nd8LnGEjTXuZyiEYbVdWsZX3c8cJTq3gWX82hAtQw8KuGYInNOFlpvYArLk1Jy1RY4Am6AAiSr90quTGdYMEodC461scfNghwRiCL2l2nPUIcbLNO1CWZgBgHRTw5CSaYYOuIEcmzseqv7G7MdRSDfBw5ey1AUNF6O2TY2Wx9VWxMK5V1sWnoOTFby2nuG352yRsvsZwioY9juXzbc5B4R3hKkfk761Cf63y805Mh4IJxpbhtW1H8CsHRGOpajdmkxLg54DDUL12EBdy9eEM2eqcV9CrSBo7JByF8W0bfmjSPaaPohnNOIhwKgstLQuF04pzbAHdyjS1CW3mPowmObVAp3JhFBD1c4saWJwf6OeBfM8qAcmtielhMsaIMWq2KRXHup0U4u1aKGnZ8hGTXnhxN8p9rSSzEhBcdv7Oql8sbYTPAu3qpr0JyvAN8LhIBJg2sdpd1LZ9SptJyUJ0bxOuQmdlqpEDRQ8txtdEEDF'
			}
		] as TestInput<string>[]
	} as const;
}
