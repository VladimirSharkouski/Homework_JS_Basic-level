function pow(x, n) {
    var calculate = x; 
    var i;
    
    for (i=1; i<n; i++) {
        calculate *= x;
    }
    return calculate;
}

var x = prompt('Введите целое числовое значение X');
var n = prompt('Введите целое числовое значеие N -- степень возведения числа X');
if (x<1 || n<1) {
    alert('Вы ввели неверное значение');
} else {
    alert(pow(x, n));
}