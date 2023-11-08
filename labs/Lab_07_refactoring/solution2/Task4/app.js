var lst = [{FIO:'Петров А.А.',grade:5},
{FIO:'Иванов Б.Б.',grade:3.4},{FIO:'Сидоров Г.Г.',grade:9},
{FIO:'Немолодой Д.Д',grade:2},{FIO:'Молодой Е.Е',grade:3.4}];

var sum = 0;
var count = 0;
var data = [];
let err = 'Это значение учитываться не будет оно не соответствует допустимым значениям';

for(var y=0; y < lst.length; y++)
{
    if (lst[y].grade>5 || lst[y].grade<0) console.log(err);
    if (lst[y].grade<4) data.push(lst[y])
    sum += lst[y].grade;
    count ++;
}
sum = sum/count;
console.log('Средняя оценка: '+sum);
console.log('Плохие студенты:');
if(data.length > 0 ) {
    data.forEach((obj)=>{
        console.log('Фио: '+obj.FIO+'; Оценка: '+obj.grade)
    });
}
else{
    console.log('Таких нет');
}