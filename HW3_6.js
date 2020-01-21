// array fill nopush
// Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.

var arr = [];
var input = prompt('введите что-нибудь');
while (input != undefined) {
    var nextIndex=arr.length;
    arr[nextIndex]=input;
    input = prompt('введите что-нибудь');
}
console.log(arr);

