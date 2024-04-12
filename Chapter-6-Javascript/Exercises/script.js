var nameBtn=document.getElementById('nameAlert');
var nameInput=document.getElementById('name')
nameBtn.addEventListener('click',function(){

    if(nameInput.value==""){
    alert('Please enter a Name');    
 }
else{
    alert(nameInput.value);
} 

});
