let input = document.querySelectorAll("input");
let button = document.querySelector(".saveSquareButt");
let c = 0;
localStorage.clear();

window.addEventListener("mouseover", function(){
    let SaveSquare = document.querySelectorAll(".saveSquare");
    for (let i = 0; i < SaveSquare.length; i++){
        SaveSquare[i].addEventListener("click", function(){
            localStorage.clear();
            localStorage.setItem('color', SaveSquare[i].style.backgroundColor);
        });    
    }
});

for (let i = 0; i < input.length; i++){
    input[i].addEventListener("input", function(){
        this.value = this.value.replace(/[^0-9\.]/g, '');
        document.querySelector('.square').style.backgroundColor = color();
        console.log(color());
    });    
}

button.addEventListener("mouseover", function(){
   document.querySelector('.square').style.backgroundColor = color();

});

button.addEventListener("click", function(){
    var element = document.createElement('div');
    element.style.backgroundColor = color();
    element.className = "saveSquare ";
    let SaveSquare = document.querySelectorAll(".saveSquare");
    let head = document.querySelector(".box");

    if(SaveSquare.length<15){
        head.appendChild(element);
    }else{
        if(c<15){
            SaveSquare[c].style.backgroundColor = color();
            c= c+1;
        }else{
            c=0;
            SaveSquare[c].style.backgroundColor = color();
            c++;
        }
    }

    let countBlock = Math.floor(window.innerWidth/300);

    if(countBlock<SaveSquare.length){
        for(let j = countBlock; j<SaveSquare.length; j++){
            SaveSquare[j].style.display = "none";
        }
    }
});

window.addEventListener('resize', function(){
    for(let f = 0; f<document.querySelectorAll(".saveSquare").length; f++){
        document.querySelectorAll(".saveSquare")[f].style.display = "flex";
    }
    
    let countBlock = Math.floor(window.innerWidth/300);
    if(countBlock<document.querySelectorAll(".saveSquare").length){
        for(let j = countBlock; j<document.querySelectorAll(".saveSquare").length; j++){
            document.querySelectorAll(".saveSquare")[j].style.display = "none";
        }
    }
});

function setColor(event) {
    event.style.backgroundColor = localStorage.color;
}
function color(){
    return 'rgb(' + CheckNumb(input[0].value)+','+CheckNumb(input[1].value)+','+CheckNumb(input[2].value)+')';
}
function CheckNumb(a) {
    if(a == ""){
        return a="0";
    }else{
        return a;
    }
}
