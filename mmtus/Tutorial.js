//String Operators
let agee = 27;
let info = "My name is Daniel, Iam "+ agee +" years old ";
console.log(info);

let numbers = 4 + "" + 5;
console.log(numbers);

//Conditional Statements
let x = 10;
let y = 50;
// "===" check if it is equal to each other and if it has the same data type
// "||" refers to the same as "or" and one operator needs to be true
if (x === 10 || y < 20)
{
    console.log("True!");
}
// "&&" refers to the same as "And" and both operators need to be the same
if (x === 10 && y < 20)
{
    console.log("True!");
}
/// if and elseif statements
if (x === 10 && y < 20)
{
    console.log("If!");
} else if (x > 50)
{
    console.log("Else if!");
}
else
{
    console.log("Else!");
}

//EXAMPLE
let male = "Male";
let age = 18;
let female = "Female";
// checks if male is equal to "Male"
// if you use  === it will check the datatype and if male is equal to "Male"
if (male == "Male")
{
    // ">=" checks if 18 greater than "age" and if it is equal to 18
    if (age >= 18){
        console.log("You are a " + male + " and above the age limit!")
    } else
    {
        console.log("Sorry dude!");
    }
    // checks if female is equal to "Female"
// if you use  === it will check the datatype and if female is equal to "Female"
}else if ( female == "Female")
{
    // ">=" checks if 18 greater than "age" and if it is equal to 18
    if (age >= 18)
    {
        console.log("You are a " + female + " And above the age limit!")
    }else
    {
        console.log("Sorry lady!");
    }
} else
{
    console.log("Can't figure out your gender!")
}

//Javascript Functions

//Named Function
function testExample(a) {
    let greeting1 ="Hi! My name is " + a;
   return greeting1;
}
//The named function can hold any variable outside the function and inside
let name = "Daniel";
console.log(testExample("Nick"));
//console.log(testExample(name));
//console.log(testExample("Nick"));

//Anonymous function
let b = "Daniel";
let testExample1 = function (b) {
    let greeting2 ="Hi! My name is " + b;
    return greeting2;
};
console.log(testExample1(b));

//Immediately invoked function
(function(){
    let greeting3 = "Hi! My name is Muji";
    console.log(greeting3);
}());


//Javascript Calculator
function Calc() {
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);
    let op = document.querySelector("#operator").value;
    let calculate;
    if(op === "Add") {
        calculate = a + b;
    }
    else if  (op === "Subtract") {
        calculate = a - b;
    }
    else if  (op === "Divide") {
        calculate = a / b;
    }
    else if  (op === "Multiply") {
        calculate = a * b;
    }
  document.querySelector("#result").innerHTML = calculate;
}

Calc();











