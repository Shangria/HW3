// progression sum
// Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for.
var sum=0;
var n=20;
for (var i=1;i<n; i=i+3){
    sum+=i;
}
console.log(sum);