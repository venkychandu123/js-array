//   ------js non-primitive-data-types------
 
//  ------ ARRAYS---------
//  var array=['anu','naru','amma','nanna'];
//  console.log(array.length);


//  ---case1-----
//  var array1=['anu','naru','amma','nanna'];
//  console.log(array.length);
//  console.log(array[2]);
//                                               -------case2-----
//  var arrat2=new Array('anu','naresh');
//  console.log(arrat2);


// -------------------------------------------csse3--------------------------------------------
// var array =Array(8);

// console.log(array);

// -----------------------------------------------case4----------------------
// var array=Array.of('anu','naresh');

// console.log(array);




// console.log(Array.isArray(array));

// --------string into array--type1------------------------------

// var str="hi node js ";
// var str1=str.split('');//if you give no ''space split into individual word//if you give' '  one space split into word
// if you give'  '  two space split into entire word
// console.log(str1);




// --------string into array--type2-----1-----es-6--------------------


// var st="hi anu how are you what about you";
// var st1=Array.from(st);
// console.log(st1);


// --------string into array--type3------2----es-6--------------------


// var st="hi anun how are you";
// var [...anu]=st;
// console.log(anu.join(''));





// -------------------------------------------object------  type1-------------------------------------------

// var obj={
//     //key:value based
//     name:"naresh",
//     age:21,
//     company:"xyz",
//     salary:000000
// };
// console.log(obj);

// ------------------------------------------------type2------------------------


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



// ---------------------------------multiple object declaration---------------------------------------


// var obj=[{name:"naresh",
//     age:21,    company:"xyz",
//   salary:000000},{name:"naresh",
//       age:21,
//        company:"xyz",
//       salary:000000}];
//       console.log(obj);







// -------------if we can easly change the object data---------------
// var obj ={
//     name:"naresh",
//     age:21,
//     company:"xyz",
//      salary:000000
// };
// obj.name="anupama";
// console.log(obj);

// -----------------------------by using exising obj structure we can easily adding the new user data

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

// ----------------------------entries methode --by using this we can return data in the form of array-----------
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


// function synt


// --------anonymous function
// function()
// {
//     alert('hello potti');
// } 

// --------function expression


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

// ---------------------------es-6 syntax for iife
//     {
//      alert('hello');
//      console.log('hi potti');
//  var username="anu"; 
//     var password=1432;
// }



// -------------------naming function-------------------------

// function  user(){
//     console.log('hi bangaram');
//     console.log('anu');
//     var username="anusha";
//     var password=123;

// }
// user()//calling function-----


// -------------------function con----

 

// var user=new Function(console.log('anu'));
// user();







// -----function with parameter-----------------------------------------------------
// function user(user){
//     return user;  //-------------- return statement always optional
// }
// console.log(user('anu'));
// console.log(user('an'));
// console.log(user('na'));


// --------------with out parameters-----------
// function number()
// {
//   console.log(arguments);
//   var arge=arguments;
//   var [...anu]=args;


// }

// number(10,25,45,0,7,1);

// -----nested funtion -------------------a function with inthe another function is called nested function
//   var anu1="hi bava how are you";
//    function naresh()
//      {
//     let an="hi anu how are you ";
//     console.log(an);
//     console.log(anu1);
//     function anu()
//     {
//      var na="hi naresh how are you";
//      console.log(na);
//      console.log(an);
//         console.log(anu1);
//     }
// anu();
// }
// naresh();

// //   --------------call back function--------------
//   function anu(ammulu)
//   {
//     console.log("hi how are you");
// // ammulu(); 
//   }
//   function naresh()
//   {

//     console.log('hi pilla acept me');
//   }
//   anu(naresh);
// ------------------------fat arrow-------------
// let user ={                                 //es-5
//     name:"anu",
//     age:20,
//     company:"na",
//     details:function()
//               {
//         console.log(`hello my name is ${this.name} and my age is ${this.age} and i am working in ${this.company}`);
//     }
// };

// user.details();


// //------------------------fat arrow-------------

// let user1 ={                                 //es-6 this not alloewd so we use object reference-------
//     name:"anu",
//     age:20,
//     company:"na",
//     details:function()
//               {
//         console.log(`hello my name is ${user1.name} and my age is ${user1.age} and i am working in ${user1.company}`);
//     }
// };
// user.details();

