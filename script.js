//object
// let girl = {name:"sunita" , age:22};
// console.log(girl);



//typeof-it store the type of variable stored in js
// let x = typeof 10;
// console.log(x);
// let x = "sunita";
// console.log(typeof x);


//comparison operator
//==  equal to
// 5 == 5 ->true
// 6 == 5 ->false
// 5 =='5' ->true (does not care about datatype)
//=== equal value and equal type
//5 === 5 ->true
//5  === 6 -> false
//5 === '5' -> false(1st compair datatype and then value)




//&& operator(both the condition is true then it works)
//(5<10 && 6>1)-> true
//|| operator(if one condition is true it works)
//(5>10 || 6>1)-> false


// div {
//     padding: 50px;
//     background-color: rgba(49, 35, 197, 0.2);
//     text-align: left;
//     cursor: pointer;
// }
// function func1(event) {
//     console.log("DIV 1 is clicked.");
//     if (document.getElementById("check").checked) {
//     event.stopPropagation();
// }
//     }
//     function func2() {
//     console.log("DIV 2 is clicked.");
//     }
//     document.getElementById("myAnchor").addEventListener("click", function(event){
//      event.preventDefault()
//     });




// ......................ternary operator.................
// let isLoggedin = 1;
// let option  = isLoggedin == 1 ? "Logout" : "Login";
//   //             condition         true        false
//      // in here if the condition is true it will print logout else login
//      document.write(option);



//......................to avoid undefind or null..................
// let user;
// //  user = "Sunita";
//  alert (user ?? "Guest User");


//............................SWITCH.....................
//use for strict comparison
// === comparison
// let input;
// input = 9;
// switch(input){
//       case 1: //if (input === 1)
//        document.write("continue...");
//        break;    //(use to get out from the comdition and dont campair rest of them)
//       case "yes":  // if(input === "y")
//         document.write("continue...");
//         break;
//       case 0: //if(input === 0)
//         document.write("end...");
//         break;
//       case "no": //if(input === "no");
//         document.write("end...")
//         break;
//       default :
//       document.write("element not present") ;
// }



//...............................LOOP....................
//use for repeation of work
//for
//do while
//while



//...................Template literals.............
// let firstName = "Sunita";
// let lastName = "Patra";
// let fullName = `My name is ${firstName} ${lastName}`
// console.log(fullName);




//...................toLowerCase / toUpperCase.................
// let firstName = "Sunita";
// console.log(firstName.toUpperCase());


//.................find index.........
// let lastName = "Patra";
// console.log(lastName.indexOf("r"))
//console.log(lastName.lastIndexOf("a"))(find last index)



//..........................trim..............
//remove extra space
// let hobbies = "      dance sing read        ";
// let result = hobbies.trim();
// console.log(hobbies);
// console.log(result);
// console.log(result.includes("dance"));  //(include that string or not)




//...........................slice method.................
// let fullName = "sdugebbfiushiwdy";
// console.log(fullName.slice(0,7))  //Exculding last one 0-6


//.............................split..............
// let favoriteColors = "red green pink blue";
// let arrColors = favoriteColors.split(" ");//convert string to array
// console.log(arrColors);



//..................Type conversion................
// let stringType = "54";
// console.log(stringType,typeof stringType);
// let numberType = 52 ;
// let stringType = String(numberType);  // number to string
// console.log(stringType,typeof stringType);




//................................Arrays.................
//let dishes =["rice" , "chat","bhujiya"];
// console.log(dishes[2]);
// dishes[1] = "panipuri";//Modify the array
// console.log(dishes[1]);
// console.log(dishes.join(' , '));//join method
// console.log(dishes.indexOf("bhujiya"))//find the index
// let newDishes =["daal","sweet"]
// console.log(dishes.concat(newDishes));//concat 2 arrays
//console.log(dishes.length);//gives the arrays length
//console.log(dishes.push("alu bhujiya")) //return new length of array and the new item store at last of the array
//console.log(dishes.pop()) //remove last element from array




//.......................ternary operator(? :).................
// let age =20;
// let result = age>=18 ? "passed" : "fail";
// console.log(result);




//...........................function..................
//it is simply a piece of code which we can use in our program many times
//it just like a variable holding some piece of code
//we can call a function many times
//...................declaration..............
// function nameOfFunction(){
//     //body of function
//     console.log("code inside the function");
// }
// nameOfFunction();//function call

// //function expression
// let func = function(){//also called anonymous function
//   console.log("this is an example of function expression")
// }
// func();//calling function expression


//........passing values (Arguments and parameters).......
// let invitation = function(name){//(name=parameters)
//     console.log(`Welcome! ${name} You are invited on our event`)
// }
// invitation("Sunita");//the value of parameter is argument
// //(name=parameter)
// //(sunita=argument)
//returning values(How to return value from the function)
// let ageCalculation = function(birthYear){
//     let age = 2023-birthYear;
//     //console.log(`Your age is = ${age}`);
//     return age;
// }
// console.log(ageCalculation(2001));







