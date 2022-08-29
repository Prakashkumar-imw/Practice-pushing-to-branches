const tgttitle = document.getElementsByTagName('title')
console.log(tgttitle[0]);
const tgtbutton = document.getElementById('button')
console.log(tgtbutton);

tgtbutton.addEventListener('click', ()=>{
    tgttitle[0].innerHTML = 'hi'
})