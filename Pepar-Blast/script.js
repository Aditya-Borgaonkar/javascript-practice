let btn=document.querySelector('button');
let main=document.querySelector('body');

btn.addEventListener('click',function(){
    let div= document.createElement('div');
    // console.log(div);

    let x=Math.random()*90;
    let y=Math.random()*90;
    let rot=Math.random()*361;
    let he=Math.random()*90;
    let wi=Math.random()*90;
    let c1=Math.floor(Math.random()*256)
    let c2=Math.floor(Math.random()*256)
    let c3=Math.floor(Math.random()*256)


    div.style.height= he+'px'
    div.style.width= wi+'px'
    div.style.position='absolute'
    div.style.left= x+'%'
    div.style.top= y+'%'
    div.style.rotate=rot+'deg'
    div.style.backgroundColor= `rgb(${c1},${c2},${c3})`


    main.appendChild(div);
    
})