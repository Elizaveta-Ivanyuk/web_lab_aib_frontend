while ( true )
{  
    var count=prompt('Введите кол-во человек ', undefined);
    if ( count > 0 || !isNaN(parseFloat(count))) break;
}
while ( true )
{  
    var salary = prompt('Введите зарплату на человека ', undefined);
    if ( salary > 0 ||!isNaN(parseFloat(salary))) break;
}
alert('Затраты на ЗП ' + count*salary);