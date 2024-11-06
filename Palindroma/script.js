const parola = prompt('inserisci una parola e ti diro se risulta palindorma');
console.log(palindromo(parola));


function palindromo(word){
   word = word.toLowerCase();
   const reverseword = word.split('').reverse().join('');
   const result = (word === reverseword);
   return result;
}