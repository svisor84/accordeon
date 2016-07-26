function isSomeTrue(source, filterFn) {
    try {
        if (!Array.isArray(source) || source.length == 0) {throw new source.error};
        for (var i = 0; i < source.length; i++) {
            if (filterFn(source[i])) {
                return true;
            }
        }
        return false;
    }
    catch (e) {
        console.log('Ошибка ' + e.name + ": не массив или он пуст");
    }
}
var allNumbers = [1, 2, 4],
    someNumbers = ['привет', 4,'loftschool'],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

function isNumber(val) {
    return isFinite(+val);
}

console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
