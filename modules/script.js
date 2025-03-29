
function Random(rowCount,colCount){
    let randomField=new Array(rowCount);

    // создаем поле 10х10 и заполняем его случаным образом
    // 0 - ячейка незаполнена, 1- заполнена
    for (let i =0 ; i<rowCount; i++){
        
        randomField[i]=new Array(colCount);
        
        for (let j =0; j< colCount; j++) {
        randomField[i][j]=Math.floor(Math.random() * 2);
        
        }
    }
     return randomField;
}

module.exports.Random=Random;