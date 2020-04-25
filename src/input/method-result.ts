export interface ArmorTestInputMethodResult {
	instance: any|null;
	func: any;
	args: any[];
	expectedResult: any;
	expectedResultType?: string;
}