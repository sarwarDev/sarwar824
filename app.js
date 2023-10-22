let text = document.getElementById('ptag');
 
let search = document.getElementById('btn');

search.addEventListener('click',function(){
  
let input =document.getElementById('input').value;

if (input!=="") {
  
  let regexp = new RegExp(input,'gi');
  
text.innerHTML=text.textContent.replace(regexp,"<mark>$&</mark>");
}

});