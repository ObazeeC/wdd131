function createParagraph(){
    const par = document.createElement("m");
    par.textContent = " I am learning JavaScript";
    document.body.appendChild(par);
}
   
 const butt1 = document.querySelectorAll("button");

 for (const x of butt1){
    x.addEventListener("click", createParagraph);
 }

 