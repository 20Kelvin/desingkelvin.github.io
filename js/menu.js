
const rambo = document.querySelector('.rambo');
const menu = document.querySelector('.menu-navegacion');

//// onsole.log(menu)
// // console.log(rambo)

rambo.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') 
        && e.target !=menu && e.target != rambo ){
        menu.classList.toggle("spread")
    }
})