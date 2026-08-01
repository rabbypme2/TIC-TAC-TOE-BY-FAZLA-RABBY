
// let age=7;
// if (age>=18){console.log("vote")}
// else{console.log("not vote")}

// let num=1;
// if (num%2===0){
//     console.log(num,"even");
// }else {console.log(num,"odd");}

// let mode= "silver";
// let color;
// if (mode==="dark"){color="black";}

// else if(mode==="pink"){color="p";}

// else if (mode==="blue"){color="b";}

// else {color="light";}

// console.log(color);

// let age=17;
// age>=18? console.log("adult"):console.log("notad");
// let result=age>=18?"adult":"nadult";
// alert("hello");
//let name=prompt("hello");//
//console.log(name);
//alert("hw");
// let name= prompt ("hello");
// console.log(name);
// let num=prompt("Enter a number :");
// if (num % 5===0){console.log(num,"is multiple by 5");  

// }
// else{
//     console.log(num," Is NOT multiple by 5");
// }
//practice
// let score=97
// let grade;
// if (score>=90 && score<= 100){
//     grade = "A"
// }
// {console.log("according to your score yr grade was :" +grade)
// };
// for (let count=1;count<=5;count++) {
//     console.log("Hasan Fazla RAbnby");
// }
// console .log("loop has endeed");
// let sum=0;
// let n=8;
// for (let i =1; i<=n; i++) {
//     sum= sum +i;
// }
// console.log("sum=", sum);
// console.log("loop has endeed");


// for (let i=1;i<=5; i++) {
//     console.log("i=",i);
// }
// console.log("loop has endeed");
// let i = 1;
// while (i<=10){
//     console.log("hasan fazla");
//     i++;
// }

// let i = 1;
// do{
//     console.log("i=",i);
//     i++;
// } 
// while (i<=10);

// let str="hasasn fazla";
// let sizw=0;
// for(let i of str ){
//     console.log("i=" ,i);
//     sizw++;
// }
// console.log("s=", sizw);

// let student ={
//     name:"Hash",
//     Age:20,
//     cgpa:3.0,
//     isPass:true,
// };
// for (let key in student){
//     console.log("key=",key, "value=", student[key]);
// }
//practice question 1
// for (let num= 0;num<=100;num++){
//     if(num % 2!==0) console.log("num=", num)
// };
// practice question 2
// let gameNum = 25;
// let userNum=prompt("guess the game number:");
// while( userNum!=gameNum){
//     userNum=prompt("wrong plz try again");
// }
// console.log("good");
// let str="Hasan";
// console.log(str[4]);

// let specialsrting=`This is a template litarel`;
// console.log(typeof specialsrting);
// let obj = {
//     item: "pen",
//     cost: 10,
// };
// console.log("the cost of ",obj.item,"is", obj .cost);

// let output=`the cost of ${obj.item} is ${obj.cost} taka`;
// console.log(output);
// console.log("Hasan Fazaa\nRabby");
// let str="12345678";
// console.log(str.slice(1,3));
// let str1= "apna";
// let str2 ="college";
// let res= "5 a0 3earn5ng w5th" + str1 + (str2);
// console.log(res);
// let str="hello";
// console.log(str.replace("h","Y"));
// let str="hwe";
// str=str.replace("h",("y"));
// console.log(str);
// let marks =[82,78,78,89];
// console.log(marks);
// let marks=[85,97,44,37,76,60];

// let sum=0;
// for(let val of marks) {
//     sum+=val;
    
// }
// let avg= sum/marks.length;
// console.log(`avg) marks of the class =${avg}`);
// let items=[250,645,300,900,50];
// let index=0;
// for(let val of items){
//     let offer= val/10;
//     items[index]=items[index]-offer;
//     console.log(`value at index $index=${items[index]}`);

// }
// let foodItems=["potato","apple","litchi","tomato"];
// foodItems.push("chips","burger","paneer");
// console.log(foodItems);
// let marvelHeros=["thor","spider","iron"];
// let dcHeros=["superman","Batman"];
// let Heros=marvelHeros.concat(dcHeros);
// console.log(Heros);
// let array=[11,12,13,18,111];
// array.splice(2,2,101,102);
// console.log(array);
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// companies.push("Amazone");
// console.log(companies);
// function myFunction(){
//     console.log("Apna College");
//     console.log("We are learning JS;");
// }
// myFunction();
// function myFunction(ppp){
//     console.log(ppp);
// }
// myFunction("i love JS");

