// infinite probability
// Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9. Код должен подсчитывать количество итераций и вывести это число с помощью alert.

var i = 0;
while (true) {
    if (Math.random() > 0.9) {
        alert(++i);
        break;
    } else i++;
}
