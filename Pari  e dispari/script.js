const userChoice = prompt('scegli tra pari e dispari');
const userNum = parseInt(prompt('dimmi un numero tra 1 e 5'));

const pcRandom = getRandomInt(1, 5);

const somma = pcRandom + userNum;

const pariDispari = evenOdd(somma);
console.log(`La somma dei numeri risulta ${somma} di fatto il numero  è ${pariDispari}`);
if (pariDispari === userChoice) {
    console.log('Hai vinto')
} else {
    console.log('Ha vinto il PC')
}



/**
 * Genera un numero intero randomico compreso tra max e min
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * se numero è pari ritorna pari, altrimenti dispari
 * @param {number} numToCheck 
 * @returns {string}
 */
function evenOdd(numToCheck) {
    let result = 'dispari';
    if (numToCheck % 2 === 0) {
        result = 'pari';
    }
    return result;
}


