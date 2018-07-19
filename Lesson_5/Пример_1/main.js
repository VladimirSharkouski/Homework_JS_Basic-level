function wordCheck (){
    var wordIn = prompt('Введите слово-палиндром');
    var word = wordIn.toLowerCase(),
        arr = word.split('').reverse().join('');

    if (word === arr) {
        alert('Слово палиндром');
    }   else {
        alert('Предложенное слово не является палиндромом');
    }
}

wordCheck();
