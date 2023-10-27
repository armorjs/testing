import type {TestCaseData} from './case/data';
import {TestInput} from './input';
import {testCaseMkLabel} from './case/mk/label';

/**
 * @category Test Cases
 */
export class TestCase<InputT, ReturnT> {
	public readonly testId: string;
	public readonly label: string;
	public readonly result: ReturnT;

	constructor(data: TestCaseData<InputT, ReturnT>) {
		this.testId = data.testId;
		this.label = testCaseMkLabel(data.label);
		this.result = data.result;
	}

	public mkInputLabel(data: TestCaseData<InputT, ReturnT>): TestInput<InputT> {
		if (data?.input?.label === undefined || data?.input?.label === null) {
			throw new Error(`TestCase:${this.testId}:input.label:missing`);
		}

		if (typeof data?.input?.label !== 'string') {
			throw new Error(`TestCase:${this.testId}:input.label:bad_format`);
		}

		return {
			label: data?.input?.label,
			value: data?.input?.value
		};
	}
}
