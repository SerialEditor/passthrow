<h1>passthrow.js</h1>

<h2>Описание библиотеки</h2>

<p>Библиотека представляет собой ES6-модуль, экспортирующий объект <code>passthrow</code>:</p>

<pre><code>import passthrow from 'passthrow'

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
*/</code></pre>

<p>На данный момент объект содержит три метода, целенаправленно созданных для работы с индексами массивов (не исключено, что вы сможете найти им не менее прагматичное применение)</p>

<h2>Описание методов</h2>

<h3>filterInterestingIndices</h3>

<p>Метод <code>filterInterestingIndices</code> ищет в исследуемом массиве <code>search</code> элементы целевого массива <code>target</code> (идентичные элементы), возвращая массив индексов элементов <code>search</code>, оказавшихся идентичными элементам<code>target</code> (если элемент, принадлежащий <code>target</code>, отсутствует в <code>search</code> (не нашлось ни одного идентичного), результатом будет -1):</p>

<code>const filterInterestingIndices = passthrow.filterInterestingIndices;</code>

<code>let result = filterInterestingIndices(search, target);</code>

<p>Аргументами метода могут быть не только <b>массивы</b>, но и <b>массивоподобные (ArrayLike) / итерируемые объекты</b> (данные структуры преобразуются в массивы внутри метода).</p>
<p>Появление метода инспирировано реальным кейсом; репозиторий макетного прототипа кейса <a>https://github.com/SerialEditor/passthrow_demonstration_page</a> предоставляет пример практического применения метода.</p>

<h3>filterIndices</h3>

<b>Синтаксис:</b>

<pre><code>let result = filterIndices(search, function(item, index, array) {
    ...
});</code></pre>

<p>Функция <code>func</code> вызывается по очереди для каждого элемента <code>item</code> массива <code>search</code>; метод возвращает массив индексов элементов <code>search</code>, для которых вызов <code>func</code> вернул <code>true<code>.</p>

<h3>controlIndex</h3>

<code>const controlIndex = passthrow.controlIndex(init);</code>

Вызов <code>controlIndex</code> создает счетчик, позволяющий управлять начальным значением <code>init</code> через замыкание с помощью функций возвращаемого вызовом <code>controlIndex</code> массива: 

<pre><code>/*controlIndex = {
    getCurrent() {
        return current;
      },
      getChanged(value) {
        current = value;
        return current;
      },
} 
*/</code></pre>