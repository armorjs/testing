import type {Dataset} from '../dataset';

export class NumberTests implements Dataset {
	public static Valid = {
		Truthy: [],
		Standard: []
	} as const;
	public static Invalid = {} as const;
}
