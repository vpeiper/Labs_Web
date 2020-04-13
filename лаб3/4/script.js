"use strict";

let arr = [
    { value: 100, type: 'USD' },
    { value: 215, type: 'EUR' },
    { value: 7, type: 'EUR' },
    { value: 99, type: 'USD' },
    { value: 354, type: 'USD' },
    { value: 12, type: 'EUR' },
    { value: 77, type: 'USD' },
]


let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].value < 100 && arr[i].type == "USD") {
       sum += arr[i].value;
    }

}

alert("Сума всіх значень value у яких тип ‘USD’ - " + sum);

 
let newArr = arr.filter(currency => currency.type == "EUR")
alert("Довжина другого масиву - " + newArr.length);

for (let i = 0; i < newArr.length; i++) {

    newArr[i].value *= 2;
    alert(`${i + 1} значення = ` + newArr[i].value);
     
}