// ------------------------------------default object   arguments not present in the es-6


// let number= () =>{
//     console.log(arguments);
// }

// number(10,20,3,6,5);

// ------------------------------------default object   arguments present in the es-5

 

// ----------------------rest parameters----------
// let number=(...anu)=> {
//     console.log(anu);
//     console.log(typeof(anu));
//     console.log(Array.isArray(anu));

// }
// number(10,2,0,30,);

// let number1=function() 
// {
//     console.log(anu1);
//     console.log(typeof(anu1));
//     console.log(Array.isArray(anu1));
  
// }
// number1(10,2,0,30,);





// -------------------------------------------array methodes------


// var it=['hi','hello','hello'];  //---for each work only for array...................
// it.forEach(function(anu)
// {
//     console.log(anu);
// });




// var str='hi hello';
// [...str].forEach(function(anu)
// {
//     console.log(anu);
// });


// var arr=['hi','hello','jsjsjs','hahaha','sjs','hdhshshs'];


// arr.forEach((name,index,arr) =>
// {
//     console.log(name);
//     console.log(index);
//     console.log(arr);
// }); 

// var arr =['hi','hello','how are you'];
// var str="hello node js";

// for (const anu of str)
// {
//     document.write(anu);
//     console.log(anu);
  
    
// }



// -----------------------includes-------
//  var arr=['java','node','mean','mern'];
//  if(arr.includes('node'))
//  {
//      alert('yes is there')
//  }
//  else
//  {
//      alert('not there');
//  }


// ------------------reduce ------------adding the all the elements present in the array 
//  var arr=[10,2,5,7,8,6,2,4,9,7,1,7555,8,7,4,844,57,4,10];


// var test=arr.reduce(function(a,b){
//     return a+b;
// });
// console.log(test);

// var test1=arr.reduce((a,b)=>a+b)
// console.log(test1);


// for (const iterator of arr) {
//     console.log(iterator);
// arr.forEach(function(iem) {

//     console.log(iem);
    
// });
// var test=arr.sort((a,b)=>b-a);
// // console.log(test);
// ----pop push shift unshift splice foreach indexof fill include reduce set  map filter  




// var arr=[1,2,4,6,7,8];
// var test=arr.forEach((x)=>{
//     return x*2});
// console.log(test);

  
// var test1=arr.map((x)=>x*2);
// console.log(test1);
// console.log(arr);




// -------------convert array into string 

// var arr=['hello','hi','how are you'];
// var test=arr.toString();
// console.log(test);
// var test1=arr.join('');
// console.log(test1);

// var [...test2]=test1;
// var str=test2.reverse().join('');
// console.log(str);

// ------------------------------reverse a string  program-----------


// function username(name){
//     return [...name].reverse().join('');
// }
// console.log(username('anusha'));
// //----------------------------------------------------array methodes--------------------------------------
//  var arr=["anu","ammulu","chitti","bangaram","potti","potti","pilla","ammu"];
// var test=arr.push("anusha");
// var test1=arr.pop();
// console.log(arr);
// console.log(test1);
// var test=arr.shift();
// console.log(arr);
// console.log(test);

// var test=arr.unshift("naapranam");
// console.log(test);
// console.log(arr);



// var test=arr.splice(5,1,"na");
// console.log(arr);
// console.log(test);

// var test=arr.forEach((item)=>{
// console.log(item);
// });

// if(arr.includes("potti")){
//     alert("yes");

// }
// else{
//     alert("not");
// }
// var test=arr.sort();
// console.log(arr);
// console.log(test);
// var arr=[9,8,7,4,5,6,1,2,3];
// console.log(arr);

// var test=arr.sort((a,b)=>b-a)
// console.log(test);
// var test=arr.filter((value,index,arr)=>
// {
//     console.log(value);
//     console.log(index);
//     console.log(arr);
//   var test1=  value.indexOf=index;
//   console.log(test1);


// });
// console.log(arr);
// var duplicate=new Set();

// console.log(duplicate);
// var test=arr.indexOf("bangaranm");
// console.log(test);
// let i="chandhu";
// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }
// console.log(i);


// var str="naresh weds anusha";
// console.log(str);
// var test=Array.from(str);
// console.log(test);
// console.log(Array.isArray(test));
// console.log(typeof(test));



