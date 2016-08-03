export function myFuncs() {
    var obj = {
        newForeach: function newForeach(source) {
            if (!Array.isArray(source) || source.length == 0) {throw new SyntaxError("Ошибка в данных, не массив!")};
            var startNum = 0;
            var mySource = source;
            function consoleRec(array,position){
                console.log(array[startNum]);
                startNum = startNum+1;
                if(startNum <= array.length-1){
                    consoleRec(array,startNum)
                }
            }
            consoleRec(mySource,startNum);
        },
        newFilter: function newFilter(source,fn) {
            if (!Array.isArray(source) || source.length == 0) {throw new SyntaxError("Ошибка в данных, не массив!")};
            if (!fn) {throw new SyntaxError("Функция не определена!")};
            var mySource = source;
            var myFn = fn;
            var result = [];
            for(var i = 0; i < mySource.length; i++){
                if(myFn(mySource[i])){
                    result += mySource[i] + ', ';
                }
            }
            return result;
        },
        newMap: function newMap(source, fn) {
            if (!Array.isArray(source) || source.length == 0) {throw new SyntaxError("Ошибка в данных, не массив!")};
            if (!fn) {throw new SyntaxError("Функция не определена!")};
            var mySource = source;
            var myFn = fn;
            var result = [];
            for(var i = 0; i < mySource.length; i++){
                if(myFn(mySource[i])){
                    result[i] = true;
                }else{
                    result[i] = false;}
            }
            return result;
        },
        newSlice: function newSlice(source,start, end) {
            if (!Array.isArray(source) || source.length == 0) {throw new SyntaxError("Ошибка в данных, не массив!")};

            var result = [];

            if(start){var myStart = start;}else{ var myStart = 0}

            if(end){var myEnd = end-1;}else{ var myEnd = source.length}

            if(end < 0){myEnd = source.length + end - 1}

            for (var i = myStart; i < source.length; i++) {
                if(i<=myEnd)
                {
                    result.push(source[i])
                }
            }
            return result;
        },
        newReduce: function newReduce(source,fn,initialValue) {
            if (!Array.isArray(source) || source.length == 0) {throw new SyntaxError("Ошибка в данных, не массив!")}
            if (!fn) {throw new SyntaxError("Функция не определена!")}
            var myFn = fn;
            var mySource = source;
            var myPreviousValue = initialValue;
            var sum = 0;
            var result = 0;
            for(var i = 0; i < source.length; i++){
                if(myPreviousValue != 0)
                {
                    result = myFn(myPreviousValue,source[i], i, mySource);
                    myPreviousValue = 0;
                }
                else
                {
                    sum = 0;
                    result += myFn(sum,source[i], i, mySource)
                }
            }
            return result;
        }
    }
    return obj;
}
var arr = [1,2,3,4,5];
var myFuncs = myFuncs();
console.log(myFuncs.newForeach(arr));
console.log(myFuncs.newFilter(arr, value => value > 2 ));
console.log(myFuncs.newMap(arr, value => value > 2 ));
console.log(myFuncs.newSlice(arr,2,-5));
console.log(myFuncs.newReduce(arr,function(sum, current){ return sum + current},5));
