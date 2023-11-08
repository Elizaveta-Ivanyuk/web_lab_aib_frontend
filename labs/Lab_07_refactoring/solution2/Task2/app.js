var Fruit = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
//замена повторяющихся операций - циклом
for(let i = 0; i<Fruit.length; i++){
    console.log(Fruit[i]);
}
for(let i = 0; i<Fruit.length; i++){
    switch (Fruit[i]) {
        case 'apple':
            console.log('apple green')
            break;
        case 'strawberry':
            console.log('strawberry red')
            break;
        case 'blueberry':
            console.log('blueberry blue')
            break;
        case 'raspberry':
            console.log('raspberry light red')
            break;
        case 'lemon':
            console.log('lemon yellow')
            break;
    }
}