// var [...test]=str;
// console.log(typeof(test));
// var arr=['java','node','angular','express','mean','mern'];
// var arr1=['ammulu','anu','potti','chitti','potti'];
// var test=arr.concat(arr1);
// console.log(test);
// var arr=[];
// var arr1=new Array();
// var arr2=Array.of(4)
// var arr3=Array(10)
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);





// var obj={
//     name:"anusha",
//     age:10,
//     company:"na",

// };
// console.log(typeof obj);


// var obj=new Object();
// obj.name="nanna";
// obj.age=50;
// obj.company="former";
// console.log(obj);


// var obj=[{
//     name:"nanna",
//     age:50,
//     company:"former"

// },{
//     name:"nanna",
//     age:50,
//     company:"former"

// },{
//     name:"nanna",
//     age:50,
//     company:"former"

// },{
//     name:"nanna",
//     age:50,
//     company:"former"

// }];
// console.log(obj);

// var test=Object.create(obj);
// test.village="pathamadugla";
// console.log(test);


// function naresh() 
// {
//     var naresh="hi bangaram how are you";
//     document.write(naresh);
//     function anu()
//     {
//         var anu ="hi bava how are you ";
//         document.write(anu);
//         document.write(naresh);
//     }
//     anu();
// }
// naresh();






// --------------------string methodes---------------------------------------------------------------------
   

// var str=  "hello bangaram how are you tinavva bangaram ";



// var regexp=str.replace(/bangaram/g,"bava");
// // console.log(regexp);
// console.log(str);

// var test=str.trim();
// console.log(test);
// str.toUpperCase();
// str.toLowerCase();
// str.strike()//css




// var substr=str.substr(1,8);
// console.log(substr);



//  console.log(substr);

// var test=str.substring(-4,-25);
// console.log(test);
// var test=str.repeat();
// console.log(test);

// var test=str.search('tinavva');
// console.log(test);
// if(str.startsWith("2"))
// {
//     alert("yes there")
// }
// else{
//     alert("not there")
// }
// if(str.endsWith(5))
// {
//     alert("yes there")
// }
// else{
//     alert("not there")
// }

// for (var i=0;i<=1000;i++)
// {
//     document.write(str);
// }





// for(let i in window)
// {
//     document.write(i+'<br>'+window[i]+'<br>')
// }



// var links=document.links;
// let array=Array.from(links);
// array.forEach(item=>console.log(item))


// var h1=document.getElementById("id");
// console.log(h1);
// var h11=document.querySelector("#id");
// console.log(h2);
// var h2=document.getElementsByClassName("class");
// console.log(h2);
// var h22=document.querySelector(".class");
// console.log(h22);

// function addtwonumber()   var firstnumber=parseInt(document.getElementsById('firstnumber').value);
//     var firstnumber=parseInt(document.getElementsById('secondnumber').value);
// document.getElementsById('total').(value = firstnumber+secondnumber;
// console.log(total).(value;
  
  
// }



// let bbb=document.getElementsByTagName('li');

// let [...li]=bbb;
// li.forEach(x=>{
//     console.log(x); 
//     x.classList.add('anu');
//     x.classList.add('yourhusbandnaresh')
//     x.innerHTML='hey potti';
     
     
// })


//==============another way=====
// var oddbutton=document.getElementById('odd');
// var evenbutton=document.getElementById('even');

// var odd=document.querySelectorAll('li:nth-child(odd)');

// var even=document.querySelectorAll('li:nth-child(even)');


// oddbutton.addEventListener('click' ,()=>{
// odd.forEach(x =>{
//     x.classList.add('odd');
// });
// even.forEach(x=>{
//     x.classList.remove('even');
// });
// });
// evenbutton.addEventListener('click' ,()=>{
//     even.forEach(y =>{
//         y.classList.add('even');
//     });
//     even.forEach(y=>{
//         y.classList.remove('odd');
//     });
//     });

// a.forEach(x=>
//     {
//         x.classList.add('odd');
//         x.innerHTML='odd here';
//     });
//     b.forEach(y=>
//         {
//             y.classList.add('even');
//             y.innerHTML='even here';
//         });

// var oddbutton=document.getElementById('odd');
// var evenbutton=document.getElementById('even');
// var odd=document.queryS electorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// oddbutton.addEventListener('click',()=>{

