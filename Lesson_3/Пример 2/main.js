var youLogin = prompt('Введите логин');
    var message = (youLogin === 'Вася') ? 'Привет' :
        (youLogin === 'Директор') ? 'Здравствуйте' :
        (youLogin === '') ? 'Нет логина' :
        '';
alert(message);