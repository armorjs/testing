import type {Dataset} from '../dataset';
import {Empty} from '../empty';
import type {TestCaseData} from '../test/case/data';

/**
 * @category Dataset - Floats
 */
export class FloatTests implements Dataset {
	public static Valid = {
		Positive: [
			{label: '0', args: 0},
			{label: '0.1', args: 0.1},
			{label: '0.255', args: 0.255},
			{label: '0.5', args: 0.5},
			{label: '0.75', args: 0.755},
			{label: '0.99991', args: 0.99991},
			{label: '1', args: 1},
			{label: '1.55', args: 1.55},
			{label: '15', args: 15},
			{label: '15.9999', args: 15.9999},
			{label: '30.1', args: 30.1},
			{label: '100', args: 100},
			{label: '1000', args: 1000},
			{label: '100000', args: 100000},
			{label: 'MAX_SAFE_INT', args: Number.MAX_SAFE_INTEGER},
			{label: 'MIN_SAFE_INT', args: Number.MIN_SAFE_INTEGER}
		] as TestCaseData<number, boolean>[]
	} as const;
	public static Invalid = {
		NonFinite: [
			{label: 'positive infinity', args: Number.POSITIVE_INFINITY},
			{label: 'negative infinity', args: Number.NEGATIVE_INFINITY}
		] as TestCaseData<number, boolean>[],
		BadType: [
			{label: 'zero (string)', args: '0' as any},
			{label: 'empty array', args: Empty.array.value as any},
			{label: 'empty object', args: Empty.object.value as any},
			{label: 'empty string', args: Empty.string.value as any}
		] as TestCaseData<number, boolean>[],
		Falsy: [] as TestCaseData<number, boolean>[]
	} as const;
}
