const lengthp=document.querySelector('#length-number');
const upper=document.querySelector('#uppercase');
const lower=document.querySelector('#lowercase');
const number=document.querySelector('#number');
const symbol=document.querySelector('#symbols');
const passinp=document.querySelector('#pass-input');
const copy=document.querySelector('#copy');
const generate=document.querySelector('#generate');

console.log(lengthp.value)
console.log(upper.checked)
console.log(lower.checked)
console.log(number.checked)
console.log(symbol.checked)

const uppercasestr='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr='abcdefghijklmnopqrstuvwxyz';
const numberstr='1234567890';
const symbolstr='!@#$%^&*()_+=';


generate.addEventListener('click',()=>{
let str='';

    // console.log(generate)
   if(upper.checked){
      str+=uppercasestr};
   
    if(lower.checked){
       str+=lowercasestr};
    
     if(number.checked){
        str+=numberstr};
     
      if(symbol.checked){
         
          str+=symbolstr};
    
     console.log(str)


  let password='';
  for(let i=0;i<lengthp.value;i++){
    console.log(str,"str.length")
    let index=Math.floor(Math.random()*str.length)
    password+=str[index];
    console.log("Password-->", password)
    passinp.value = password
    // str=''
  }
}

);
copy.addEventListener('click',()=>{
  if(passinp.value===''){
    alert('plz generate a password first')
  }else{
    const newele=document.createElement('textarea');
    newele.value=passinp.value;
    document.body.appendChild(newele);
    newele.select();
    passinp.select();
    document.execCommand('copy');
    alert('password copied to clipboard')
    newele.remove();
  }
})


