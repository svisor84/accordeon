    function calculator(firstNumber){
         var obj = {
            sum:function sum(){
                var res = 0;
                for (var i = 0; i < arguments.length; i++){
                    res += arguments[i];
                }
                return res + firstNumber;
            },
            dif:function dif(){
                var res = 0;
                for (var i = 0; i < arguments.length; i++){
                    res += arguments[i];
                }
                return firstNumber - res;
            },
            div:function div(){
                try {
                    var res = 0;
                    for (var i = 0; i < arguments.length; i++) {
                        if (arguments[i] == 0) {throw new arguments.error};
                        res += arguments[i];
                    }
                    return firstNumber / res;
                }
                catch (e) {
                    console.log('Ошибка ' + e.name + ": на 0 делить нельзя");
                }
            },
            mul:function mul(){
                var res = 0;
                for (var i = 0; i < arguments.length; i++){
                    res += arguments[i];
                }
                return firstNumber * res;
            }
        }
        return obj;
    };

var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400
