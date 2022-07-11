import analyser from './analyzeArray';

describe('AnalyzeArray Test', () => {
    test('[1, 2, 3, 4, 5] return ', () => {
        expect([1, 2, 3, 4, 5]).toBe({
            min: 1,
            max: 5,
            len: 5,
            sum: 15,
            avg: 5,
        })
    })
    test('[-6, 8, 5] return ', () => {
        expect([-6, 8, 5]).toBe({
            min: -6,
            max: 8,
            len: 3,
            sum: 7,
            avg: 2.33,
        })
    })
})