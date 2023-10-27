import type {RunnableTask} from '@toreda/types';
import type {TestCaseLabel} from './label';
import {TestInput} from '../input';

/**
 * @category Test Cases
 */
export interface TestCaseData<InputT, ReturnT> {
	runnableId: string;
	testId: string;
	label: TestCaseLabel | string;
	input: TestInput<InputT>;
	result: ReturnT;
	parentId?: string;
	task: RunnableTask<InputT, ReturnT>;
}
