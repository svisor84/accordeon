function isAllTrue(source,filterFn){
    try {
        if (!Array.isArray(source) || source.length == 0) {throw new source.error};
            for (var i = 0; i < source.length; i++) {
                if(!filterFn(source[i])){
                    return false;
                }
            }
            return true;
    }
    catch(e){
            console.log('Ошибка ' + e.name + ": не массив или он пуст" );
        }
}
var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'],
    noArray = 'пусто',
    emptyArray = [];

function isNumber(val) {
    return isFinite(+val);
}

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false
console.log(isAllTrue(noArray, isNumber)); //вернет исключение
console.log(isAllTrue(emptyArray, isNumber)); //вернет исключение
