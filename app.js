//  new Vue({
//   el: '#container',
//   data: {
//     message: 'Hello Vue!',
//
//   },
//   method:{
//     chang:function(){
//       console.log('hi');
//     }
//   }
// })
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
// arr[0]=input.value*gram;
// arr[1]=input.value*ounce;
// arr[2]=input.value*tons;
// arr[3]=input.value;
// arr[4]=input.value*kilogram;
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
  // getElement('.p:nth-child(2) p').innerHTML=`<span>${final[0]}</span> `;
  // getElement('.p:nth-child(3) p').innerHTML=`<span>${final[1]}</span> `;
  // getElement('.p:nth-child(4) p').innerHTML=`<span>${final[2]}</span> `;
  //   getElement('.p:nth-child(5) p').innerHTML=`<span>${final[4]}</span> `;
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
