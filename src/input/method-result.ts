export interface TestInputMethodResult {
	instance: any|null;
	func: any;
	args: any[];
	expectedResult: any;
	expectedResultType?: string;
}