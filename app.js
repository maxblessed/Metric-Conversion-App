
function getElement(id){
  return document.querySelector(id)
}
let input=getElement('#input input');
let flag=false;
let gram=453.59;
let ounce=16;
let tons=0.0005;
let kilogram=0.45359237;

let arr=[];
function calculate(){

    if(input.value>=0){

    }else{
      input.value=0;
      flag=true;
    }
    if(flag){
      flag=false;
      return false
    }

let metr=[453.59,16,0.0005,0.45359237,input.value]

for(var i=0;i<5;i++){
  if(i!==4){
    arr[i]=metr[i]*input.value;
  }else{
    arr[i]=metr[i];
  }

}
console.log(arr)
localStorage.setItem('gram',JSON.stringify(arr));
update();


}
window.oninput=calculate
function update(){
  var final=JSON.parse(localStorage.getItem('gram'));
  let p=document.getElementsByClassName('local');
  for(var i=0;i<final.length-1;i++){
    p[i].innerHTML=`<span>${final[i]}</span> `;
    console.log(p[i])
  }

}
window.onload=update1
function update1(){
  var final=JSON.parse(localStorage.getItem('gram'));
  input.value=final[4];
  update();
}
