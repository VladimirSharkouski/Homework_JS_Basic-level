function pow(x, n) {
    if (n != 1) {
        return x*pow(x, n-1);
    } else {
        return x;
    }
}
var x = prompt ('Введите число');
var n = prompt ('Введите число - степень');
    if (x<1 || n<1) {
        alert ('Вы ввели неверное число');
    } else {
        alert (pow(x, n));
    }