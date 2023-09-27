console.log ('my'+'cat')
console.log ('1'+'2')
console.log ("ellie's\n\tbook")

console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3);

let counter = 2;
const preIncrement = ++counter;
console.log('preIncrement: {preIncrement}, counter: {counter}')
const postIncrement = counter ++;
console.log ('postIncrement: {potIncrement}, counter: {counter}')
const preDecrement = -- counter; 
console.log ('preDecrement: {preDecrement}, counter: {counter}')
const postDecrement = counter --;
console.log ('postDecrement: {postDecrement}, counter: {counter}')

let x = 3;
let y = 6;
x+= y;
x-= y;
x*=y;
x/= y;

console.log(10<6);
console.log(10<= 6);
console.log(10>6);
console.log(10>= 6);

//6. logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// or
console.log("or: {value1 || value2 || check()}");

//and
console.log("and: {value1 && value2 && check()}");

function check() {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('ㅠㅅㅠ');
    }
    return true;
}
//not 
console.log(!value1);

//equality
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const ellie1 = {name: ' ellie'};
const ellie2 = {name: ' ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

console.log(0 == false);
console.log(0 === false);
console.log(''== false);
console.log(''===false);
console.log(null == undefined);
console.log(null === undefined);

const name = 'ellie';
if (name === 'ellie') {
    console.log('welcome,Ellie!');
} else if (name ==='coder'){
    console.log('you are amazing coder');
}else {
    console.log('unkwnon');
}