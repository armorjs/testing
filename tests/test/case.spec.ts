import {TestCase} from '../../src/test/case';
import {type TestCaseData} from '../../src/test/case/data';

describe('TestCase', () => {
	let instance: TestCase;
	let data: TestCaseData<string, string>;

	beforeAll(() => {});

	beforeEach(() => {
		data = {
			input: {
				label: 'string here',
				value: 'string_value'
			},
			label: 'label here'
		};
	});
});
