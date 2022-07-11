import caesarsCipher from './caesarsCipher';


describe('caesarsCipher test cases : ', () => {
    test('A should equal N', () => {
        expect(caesarsCipher('A')).toMatch(/N/);
    })
    
    test.skip('X should equal J', () => {
        expect(caesarsCipher('X')).toMatch(/J/);
    })
})