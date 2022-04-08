export interface MethodResult {
	instance: any | null;
	func: any;
	args: any[];
	expectedResult: any;
	expectedResultType?: string;
}
