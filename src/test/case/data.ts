import type {RunnableTask} from '@toreda/types';
import type {TestCaseLabel} from './label';

/**
 * @category Test Cases
 */
export interface TestCaseData<ArgT, ReturnT> {
	id: string;
	label: TestCaseLabel | string;
	args: ArgT;
	result: ReturnT;
	parentId?: string;
	task: RunnableTask<ArgT, ReturnT>;
}
