module.exports = function toReadable(number) {
    // Создадим массивы строкового синтаксиса чисел
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teenNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tyNumbers = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const bigNumbers = ['hundred', 'thousand', 'million', 'billion', 'trillion'];

    if (number.toString().length === 1) {
        // Вернем строкое значение числа, если оно состоит из одного символа
        return numbers[number];
    } else {
        // Вернем строкое значение числа, если оно состоит из нескольких символов

        // Создадим пустой массив для генерации итогового числа
        let finalStrokeNumber = [];

        // Транформируем число в массив из тысячных 
        let transformStringToArr = number.toString().split('').reverse();
        let addSeparateSumbol = [transformStringToArr[0]];
        for (let i = 1; i < transformStringToArr.length; i++) {
            (i + 1) % 3 === 0 ?
                addSeparateSumbol.push(transformStringToArr[i]) && addSeparateSumbol.push('-') :
                addSeparateSumbol.push(transformStringToArr[i])
        }
        let joiningIntoArrays = addSeparateSumbol.join('').split('-').filter(el => el !== '');

        // Присвоим массивам строковые выражения
        let iteration = 0;
        joiningIntoArrays.forEach(function (el) {
            // Разделим элемент на массив
            let elementToArray = el.split('');
            // Создадим массив для генерации переведенных в строку элементов массива
            let readableNumber = [];
            // Поместим в массив название актуальной тысячной степени
            iteration === 0 ?
                false :
                el === '000' ?
                    false :
                    readableNumber.push(bigNumbers[iteration]);
            // Писвоим строковые значения для нулевых и десятых значений элемента
            elementToArray[1] === '1' ?
                readableNumber.push(teenNumbers[+elementToArray[0]]) :
                readableNumber.push(numbers[+elementToArray[0]]) && readableNumber.push(tyNumbers[+elementToArray[1]]);
            // Присвоим строковые значения для сотых значений числа
            +elementToArray[2] > 0 ?
                readableNumber.push('hundred') && readableNumber.push(numbers[+elementToArray[2]]) :
                false;
            // Установим номер следующей итерации
            iteration++;
            // Добавим получившуюся строку в формируемый итоговый массив строкового представления числа
            finalStrokeNumber.push(readableNumber.filter(el => el !== 'zero').reverse().join(' '));
        })

        // Сформируем итоговое строковое представление числа
        return finalStrokeNumber.reverse().join(' ');
    }
}
