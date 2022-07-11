import reverseStr from "./reverseString";

describe('Reverse String test', () => {
    test('mul should equal lum', () => {
        expect(reverseStr('mul')).toMatch(/lum/);
    })
    test.skip('franck should equal kcnarf', () => {
        expect(reverseStr('franck')).toMatch(/kcnarf/);
    })
    test.skip('lumkcnarf should equal mulfranck', () => {
        expect(reverseStr('lumkcnarf')).toMatch(/mulfranck/);
    })
    test.skip('to go should equal og ot', () => {
        expect(reverseStr('to go')).toMatch(/og ot/);
    })
})