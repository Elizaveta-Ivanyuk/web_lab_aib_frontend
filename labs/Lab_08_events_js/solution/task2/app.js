let input = document.querySelectorAll("input");

for (let i = 0; i < input.length; i++){
    input[i].addEventListener("input", function(){
        this.value = this.value.replace(/[^0-9\.]/g, '');
        let red = input[0].value;
        let green = input[1].value;
        let blue = input[2].value;
        document.querySelector('.square').style.backgroundColor = 'rgb(' + CheckNumb(red)+','+CheckNumb(green)+','+CheckNumb(blue)+')';
        console.log('rgb(' + CheckNumb(red)+','+CheckNumb(green)+','+CheckNumb(blue)+')');
    });
    
}

function CheckNumb(a) {
    if(a == ""){
        return a="0";
    }else{
        return a;
    }
}