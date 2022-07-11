const capitalize = require('./capitalize');

test('String "Nigga" should equal "NIGGA" ', () => {
    expect(capitalize('Nigga')).toMatch(/NIGGA/);
})