//selector area


const calculator=document.getElementById('calculate');
const people_area=document.getElementById('output-area').value;
//increment and decrement area
const decrement=document.getElementById('decrement');
const increment=document.getElementById('increment');



//working of increment/decrement area


const getfinalResult=calculator.addEventListener('click',()=>{
const text=document.getElementById('text');
const amount=document.getElementById('amount').value;
const tip=document.getElementById('tip').value;
const totallTip=amount*(tip/100);


const people_area=document.getElementById('output-area').value;
//const totallPEOple=Number(document.getElementById('output-area').innerHTML);
const totallPERperson=(amount+totallTip)/people_area;

text.innerHTML=`<div style="background-color:rgb(57, 4, 107);padding:10px;border-radius:10px;margin-top:10px;"><h4> totall bill is: $${amount}</h4>
<h4>tip is $${totallTip}</h4>
-----------------
<h4>totall per person $${totallPERperson}</h4>
</div>`

})

let count=1;
const getincrement=increment.addEventListener('click',()=>{
   count++;
    people_area.innerHTML=count;
})



const getdecrement=decrement.addEventListener('click',()=>{
    if(count>1){
        count--;
    }
    people_area.innerHTML=count;
   //

});