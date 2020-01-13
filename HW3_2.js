// Как известно, элемент массива и объекта может быть любого типа данных JS, т. е. в коде может быть любое выражение, которое вычисляется в то или иное значение типа данных. А значит, мы можем применять функции для ввода данных типа confirm или prompt:
//     var text = "Enter a number";
// var arr3 = [+prompt(text), +prompt(text), +prompt(text)]; //вводим числа.
// Организуйте таким способом заполнение полей в объектах:

var notebook = {
    brand: prompt("Enter a brand"),
    type: prompt("Enter a type"),
    model: prompt("Enter a model"),
    ram: Number(prompt("Enter a ram")),
    size: prompt("Enter a size"),
    weight: Number(prompt("Enter a weight")),
    resolution: {
        width: Number(prompt("Enter a weight")),
        height: Number(prompt("Enter a height")),
    },
};
console.log(notebook);
var phone = {
    brand: prompt("Enter a brand"),
    model: prompt("Enter a model"),
    ram: Number(prompt("Enter a ram")),
    color: prompt("Enter a color")
};
console.log(phone);

var person = {
    name: prompt("Enter a name"),
    surname: prompt("Enter a surname"),
    married: confirm('married or not?')
};

// Добавьте персоне гаджеты, используя новые поля smartphone и laptop в объекте персоны
// Добавьте владельца в гаджеты, используя новое поле owner в объектах телефона и ноутбука.
//     обратите внимание на цикличность ссылок в объектах, если вы все сделали правильно, то

// person.smartphone.owner.laptop.owner.smartphone == person.smartphone

person.smartphone = {'owner': person};
person.laptop = {'owner': person};

console.log(person);