// odd.forEach(x=>{
//     x.classList.add("odd");
// });
// even.forEach(x=>{
//     x.classList.remove("even");
// });

// });

// evenbutton.addEventListener('click',()=>{

//     even.forEach(x=>{
//         x.classList.add("even");
//     });
//     even.forEach(x=>{
//         x.classList.remove("odd");
//     });
    
//     });

// var test=document.getElementsByTagName('li');

// var[...a]=test;
// a.forEach(x=>{
//     x.classList.add('anu');
//     x.innerHTML='hi bava how are you';
//     console.log(x);

// });
// var oddbutton=document.getElementById('odd');
// var evenbutton=document.getElementById('even');
// var odd=document.querySelectorAll('li:nth-child(odd)');
// var odd=document.querySelectorAll('li:nth-child(even)');






//  oddbutton.addEventListener('mouseover',()=>{
//      odd.forEach(x=>{
//          x.classList.add('odd');
//      });
//      even.forEach(x=>{
//          x.classList.remove('even');
//      });

//  });
// var test=document.getElementsByClassName('id');
// test.style.background="yellow";











// let date=new Date();


// var h=date.getHours();
// var m=date.getMinutes();
// var s=date.getSeconds();
// document.getElementById('clock').innerHTML=`${h}:${m}:${s}`;

// var username="anusha"
// setTimeout(()=>{
// document.write(username);
// },1000)


// setInterval(() =>{
//     document.write(uesrname);
// },100);


// setInterval(() => {
//     var date =new Date();
//     var h=date.getHours();
//     var m=date.getMinutes();
//     var s=date.getSeconds();
//     var format=(date.getHours()<12)?'am':'pm';
//     document.getElementById('clock').innerHTML=`${h}:${m}:${s} ${format}`;

    
// }, 1000);

// setInterval(() => {
//     var date =new Date();
// var time=date.toLocaleTimeString();
// document.getElementById('clock').innerHTML=time;
// }, 1000);


// const t1=new Promise((resolve,reject)=>{
//     resolve('ok');

// });
// const t2=new Promise((resolve,reject)=>{
// reject('not ok');
// });


//  var result=Promise.all([t1,t2]).then(data=>{
//      console.log(data);
//  }).catch(err=>{
//      console.log(err)
//  });


// const t1=window.fetch('https://api.github.com/users');
// t1.then(data=>{
//     console.log(data);
//     data.json().then(data=>{
//         console.log(data);
//     }).catch(err=>{
//         console.log(err);
//     })
// }).catch(err=>{
//     console.log(err);
// });
// var test=document.getElementsByTagName('div');
// test.forEach(e => {
// e.classList.add('naresh');
// console.log(e);
// });
// var test=document.getElementsByTagName('div');
// var [...a]=test;
// a.forEach(e=>{
//     e.classList.add('bangaram');
//  e.innerHTML='hi bangaram how are you';
//  console.log(e);
    
// })


// function addtwonumber(){
// //     var firstnumber=parseInt(document.getElementById('hh').Value);
// //     var secondnumber=parseInt(document.getElementById('hh1').Value);
// //   console.log(document.getElementById('anu').value=firstnumber+secondnumber);
//   alert('connected');

// }


// var test=document.createElement('div');
// console.log(test);
// var ul =document.createElement('ul');
// test.appendChild('ul');
// var li=document.createElement('li');
// ul.appendChild(li);



// var even=document.getElementById('evenbutton');
// var odd=document.getElementById('eventbutton');



// var evenbutton=document.querySelectorAll('li:nth-child(even)');

// var evenbutton=document.querySelectorAll('li:nth-child(odd)');




// even.addEventListener('click', () =>
// {
//     evenbutton.forEach(a=>{ 
//         a.classList.add('even');
//     });
//     oddbutton.forEach(b=>{
//         b.classList.remove('odd');

//     });
// });
// var evenbutton=document.getElementById('even');
//  var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// oddbutton.addEventListener('click',()=>{

// odd.forEach(x=>{
//      x.classList.add("odd");
//  });
//  even.forEach(x=>{
//     x.classList.remove("even");
//  });

//  });

//  evenbutton.addEventListener('click',()=>{

//      even.forEach(x=>{
//          x.classList.add("even");
//     });
//      even.forEach(x=>{
//          x.classList.remove("odd");
//    });
    
//      });
   