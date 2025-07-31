let showfirst=true

setInterval(()=>{
    const blue= document.getElementById("blue")
    const black=document.getElementById("black")


    if (showfirst === true) {
        blue.style.opacity=1
        black.style.opacity=0
    }
    else {
        blue.style.opacity=0
        black.style.opacity=1
    }
    

    showfirst=!showfirst
},5000)



window.addEventListener('scroll',() => {
    const target= document.querySelector('.scroll-div')
    const rect = target.getBoundingClientRect();

    if (rect.top  < window.innerHeight +400 ){
        target.classList.add('visble')
    
    }
    else{
        target.classList.remove('visble')
    }
})




window.addEventListener('scroll',() =>{
    const trgt=document.querySelector('.scroll-div2')
    const ret= trgt.getBoundingClientRect();


    if (ret.top < window.innerHeight +800){
        trgt.classList.add('visible')}
    else{
        trgt.classList.remove('visible')
    }
})




window.addEventListener('scroll' , () => {
    const tgt=document.querySelector('.mini-car')
    const rct= tgt.getBoundingClientRect()

    if(rct.top< window.innerHeight -200 ){
        tgt.classList.add('repl')
    }
    else{
        tgt.classList.remove('repl')
    }
})






window.addEventListener('scroll', () => {
    const tswira= document.getElementById('tswirak')
    const rct= tswira.getBoundingClientRect()

    if(rct.top< window.innerHeight){
        tswira.classList.add('aimation')
    }
    else{
        tswira.classList.remove('aimation')
    }
})