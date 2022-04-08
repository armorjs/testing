import type {TestCaseLabel} from '../label';

/**
 *
 * @param data
 * @returns
 *
 * @category Test Cases
 */
export function testCaseMkLabel(data: TestCaseLabel | string): string {
	if (typeof data === 'string') {
		return data;
	}

	let label: string = '';
	if (typeof data.prefix === 'string') {
		label += data.prefix;
	}

	label += ` ${data.content}`;

	if (typeof data.postfix === 'string') {
		label += ` ${data.postfix}`;
	}

	return label;
}
