import caesarsCipher from './caesarsCipher';


describe('caesarsCipher test cases : ', () => {
    test('A should equal N', () => {
        expect(caesarsCipher('A')).toMatch(/N/);
    })

    test('AB should equal NO', () => {
        expect(caesarsCipher('AB')).toMatch(/NO/)
    })
    
    test('X should equal J', () => {
        expect(caesarsCipher('X')).toMatch(/K/);
    })

    test('AB X should equal NO K', () => {
        expect(caesarsCipher('AB K')).toMatch(/NO X/);
    })
    test('STUDY HARD! should e FGHXL UNEQ!', () => {
        expect(caesarsCipher('STUDY HARD!')).toMatch(/FGHQL UNEQ!/);
    })
    test('@ZHYSENAPX. should equal @MULFRANCK.', () => {
        expect(caesarsCipher('@ZHYSENAPX.')).toMatch(/@MULFRANCK./);
    })
});

describe('Now this works', () => {
    test('Encrypt "THIS NIGGA (@_@)"', () => {
        expect(caesarsCipher('THIS NIGGA (@_@)')).toMatch(/./g);
    })
})