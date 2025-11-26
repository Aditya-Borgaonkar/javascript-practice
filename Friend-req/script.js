let allelem =document.querySelectorAll('button');

allelem.forEach(function(elem){
    
    elem.addEventListener('click',function(){
    if(elem.innerHTML=='Add Friend'){
        elem.innerHTML='Remove Friend'
    }else{
        elem.innerHTML='Add Friend'
    }    
    })
})  