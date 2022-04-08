import {Log} from '@toreda/log';
import type {TestCases} from '../cases';

/**
 * Arguments used by the TestSet constructor to initialize TestSet class
 * properties. Any optional arguments not provided are initialized with
 * default values.
 *
 * @category Test Sets
 */
export interface TestSetOptions<ValueT, ResultT> {
	log?: Log;
	cases?: TestCases<ValueT, ResultT>;
}
