const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

/*function decode(expr) {
    let array = [];
    array = convertStringTo10SymbolInElementsOfArray(expr)
    let numberArray = array.map(element => element.replace(/^0+/, ''))
    let morseArray = numberArray.map(el => el.replaceAll(11, '-').replaceAll(10, '.').replaceAll('**********', ' '))
    let decodedArray = convertMorseArrayToDecodedArray(morseArray)
    return decodedArray.join('')
}

function convertStringTo10SymbolInElementsOfArray(expr) {
    let array = [];
    let index = 0;
    while (index < expr.length) {
       array.push(expr.slice(index, index + 10));
       index += 10;
    }
    return array
}

function convertMorseArrayToDecodedArray(array) {
    let decodedArray = array.map(el => {
        if (el === ' ') {
            return ' '
        } else {
            return MORSE_TABLE[el]
        }})
    return decodedArray
    }*/

function decode(expr) {
    let array = [];
    let decodedArray;
    for (let i = 0; i < expr.length; i += 10) {
       array.push(expr.slice(i, i + 10))
       decodedArray = array.map(element => element.replace(/^0+/, '').replaceAll(11, '-').replaceAll(10, '.').replaceAll('**********', ' ')).map(el => el === ' ' ? ' ' :  MORSE_TABLE[el]);
    }
    return decodedArray.join('')
}

module.exports = {
    decode
}