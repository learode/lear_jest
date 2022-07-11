function rot13(str) {
    let len = str.length;
    let encript = '';
    let charCode = null, position = null;

    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);

        if (charCode > 90 || charCode < 65) {
            encript += String.fromCharCode(charCode);
            continue;

        }


        position = charCode + 13;
        if (position > 90) {
            position -= 91
            position += 65
        }
        
        
        encript += String.fromCharCode(position);
    }

    return (encript);
}

export default rot13;