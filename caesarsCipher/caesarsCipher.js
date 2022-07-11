function rot13(str) {
    let len = str.length;
    let decript = '';
    let charCode = null, position = null;

    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        position = charCode + 13;

        if (position > 90) {
            position -= 91
            position += 65
        }
        decript += String.fromCharCode(position);
    }

    return decript;
}

export default rot13;