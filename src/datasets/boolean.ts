export interface BooleanItem {
    label: string;
    value: any;
}
export const TRUTHY_NONBOOLEAN = [
    {label: 'one (number)', value: 1}, 
    {label: 'empty object', value: {}}, 
    {label: 'single element array', value: ['a']}, 
    {label: 'string of length 1', value: 'a'}, 
    {label: 'empty array', value: []}
];
    
export const FALSY_NONBOOLEAN = [
    {label: 'null', value: null},
    {label: 'NaN', value: NaN},
    {label: 'undefined', value: undefined},
    {label: 'zero', value: 0},
    {label: 'negative zero', value: -0},
    {label: 'empty double qoute', value: ""},
    {label: 'empty single quote', value: ''},
    {label: 'empty backtick', value: ``}
];
export const BOOLEAN_TRUE = {label: 'true', value: true};

export const BOOLEAN_FALSE = {label: 'false', value: false};
