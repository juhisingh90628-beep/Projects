const calcius=document.querySelector("#calcius")
const fahrenheit=document.querySelector('#fahrenheit')
const kelvin=document.querySelector("#kelvin")



// calcius to kelvin

calcius.addEventListener("input",function(){
     let c=parseFloat(calcius.value);
     let f=(c*9/5)+32;
     let k=c+273.15;
     fahrenheit.value=f;
     kelvin.value=k;
     console.log(kelvin.value)
});

fahrenheit.addEventListener("input",function(){
     let f=parseFloat(fahrenheit.value);
     let c=(f-32)*5/9
     let k=(k-32)*5/9+273.15;
     calcius.value=c;
     fahrenheit.value=f;
})