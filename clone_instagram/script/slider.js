let time = 3000,
    correntImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max = images.length;

    
    function nextImage(){
        images[correntImageIndex]
            .classList.remove("slider-img-on");

        correntImageIndex++;

        if(correntImageIndex >= max)
            correntImageIndex=0;
            console.log(correntImageIndex)
        
        images[correntImageIndex]
                .classList.add("slider-img-on");   
    }
    
function start(){
    setInterval(()=>{
        // troca de imagem a cada 
        nextImage();
    },time);
}    

window.addEventListener("load", start);