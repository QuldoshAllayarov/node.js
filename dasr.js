//>>>>>>>>>>>>> Non Primitive

/*
const obj1 = {
    name: 'John',
    age: 24,
    address: 'Chilanzar'
}

let obj2 = obj1;

obj2.name = 'Alisa';

console.log(obj1);

*>>>>>>>>>>>>>> Varebles
var ism = "Quldosh";

console.log("Allayarov " + ism);

var son = 10;
var yangison = 20;
son -= yangison;
console.log(son);
*

let salom = "Salom";
let integer = 12;
let float = 23.44;
let bool = true;


let data = "Javascript Organayapmiz",
    userData = 13,
    db = "MongoDB",
    float1 = 12.33;

console.log(data);
console.log(userData);
console.log(db);
console.log(float1);
*/


/*>>>>>>>>>>>> Qarshilashtirish Operatorlari
* == tengmi 
* === malimot turi bilan birga tengmi
* != teng emasmi
* !== malumot turi bilan birga teng emasmi
* > kattami 
* < kichikmi 
* >= katta yoki tengmi
* <= kichik yoki tengmi
*

let son = 2;
console.log(son >= 1);

/*>>>>>>>>>>>>>>>>>>>>>> and vs or (va --- yoki)
* &&  (va)
* || (yoki)
*
let son1 = 1;
let son2 = 3;
let son3 = 4;

let holat = (son1 === son2) || (son1 < son3) || (son2 === son3);

console.log(holat);
*/
/*
//>>>>>>>>>>>>>if else 

let yomgir = false;
let qor = false;


if(yomgir)
    console.log("Soyabon Ol");
else
    if(qor)
        console.log("Qalin Kiyinib Ol");
    else
        console.log("Soyabon Shart Emas");

*
//>>>>>>>>>>>> function 
function salomBer(){
    console.log("Hello !!!");
}

let salomOl = function () {
    //console.log("Assalomu Alaykum !!!");
    return 12;
}
console.log(salomOl())
salomOl()
salomBer()
*
//>>>>>>>>>> collback function------->>> bu function ichida yana function ishlatiladi

function f(num1,num2,num3) {
    console.log(num1+num2*num3);
}
f(12,33,400);

function f1(text, collback) {
    console.log(text);
    collback();
}
function qosh() {
    console.log("Qoshish Function 11")
}
f1("Textimiz",qosh)
*
//>>>>>>>>>>> setTimeout ----->>>

function f() {
    setTimeout(function () {
        console.log("Hello");
    },1000)
}
f();

let fnc = function () {
    console.log("Hello Set Time Out");
}
setTimeout(fnc,3000);
*


//>>>>>>>>>>>setInterval ------->>>>>   clearInterval------>>> bilan toxtamiz   

let son1 = 1;
let interval = setInterval( function (){
    if(son1 === 5)
        clearInterval(interval);
    console.log("Hello " + son1);
    son1++; // son1 = son1 + 1 degani
},1000)

interval

*
////>>>>>>>>collback function -------->>> bu funksiys ketma-ketligda ishlaydi
function f1(collback){
    setTimeout(function(){
        console.log("f1")
        collback(f3)
    },1000)
}
function f2(collback){
    setTimeout(function(){
        console.log("f2")
        collback()
    },2000)
}
function f3(){
    console.log("f3")
}

f1(f2)
****
function f1(collback){
    setTimeout(function(){
        console.log("f1")
        collback(f3)
    },1000)
}
function f2(collback){
    setTimeout(function(){
        console.log("f2")
        collback()
    },2000)
}
function f3(){
    console.log("f3")
}

f1(f2)
****/
/*
//>>>>>>>>>> scope ---> {}-----> Scopeni ichidagi uzgaruvchi 
function f1(){
    let x = "Scopeni Ichida Uzgaruvchi !";
    console.log(x);
}
function f2(){
    let x = "Scopeni Ichidagi Uzgaruvchi !";
    console.log(x);
}

f1();
f2();

let x = "Scopedan Tashqarida X !"; // let ---->>> xato beradi >>>SyntaxError: Identifier 'x' has already been declared
let x = "scope ";               // var--->> pasdagi qiymatni oladi consolga chiqaradi
console.log(x);
*/
///>>>>>>>>>>>>>>>>>> Loop-----for
/*
for (let i=0;i<10;i++){
    console.log("Hello !",i);
}
*/
///>>>>>>>>>> loop ---- while
/*
let i = 0;
let ism = "Quldosh";
while(i < 10){
    console.log(i,"-Element");
    i++;
}
*/
//>>>>>>> loop ---- do ----while
/*
let k = 1;
do{
    console.log(k)
    k++;
}while(k < 10);

*/
//>>>>>>>>>>> Object 
/*
let inson = {
    age : 22,
    name : "Quldosh",
    color : "black",
    yurish : function(){
        console.log("Yurilmoqda..........")
    }
}
inson.age = 90;

console.log("Insonning age",inson.age);
console.log("Insonning name",inson.name);
console.log("Insonning Color",inson.color);
inson.yurish();
*/
//>>>>>>>>>>>> Seriya
let seriya = ['Quldosh',11,false,34.5,"Allayarov"];
//console.log(seriya);
//console.log(seriya.length);
/*
for(let i=0;i<seriya.length;i++){
    console.log(seriya[i]);
}
*/
seriya.forEach(function(j){
    console.log(j);
})
 


















































