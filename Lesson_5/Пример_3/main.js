function checkLetter() {
    var yourPhrase = prompt('Введите здесь слова для проверки гласных букв');

    var letter = yourPhrase.toLowerCase().split('');
    
        var letterFilter = letter.filter(function(lett) {
        for (var i = 0; i <= letter.length; i++)
        return lett[i] == 'а' || lett[i] == 'я' || lett[i] == 'о' || lett[i] == 'ё' || lett[i] == 'е' || lett[i] == 'э' || lett[i] == 'у' || lett[i] == 'ю' || lett[i] == 'и' || lett[i] == 'ы';
    });

    alert (letterFilter.length);
}

checkLetter()