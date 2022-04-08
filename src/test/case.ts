import type {Outcome} from '../outcome';
import {Runnable} from '@toreda/types';
import type {TestCaseData} from './case/data';
import {testCaseMkLabel} from './case/mk/label';

/**
 * @category Test Cases
 */
export class TestCase<ArgT, ReturnT> extends Runnable<ArgT, ReturnT> {
	public readonly label: string;
	public readonly args: ArgT;
	public readonly result: ReturnT;

	constructor(data: TestCaseData<ArgT, ReturnT>) {
		super(data.id, data.task);

		this.label = testCaseMkLabel(data.label);
		this.result = data.result;
		this.args = data.args;
	}
}