// function sum(x,y){
//     console.log(x-y);
// }
// sum(2,3);
// const printhello =() =>{
//     console.log("hello");
// }
// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(
//             char==="a"|| char==="e"|| char==="i"|| char==="o"||char==="u"
//         ){
//             count++;
//         }
//     }
//    return count;s
// }

// let arr = [1,2,3,4];
// arr.forEach(function printVal(Val){
//     console.log(Val);

// });

// let arr = ["Dhaka","Barisha","Rajshgahi","chi"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr );
// });
// let nums=[67,52,39];
// let newArr= nums.map((val)=>{
//     return val*val;
// });
// console.log(newArr);

// let arr= [1,2,3,4,5,6,7,];
// let filterarr= arr.filter((val)=>{
// return val % 2!==0;
// });
// console.log(filterarr);
// let arr=[1,2,3,4,5];
// const output=arr.reduce((prev,curr)=>{
//     return prev>curr ?prev:curr;
// })
// console.log(output);
// let marks=[97,64,32,49,99,96,86];
// let filtermarks=marks.filter((val)=>{
// return val>=90;
// });

// console.log(filtermarks);

// let n=prompt("Enter a Number : ")
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }

// console.log(arr);
// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log("sum=" ,sum);

//    let factorial=arr.reduce((res,curr)=>{
//     return res*curr;
//    });
//    console.log("factorial=",factorial);
// console.log("hello");
// alert("Apna College");
// console.dir(document.body);
// console.log(document.body);
// let headings= document.getElementsByClassName("headings-class");
// console.dir("headings");
// console.log(headings);
// let elements=document.querySelector("p");
// console.dir(elements);
// let firstEl=document.querySelector("#myId");
// console.dir(firstEl);
// let div=document.querySelector("div");
// console.dir(div);
// let heading= document.querySelector("h1");
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+  "From Apna College students" 
// let divs=document.querySelectorAll(".box");
// let index=1;
// for(div of divs){
//     div.innerText=`new uniq valu${index}`;
//     index++
// }




// divs[0].innerText="new uniq valu 1";
// divs[1].innerText="new uniq valu 2";
// divs[2].innerText="new uniq valu 3";
// let div=document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id");
// console.log(id);
// let name=div.getAttribute("name");
// console.log(name);
// let para=document.querySelector("p");
// console.log(para.setAttribute("class","New Class"));


// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// console.log(newbtn);
// let p=document.querySelector("p");
// p.after(newbtn);

// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>Hi,I am New!</i>";
// document.querySelector("body").prepend(newHeading);
// let para=document.querySelector("p");
//  para.remove();
// let newBtn=document.createElement("button");
// newBtn.innerText = "click me!!!!";

// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newBtn);

// let para=document.querySelector("p");
// let btn1 =document.querySelector("#btn1");
// // btn1.onclick = (evt)=>{
// //     console.log(evt);
// //     console.log(evt.target);
// //     console.log(evt.type);
// // };
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked handelar-2");
// });
// // let div = document.querySelector("div");
// let modeBtn = document.querySelector("#mode");
// let currMode="light";

// modeBtn.addEventListener("click",()=>{
//     if(currMode==="light") {
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//        console.log(currMode) ;
//     });

// TIC TAC TOE//
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turn0 = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        } else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const disableBoxes =()=> {
for(let box of boxes){
    box.disabled = true;
}
};
const enableBoxes =()=> {
for(let box of boxes){
    box.disabled = false;
    box.innerText="";
}
};






const showWinner =(winner)=>{
    msg.innerText=`congras, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner =() => {
    for(let pattern of winPatterns){
        
    let pos1Val= boxes[pattern[0]].innerText;
     let pos2Val =  boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
    if(pos1Val ===pos2Val && pos2Val===pos3Val) {
        console.log("winner FR RAbby",pos1Val);
        showWinner(pos1Val);
    }
} 
 }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);