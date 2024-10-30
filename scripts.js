const botaoSom= document.querySelector(".botao-som") 
 const video= document.querySelector(".video")
 const desligasom=document.querySelector(".video")
 const botao=document.querySelector(".link-info")
 const modal=document.querySelector(".modal")

botaoSom.addEventListener ("click", ligasom)

desligasom.addEventListener("click",desliado) 

botao.addEventListener("click", aparecermodal)
modal.addEventListener("click", desaparecermodal)

function ligasom(){
    video.muted=false
}

function desliado(){
    video.muted=true
}

function desaparecermodal(){
    modal.style.display="none"
}

function aparecermodal(){
    modal.style.display="block"
   

}


