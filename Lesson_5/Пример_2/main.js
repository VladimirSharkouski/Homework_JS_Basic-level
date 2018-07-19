function wordCheck (){
    var wordInFirst = prompt('Введите первое слово-анаграмму для сравнения');
        var wordFirst = wordInFirst.toLowerCase().split('').sort().join('');
    
    var wordInSecond = prompt('Введите второе слово-анаграмму для сравнения');
        var wordSecond = wordInSecond.toLowerCase().split('').sort().join('');

    if (wordFirst === wordSecond) {
        alert('Введенные слова являются анаграммой');
    }   else {
        alert('Предложенные вами слова не являются анаграммой');
    }
}
wordCheck()