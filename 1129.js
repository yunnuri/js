let number = new Number(273);
let string = new String('안녕하세요');
let boolean = new Boolean(true);

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);


let number = 293.5210332;

console.log(number.toFixed(1));
console.log(number.toFixed(4));

let string = 'abcdefg';

string.toUpperCase();
console.log(string);


let string = '좋은 아침입니다';

if (string.indexOf('좋은') >= 0){
    console.log('좋은 아침입니다...!');
}
