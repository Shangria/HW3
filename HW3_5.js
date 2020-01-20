// array fill
// Создайте пустой массив и добавляйте в него элементы, пока пользователь не нажмет Отмена в очередном prompt. Используйте push для удобства: push
var arr = [];
var inp = prompt('введите что-нибудь');
while (inp != undefined) {
    arr.push(inp);
    inp = prompt('введите что-нибудь');
}
console.log(arr);


