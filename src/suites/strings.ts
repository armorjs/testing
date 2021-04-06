import { EMPTY_STRING, HTML_UNESCAPED_INVALID, HTML_UNESCAPED_VALID, PADDED } from '../datasets/strings';

import { DatasetItems } from '../datasets/item';

export type StringFuncWrapper = (input: string) => any;

export async function stringArgValidation(fn: StringFuncWrapper, expectedResult: any, dataSet: DatasetItems<string>, label: string) {

    describe(label, () => {
        for (let data of dataSet) {
            it(data.label, () => {
                expect(fn(data.value)).toEqual(expectedResult);
            })
        }
    })
}
export async function emptySuite(fn: StringFuncWrapper, expectedResult: any) {
    stringArgValidation(fn, expectedResult, EMPTY_STRING, "empty string suite")
}

export async function padded(fn: StringFuncWrapper, expectedResult: any) {
    stringArgValidation(fn, expectedResult, PADDED, "padded suite")
}
export async function validHTML(fn: StringFuncWrapper, expectedResult: any){
    stringArgValidation(fn, expectedResult, HTML_UNESCAPED_VALID, "valid HTML suite")
}
export async function unvalidHTML(fn: StringFuncWrapper, expectedResult: any){
    stringArgValidation(fn, expectedResult, HTML_UNESCAPED_INVALID, "invalid HTML suite")
}


