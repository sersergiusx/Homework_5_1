// ---------------------------------------------
let obj1 = { // Создаем 1 обьект
    a: 1,
    b: 2,
    c: 'd'
}

let obj2 = { // Создаем 2 обьект
    z: 5,
    y: 6,
    x: 'y'
}

let count = 0;
let allArrays = []; // Создаем пустой массив

let arr1 = Object.entries(obj1); // Возвращает массив пар ключ: значение
let arr2 = Object.entries(obj2); // Возвращает массив пар ключ: значение

allArrays.push(arr1, arr2); // Добавляем массивы

allArrays = allArrays.flat(); // Массивы подняты на один уровень

// console.log('Look at allArrays' + allArrays); // Выводит в консоль

for (let i=0; i<allArrays.length; i++) { // Цикл перебора массива
    // console.log(allArrays[i]); // Вывод в консоль перебра массива
    for (let j=0; j<allArrays[i].length; j++) {
        // console.log(allArrays[i][j]) // Значения
        if ( typeof allArrays[i][j] === 'number') {
            count += allArrays[i][j]; // Сумируем только числовые значения
        }
    }
}

alert('count: ' + count); // Выводим результат в системное окно