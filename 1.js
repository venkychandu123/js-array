 //  ------js non-primitive-data-types------
 
 //------ ARRAYS---------
//  var array=['anu','naru','amma','nanna'];
//  console.log(array.length);


 //---case1-----
//  var array1=['anu','naru','amma','nanna'];
//  console.log(array.length);
//  console.log(array[2]);
                                              //-------case2-----
//  var arrat2=new Array('anu','naresh');
//  console.log(arrat2);


// -------------------------------------------csse3--------------------------------------------
// var array =Array(8);

// console.log(array);

//-----------------------------------------------case4----------------------
// var array=Array.of('anu','naresh');

// console.log(array);




// console.log(Array.isArray(array));

//--------string into array--type1------------------------------

// var str="hi node js ";
// var str1=str.split('');//if you give no ''space split into individual word//if you give' '  one space split into word
//if you give'  '  two space split into entire word
// console.log(str1);





//--------string into array--type2-----1-----es-6--------------------


// var st="hi anu how are you what about you";
// var st1=Array.from(st);
// console.log(st1);


//--------string into array--type3------2----es-6--------------------


// var st="hi anun how are you";
// var [...anu]=st;
// console.log(anu.join(''));





//-------------------------------------------object------  type1-------------------------------------------

// var obj={
//     //key:value based
//     name:"naresh",
//     age:21,
//     company:"xyz",
//     salary:000000
// };
// console.log(obj);

//------------------------------------------------type2------------------------


// var obj =new Object();
// .name="anu";
// obj.age=21;obj
// obj.company="xyz";
// obj.sal=000;
// console.log(obj);




// var name="naresh";
// var age=21;
// var company="xyz";
// var obj ={
//     name,
//     age,
//     company,
//     sal:100000
// };
// console.log(obj);



//---------------------------------multiple object declaration---------------------------------------


// var obj=[{name:"naresh",
//     age:21,    company:"xyz",
//   salary:000000},{name:"naresh",
//       age:21,
//        company:"xyz",
//       salary:000000}];
//       console.log(obj);







//-------------if we can easly change the object data---------------
// var obj ={
//     name:"naresh",
//     age:21,
//     company:"xyz",
//      salary:000000
// };
// obj.name="anupama";
// console.log(obj);

//-----------------------------by using exising obj structure we can easily adding the new user data

// var obj={name:"naresh",
//      age:21,
//      company:"xyz",
//    salary:000000
// };
// var obj1=Object.create(obj);
// obj1.name="naresh";
// obj1.age=21;
// obj1.sal=1000;
// console.log(obj1);

//----------------------------entries methode --by using this we can return data in the form of array-----------
// var obj={
//     name:"naresh",
//     age:21,
//     company:"xyz",
//     salary:000000
// };
// console.log(Object.entries(obj));
// console.log(Object.values(obj));
// console.log(Object.keys(obj)); 
// var hhh=Object.freeze(obj);
// obj.name="anu";



//-----------------------functions----------------------------------------------------------------------------------------------
//function synt



//--------anonymous function


// function()
// {
//     alert('hello potti');
// } 

//--------function expression


//    var user=function()
//     {
//     alert('hello potti');
//      } 
//        user();
//  (function(){
//      alert('hello');
//      console.log('hi potti');
//      var username="anu";
//      var password=1432;

//  })();
//  console.log(username,password);//error-bcoz that two available with in the scope------------------------

//---------------------------es-6 syntax for iife
//     {
//      alert('hello');
//      console.log('hi potti');
//  var username="anu"; 
//     var password=1432;
// }



//-------------------naming function-------------------------

// function  user(){
//     console.log('hi bangaram');
//     console.log('anu');
//     var username="anusha";
//     var password=123;

// }
// user()//calling function-----


//-------------------function con----

 

// var user=new Function(console.log('anu'));
// user();







// -----function with parameter-----------------------------------------------------
// function user(user){
//     return user; //-------------- return statement always optional
// }
// console.log(user('anu'));
// console.log(user('an'));
// console.log(user('na'));




