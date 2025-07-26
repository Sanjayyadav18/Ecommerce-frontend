import register from "./register.js";
import login from "./login.js";

const root=document.getElementById('root');
console.log(root);
const allAnchors=document.querySelectorAll(`a`)

const router={
    "/login":login,
    "/register":register
}
function handleClick(e){
    e.preventDefault()
    // console.log(e.target.pathname);
    let path=e.target.pathname
    history.pushState(null,"",`${path}`)
    root.innerHTML=router[path]()
    
}
allAnchors.forEach((anchor)=>{
    anchor.addEventListener("click",handleClick)
})
window.addEventListener('popstate',(e)=>{
    // console.log(location);
    let path=location.pathname
    if(path=="/index.html"){
        root.innerHTML=""
    }else{
        root.innerHTML=router[path]()
    }
    
})