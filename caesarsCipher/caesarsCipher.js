function rot13(str) {
    let len = str.length;
    let decript = '';
    let charCode = null, position = null;

    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        position = charCode + 13;

        if (position > 90) {
            position = (65 + (13 - 90 - charCode))
        }
    }

    return String.fromCharCode(position);
}

export default rot13;