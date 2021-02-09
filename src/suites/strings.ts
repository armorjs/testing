export interface StringTest {
    label: string;
    input: any;
    expectedResult: any;
}

export type StringFuncWrapper = (input: string) => any;

export async function stringArgValidation(fn: StringFuncWrapper, val: StringTest) {
    
    describe('checking for empty strings', () => {
        
        it(val.label, () => {
            expect(fn(val.input)).toEqual(val.expectedResult)
        })
    })

}
