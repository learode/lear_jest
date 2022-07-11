import reverseStr from "./reverseString";

describe('Reverse String test', () => {
    test('mul should equal lum', () => {
        expect(reverseStr('mul')).toMatch(/lum/);
    })
    test('franck should equal kcnarf', () => {
        expect(reverseStr('franck')).toMatch(/kcnarf/);
    })
    test('kcnarflum should equal mulfranck', () => {
        expect(reverseStr('kcnarflum')).toMatch(/mulfranck/);
    })
    test('to go should equal og ot', () => {
        expect(reverseStr('to go')).toMatch(/og ot/);
    })
})