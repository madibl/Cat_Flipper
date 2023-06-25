

//add event listener
document.querySelector("p1").addEventListener("click", function() {
    pictureChange(randomNum());
});


function pictureChange(imgInt){
    let imgName = "images/" + imgInt + ".jpeg";
    document.getElementById("image").src=imgName;
}

function randomNum(){
    let rand = Math.floor(Math.random() * 10);
    return rand;
}

