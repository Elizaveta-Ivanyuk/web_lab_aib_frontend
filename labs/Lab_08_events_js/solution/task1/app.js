let button = document.querySelectorAll(".colors");

for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
        document.querySelector('body').style.backgroundColor = generateColor();
        console.log(generateColor());

    });
}

function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }