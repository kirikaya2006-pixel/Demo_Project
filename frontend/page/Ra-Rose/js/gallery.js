const inspect = document.getElementById("inspect");

const inspectImage = document.getElementById("inspectImage");

const inspectTitle = document.getElementById("inspectTitle");

const inspectCategory = document.getElementById("inspectCategory");

const inspectStory = document.getElementById("inspectStory");

document.querySelectorAll(".story-card").forEach(card=>{

    card.onclick=()=>{

        inspect.classList.add("active");

        inspectImage.src=card.dataset.image;

        inspectTitle.textContent=card.dataset.title;

        inspectCategory.textContent=card.dataset.category;

        inspectStory.textContent=card.dataset.story;

    }

})

function closeInspect(){

    inspect.classList.remove("active");

}

document.getElementById("inspectClose").onclick=closeInspect;

inspect.onclick=(e)=>{

    if(e.target===inspect){

        closeInspect();

    }

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeInspect();

    }

});