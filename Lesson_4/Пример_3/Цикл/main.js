function sumTo(n) {
    var summ = 0;
    var i;
    for (i=1; i<=n; i++) {
        summ += i;
    }
    return summ;
}
alert (sumTo(100));