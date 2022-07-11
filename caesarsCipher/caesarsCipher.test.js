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
})