//.................Arrow Function..............
//Special form of Function expression
//it allows us to write function more fast because
//No need to use function keyword
//No need to use paranthesis() in case of single parameter
//No need to use curely{} if single line code in function
//No need to use return statement if single line code in function

// let invitation = name => `Welcome ${name} to this event`;
// console.log(invitation("champa"));



//passing function as an Argument
// let upperCase = function(str){
//     return str.toUpperCase();
// }
// let lowerCase = function(str){
//     return str.toLowerCase();
// }
// let transformer = function(str,fun){
//     return fun(str);
// }
// console.log(transformer("hello",upperCase));




//..............................setTimeout and setInterval............
//setTimeOut ->Run Function "once" after "interval" of time
//setInterval ->Run function repeatedly,starting after the 
//interval of time,then repeating......
//......................setTimeOut...........//setTimeOut(func|code , delay,arg1,arg2...)
// function greeting(name){//creating function out side
//     console.log(`welcome to our family ${name}`)
// }
// setTimeout(greeting,8000,"rinki")

// setTimeout(function greet(name){//creating setTimeout 
//     console.log(`welcome ${name}`)
// },9000,"home");

//...........................setInterval..........//setInterval(func|code , delay ,arg1,arg2...)
// function greeting(name){//creating function out side
//         console.log(`welcome to our family ${name}`)
//  }
//  setInterval(greeting,5000,"Kajol");







//.......................Hoisting.................
//variable "declaration" are "hoisted" toword top of their scope
// function declaration
//test()
// function test(){
//     console.log("hello world")
// }

//Not a function or arrow function
// test()
// let test = ()=>{
//     console.log("hello")
// }





//.............................Arrow function.........................
// let sum = function(a,b,c){
//     return a+b+c;
// }



//............................callback function...............
// var talk = function(fx){
//     fx();
// }
// var sayHi = function(){
//     console.log("hi");
// }
// talk(sayHi);


//..................function returning function...............
// function makeFunc(){
//     const name = "Sunita";
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc();
// myFunc();




//.......................IIFE-Immediately Invoked Function Expression...................
// (function () {
//    console.log("hiiiiiii");
// })();




//.................OBJECT IN JAVASCRIPT.....................
// let car = {
//     color:"blue",
//     model:"2001",
//     company:"Honda"
// }
//  console.log(car);
// console.log(car.model);

//..................delete properties of object...........
// let obj =
// {
//     prop1:"value1",
//     prop2:"value2"
// }
// console.log(obj);
// delete obj.prop2;
// console.log(obj);

//..........................Function Vs Method...............
//Method = are the properties(key) of object
// let person = {
//     agecalculate : function(birthYear){
//     let age = 2023-birthYear;
//     return age;
//     }
// }
// console.log(person.agecalculate(2001));





//.......................this keyword..........
//in each method we have an access of special keyword called "this"
//"this" keyword represent the object."calling" the
//method in which "this" is "present"
// let person = {
//     firstName:"Sunita",
//     lastName:"Patra",
//     city:"Ambodala",
//     birthyear:2001,
//     education:"frontend developer",
//     information:function(){
//         return`${this.firstName} ${this.lastName} lives in ${this.city}`
//     }
// }
// console.log(person.information());





//.....................forEach method of array..........
//it is another type of loop which we used to traverse
//over the array
//using for loop
// let dishes = ["Biriyani","raita","mashroom","paneer"]
// for(let i=0;i<dishes.length;i++){
//     console.log(dishes[i])
// }
// console.log("********")
// //using foreach method
// dishes.forEach(function(element){
//     console.log(element);
// })
//........................object inside array................
//  let blockList = [{userName:"john",reason:"Abusive content"},{userName:"carry",reason:"copy write"}];
//  console.log(blockList);





//..................Math object........................
//console.log(Math);//Math which return mathemetical operation value
//let num = 2.845;
// console.log(Math.round(num));// return to nearest integer
// console.log(Math.floor(num));//round to down value
// console.log(Math.ceil(num));//round to up
// console.log(Math.trunc(num));//remove decimal part
// let random = Math.random()
// console.log(Math.round(random*100));



//Function
//call and apply method
//we can manually set the value of "this" keyword using
// mainPlane ={
//     airline:"Fly india",
//     iatcode:"FI",
//     bookings:[],
//     book:function(flightNum,name){
//         console.log(`${name} booed flight on ${this.airline} with flight number ${this.iatcode}${flightNum}`);
//         this.bookings.push({flightName:`${this.airline}`,name:name})
//     }
// }
// mainPlane.book(566,"Sunita");
// console.log(mainPlane);




//..........................bind method..........................
//this method is used to bind a function with obejct
function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} on this`)
}
let user = {
    firstName:"Sunita",
    lastName:"Patra"
}
let greets = greet