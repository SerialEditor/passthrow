Описание библиотеки

Библиотека представляет собой ES6-модуль, экспортирующий объект passthrow:

import passthrow from 'passthrow'

/* {
    filterInterestingIndices(search, target) {
        ...
    },
    filterIndices(search, func) {
        ...
    },
    controlIndex(current) {
        ...
    }
}
*/

На данный момент объект содержит три метода, целенаправленно созданных для работы с индексами массивов (не исключено, что вы сможете найти им не менее прагматичное применение)

Описание методов

filterInterestingIndices

Метод filterInterestingIndices ищет в исследуемом массиве search элементы целевого массива target (пересекающиеся элементы), возвращая массив индексов элементов target в search (если элемент, принадлежащий target, отсутствует в search, результатом будет -1):

const filterInterestingIndices = passthrow.filterInterestingIndices;

let result = filterInterestingIndices(search, target);

Аргументами метода могут быть не только массивы, но и массивоподобные (ArrayLike) / итерируемые объекты (данные структуры преобразуются в массивы внутри метода).
Появление метода инспирировано реальным кейсом; репозиторий макетного прототипа кейса https://github.com/SerialEditor/passthrow_demonstration_page предоставляет пример практического применения метода.

filterIndices

Синтаксис:

let result = filterIndices(search, function(item, index, array) {
    ...
});

Функция func вызывается по очереди для каждого элемента item массива search; метод возвращает массив индексов элементов search, для которых вызов func вернул true.

controlIndex 

const controlIndex = passthrow.controlIndex(init);

Вызов controlIndex создает счетчик, позволяющий управлять начальным значением init через замыкание с помощью методов возвращаемого вызовом controlIndex объекта: 

/*controlIndex = {
    getCurrent() {
        return current;
      },
      getChanged(value) {
        current = value;
        return current;
      },
} 
*/