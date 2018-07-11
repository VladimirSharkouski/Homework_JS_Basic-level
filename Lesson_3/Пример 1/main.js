var name = prompt('Добрый день, введите Ваш логин');

    if (name == 'Админ') {
        var pswrd = prompt('Введите пароль');
            if (pswrd == 'Черный Властелин') {
                alert('Добро пожаловать!');
            } else if (pswrd == null) {
                alert('Пароль неверен');
            } else {
                alert ('Я Вас не знаю');
            }
        
}   else if (name = 'null') {
        alert('Вход отменен');
}   else {
        alert('Я Вас не знаю');
}