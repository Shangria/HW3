// array fill
// Создайте пустой массив и добавляйте в него элементы, пока пользователь не нажмет Отмена в очередном prompt. Используйте push для удобства: push
var arr = [];
var i;
while (i = prompt('введите что-нибудь')) {
    arr.push(i)
}
console.log(arr);