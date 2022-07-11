import analyser from './analyzeArray';

describe('AnalyzeArray Test', () => {
    test('[1, 2, 3, 4, 5] return ', () => {
        expect(analyser([1, 2, 3, 4, 5])).toEqual({
            min: 1,
            max: 5,
            len: 5,
            sum: 15,
            avg: 3,
        })
    })
    test('[-6, 8, 5] return ', () => {
        expect(analyser([-6, 8, 5])).toEqual({
            min: -6,
            max: 8,
            len: 3,
            sum: 7,
            avg: 2.33,
        })
    })
})