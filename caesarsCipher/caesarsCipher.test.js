import { caesarsCipher } from './caesarsCipher';
test('A should equal N', () => {
    expect(caesarsCipher('A')).toBe('N')
})