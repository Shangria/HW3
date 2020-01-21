// chess one line
// Сформировать строку " # # # # # " с помощью цикла for. Длина строки может быть четной и нечетной, и указывается в одном месте в коде.
var symbol = '#';
var string = ' ';
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        string += symbol;
    }
    if (i % 2 !== 0) {
        string += ' ';
    }
}
console.log(string);