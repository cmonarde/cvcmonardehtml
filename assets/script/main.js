// Ranking
let elementList = document.querySelectorAll(".fa-star");

elementList.forEach(function(element){
    element.addEventListener('click', function(){
        var max = element.dataset.position;
        let td = element.parentElement;
        let starList = td.querySelectorAll("i");
        starList.forEach(function(star){
            var index = star.dataset.position;
            star.classList.remove("fas");
            if(index <= max){
                star.classList.add("fas");
            }
        });
    });
});

// Link "Close"
let closeList = document.querySelectorAll(".close");
let content = document.querySelector(".content"); 

closeList.forEach(function(close){
    close.addEventListener('click', function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("zoomIn");
        content.classList.add("animated");
        content.classList.add("zoomOut");
        setTimeout(() => {
            location.href = "../index.html";
        }, 500);
    });
});

// Link "Ver Mas"
let linkdetailList = document.querySelectorAll(".linkdetail");
content = document.querySelector(".content"); 
linkdetailList.forEach(function(linkdetail){
    linkdetail.addEventListener('click', function(ev){
        var href = linkdetail.href;
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("zoomIn");
        content.classList.add("animated");
        content.classList.add("zoomOut");
        setTimeout(() => {
            location.href = href;
        }, 500);
    });
});