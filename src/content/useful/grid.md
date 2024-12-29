---
title: "Grid"
description: "Работа с расположением элементов в сетке."
chips: ["1 сем", "HTML", "CSS", "Grid"]
---

_Автор: Самойленко Марк_

# Grid

Сетка (grid) представляет собой пересекающийся набор горизонтальных и вертикальных линий, образующих колонки и строки. Элементы могут быть помещены в сетку в пределах линий этих колонок и строк.

Чтобы создать сетку, нужно выдать элементу свойство `display` со значением `grid` или `inline-grid`. Разница между этими двумя значениями заключается в том, что в первом случае элемент будет блочный, тогда как во втором — строчный.

Чтобы начать, нам нужен элемент, которому мы бы выставили соответствуюещее значение для `display`. Пока что магия grid незаметна, так как сейчас дочерние элементы выстроены в одну колонку друг под другом, как при стандартном потоке.

![Пример базовой настройки grid-сетки](/web-course-site/grid-post/image1.png)

## Определения

- **Грид-контейнер**. Грид-контейнером является элемент, к которому мы применяем свойство `display` со значением `inline-grid` или `grid`.

    ```html
    <div class="container">
        <div class="item item-1"></div>
        <div class="item item-2"></div>
        <div class="item item-3"></div>
    </div>
    ```

- **Грид-элемент**. Это элемент прямой наследник грид-контейнера. В примере ниже элемент с классом `item` является грид-элементом, тогда как `sub-item` уже им не является.

    ```html
    <div class="container">
        <div class="item"></div>
        <div class="item">
            <p class="sub-item"></p>
        </div>
        <div class="item"></div>
    </div>
    ```

- **Линия сетки**. Линии сетки составляют структуру всей сетки. Они могут быть как вертикальными (column grid line), так и горизонтальными (row grid line). Линии сетки нумеруются начиная с левого и верхнего края для вертикальных и горизонтальных линий соответственно. Нумеруются они начиная с единицы. Желтая линия на рисунке является примером вертикальной линии сетки. По счёту она будет третьей вертикальной линией сетки.

    ![Вертикальная линия сетки с нумерацией](/web-course-site/grid-post/image4.png)

На следующем рисунке можно наглядно увидеть нумерацию линий сетки:

![Нумерация линий сетки](/web-course-site/grid-post/image5.png)

- **Клетка сетки**. Пространство между двумя соседними горизонтальными **и** двумя соседними вертикальными линиями сетки является клеткой сетки. Это является структурной единицей сетки. На примере отображена клетка сетки, которая образована вертикальными линиями 2 и 3, а также горизонтальными линиями 1 и 2.

    ![Пример клетки сетки](/web-course-site/grid-post/image6.png)

- **Грид-трек (грид-полоса)**. Грид-полосой является пространство между двумя соседними линиями сетки (как вертикальными, так и горизонтальными). Проще говоря, грид-трек — это полный ряд сетки или её полная колонка. На рисунке ниже показан грид-трек, который представлен полным рядом сетки.

    ![Полоса сетки или грид-трек](/web-course-site/grid-post/image7.png)

- **Грид-область (grid-area)**. Грид-областью является пространство сетки, окруженное четырьмя линиями сетки. Грид-область может состоять из любого количества клеток сетки. На рисунке ниже представлена грид-область, которая образована вертикальными линиями 1 и 3, горизонтальными линиями 1 и 3.

    ![Пример грид-области, образованной несколькими клетками сетки](/web-course-site/grid-post/image8.png)

В данном примере также можно выделить множество других грид-областей. Одной из таких областей является область, выделенная серым цветом. Она образована вертикальными линиями 3 и 4, горизонтальными линиями 1 и 3.

---

## Свойства сетки (грид-контейнера)

- **display**
  Обозначает элемент как грид-контейнер.

    ```css
    .container {
        direction: grid | initial-grid;
    }
    ```

- **grid-template-areas**
  Определяет шаблон сетки по именам грид-областей. Повторение имён объединяет две клетки. Точка определяет пустую клетку. Этот синтаксис позволяет визуализировать, как будет выглядеть сетка, задавая, например, области для шапки сайта, футера, бокового меню и т.д.

    ```css
    .container {
        grid-template-areas: "<grid-area-name> | . | none | ...";
    }
    ```

    Например:

    ```css
    .item-a {
        grid-area: header;
    }
    .item-b {
        grid-area: main;
    }
    .item-c {
        grid-area: sidebar;
    }
    .item-d {
        grid-area: footer;
    }
    .container {
        display: grid;
        grid-template-columns: 50px 50px 50px 50px;
        grid-template-rows: auto;
        grid-template-areas:
            "header header header header"
            "main main . sidebar"
            "footer footer footer footer";
    }
    ```

    Примечание: свойство `grid-area` будет рассмотрено ниже в разделе “Свойства грид-элементов”.

    После применения данных свойств и их значений, мы получим следующую картину на сайте:

    ![Результат использования grid-template-areas](/web-course-site/grid-post/image13.png)

    Каждая строка в значении этого свойства определяет один ряд в будущей сетке, а колонки внутри одного ряда разделены пробелом. В каждом ряду должно быть одинаковое количество колонок.

- **column-gap, row-gap** (ранее - `grid-column-gap`, `grid-row-gap`)
  Эти свойства определяют "размер" линий сетки. По сути, они задают отступы между элементами сетки. `column-gap` задаёт отступы между колонками, а `row-gap` — между рядами.

    ```css
    .container {
        display: grid;
        grid-template-columns: 100px 100px 100px 100px;
        grid-template-rows: 80px auto 80px;
        colomn-gap: 10px;
        row-gap: 15px;
    }
    ```

    Результат (после добавления `display: grid` нашему контейнеру):

    ![Отступы в сетке с column-gap и row-gap](/web-course-site/grid-post/image15.png)

    Для удобства введено свойство `grid-gap`, позволяющее задать отступы и между рядами, и между колонками одновременно:

    ```css
    .container {
        display: grid;
        grid-template-columns: 100px 100px 100px 100px;
        grid-template-rows: 80px auto 80px;
        gap: 15px 10px;
    }
    ```

## Justify-items

Данное свойство выравнивает грид-клетки по горизонтали. Оно применяется ко всем клеткам сетки одновременно.

```css
.container {
    justify-items: start | end | center | stretch;
}
```

Значения свойства:

- **start**: каждый элемент сетки выравнивается поверхнему краю грид-клетки
  ![Выравнивание элементов по верхнему краю](/web-course-site/grid-post/image23.png)
- **end**: каждый элемент сетки выравнивается по нижнему краю грид-клетки
  ![Выравнивание элементов по нижнему краю](/web-course-site/grid-post/image24.png)
- **center**: каждый элемент сетки выравнивается по центру грид-клетки
  ![Выравнивание элементов по центру](/web-course-site/grid-post/image25.png)
- **stretch**: каждый элемент сетки растягивается на всю высоту грид-клетки
  ![Растяжение элементов на всю высоту](/web-course-site/grid-post/image26.png)

## Align-items

Данное свойство определяет выравнивание грид-клеток по вертикали (по колонкам). Это свойство применяет выравнивание сразу ко всем клеткам сетки.

```css
.container {
    align-items: start | end | center | stretch;
}
```

### Значения, которые может принимать данное свойство

<div id="align">
<form>
    <label><input type="radio" name="align" value="stretch" checked> stretch</label>
    <label><input type="radio" name="align" value="start"> start</label>
    <label><input type="radio" name="align" value="center"> center</label>
    <label><input type="radio" name="align" value="end"> end</label>
</form>
<div class="example">
    <div class="grid-borders">
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
    </div>
    <div class="grid">
        <p>Lorem.</p>
        <p>Quae.</p>
        <p>Voluptatum.</p>
        <p>Assumenda!</p>
        <p>Iusto?</p>
        <p>Est.</p>
    </div>
</div>

<style>
    #align .example {
      position: relative;
    }

    #align form {
        display: grid;
    }

    #align .grid-borders {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 80px;
        place-items: stretch;
        border: 1px solid black;
    }

        #align .grid-borders > div {
        border: 1px solid black;
    }

    #align .grid {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        --js-align: stretch;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 80px;
        align-items: var(--js-align, "stretch");
    }

    #align p {
        text-align: center;
        border: 2px solid oklch(0.8039 0.194 70.76);
        margin: 0;
    }
</style>
<script>
    const grid = document.querySelector("#align .grid")
    const form = document.querySelector("#align form")
    form.addEventListener("change", (e) => {
        grid.style.setProperty("--js-align", e.target.value);
    })
</script>
</div>

## Justify-content

Главное не путать с justify-items.

Иногда размеры заданной нами сетки (с помощью свойства `grid-template-columns`) могут быть меньше, чем размер самого грид-контейнера. Это свойство выравнивает сетку по горизонтальной оси.

```css
.container {
    align-items: start | end | center | stretch | space;
}
```

### Значения, которые может принимать данное свойство

- **start**: сетка расположена по левому краю контейнера
  ![Сетка по левому краю](/web-course-site/grid-post/image28.png)
- **end**: сетка расположена по правому краю контейнера
  ![Сетка по правому краю](/web-course-site/grid-post/image29.png)
- **center**: сетка расположена по центру контейнера
  ![Сетка по центру контейнера](/web-course-site/grid-post/image30.png)
- **stretch**: сетка растягивается на всю длину контейнера
  ![Растяжение сетки на всю ширину контейнера](/web-course-site/grid-post/image31.png)
- **space-around** (подобно flex’у): добавляет отступы между каждой колонкой и добавляет половину этого отступа слева и справа от краёв сетки
  ![Отступы вокруг элементов](/web-course-site/grid-post/image32.png)
- **space-between** (подобно flex’у): добавляет отступы между каждой колонкой.
  ![Отступы между колонками](/web-course-site/grid-post/image33.png)
- **space-evenly** (подобно flex’у): добавляет отступы между каждой колонкой + добавляет такие же отступы от краёв сетки
  ![Равномерные отступы по всей сетке](/web-course-site/grid-post/image34.png)

## Align-content

Иногда размеры заданной нами сетки (с помощью свойства `grid-template-rows`) могут быть меньше, чем размер самого грид-контейнера. Это свойство выравнивает сетку по вертикальной оси.

```css
.container {
    align-content: start | end | center | stretch | space-around;
}
```

### Значения, которые может принимать данное свойство

- **start**: сетка расположена по верхнему краю контейнера
  ![Выравнивание сетки по верхнему краю контейнера](/web-course-site/grid-post/image36.png)
- **end**: сетка расположена по нижнему краю контейнера
  ![Выравнивание сетки по нижнему краю контейнера](/web-course-site/grid-post/image37.png)
- **center**: сетка расположена по центру контейнера
  ![Выравнивание сетки по центру контейнера](/web-course-site/grid-post/image38.png)
- **stretch**: сетка растягивается на всю высоту контейнера
  ![Растяжение сетки на всю высоту контейнера](/web-course-site/grid-post/image39.png)
- **space-around** (подобно flex’у): добавляет отступы между каждым рядом и добавляет половину этого отступа сверху и снизу от краёв сетки
  ![Отступы между рядами и краями контейнера](/web-course-site/grid-post/image40.png)
- **space-between** (подобно flex’у): добавляет отступы между каждым рядом.
  ![Отступы только между рядами](/web-course-site/grid-post/image41.png)
- **space-evenly** (подобно flex’у): добавляет отступы между каждым рядом + добавляет такие же отступы от краёв сетки
  ![Равномерные отступы между рядами и краями контейнера](/web-course-site/grid-post/image42.png)

## Свойства грид-элементов

- **grid-column-start, grid-column-end, grid-row-start, grid-row-end**
  Эти свойства определяют место грид-элемента в сетке грид-контейнера, помогая изменять порядок элементов на странице.

### Возможные значения

- `<номер линии>` - номер линии сетки
- `<name>` - имя одной из линий сетки
- `span <число>` - элемент расширяется на `<число>` грид-треков
- `span <name>` - элемент расширяется до линии с именем `<name>`
- `auto` - автоматически определяет расположение элемента

```css
grid-colomn-start: 2;
grid-colomn-end: five;
grid-row-start: row-start;
grid-row-end: 3;
```

После применения этих свойств мы получаем такое расположение:
![Результат расположения элементов](/web-course-site/grid-post/image44.png)

Второй пример:

```css
.item-b {
    grid-colomn-start: 1;
    grid-colomn-end: span col-start;
    grid-row-start: 2;
    grid-row-end: span 2;
}
```

![Определение области для элемента](/web-course-site/grid-post/image46.png)

P.S.: элементы, заданные таким образом, могут пересекаться

- **grid-column, grid-row**
  Сокращённая запись для свойств размещения грид-элементов. Пример синтаксиса:

    ```css
    .item-c {
        grid-colomn: 3 / span 2;
        grid-row: third-line / 4;
    }
    ```

Результат:

![Расположение элемента в области](/web-course-site/grid-post/image48.png)

- **grid-area**
  Определяет область, которую колонка занимает внутри грид-контейнера.

    ```css
    .item-d {
        grid-area: header;
    }
    ```

Результат:
![Расположение элемента в области](/web-course-site/grid-post/image50.png)

## justify-self

Данное свойство выравнивает грид-элемент относительно грид-клетки по горизонтальной оси и применяется к одному элементу.

```css
.item {
    justify-self: start | end | center | stretch;
}
```

### Значения

- **start**: выравнивание по левому краю
  ![Выравнивание элемента по левому краю](/web-course-site/grid-post/image52.png)
- **end**: выравнивание по правому краю
  ![Выравнивание элемента по правому краю](/web-course-site/grid-post/image53.png)
- **center**: выравнивание по центру клетки
  ![Выравнивание элемента по центру клетки](/web-course-site/grid-post/image54.png)
- **stretch**: растяжение на всю ширину клетки
  ![Растяжение элемента по ширине клетки](/web-course-site/grid-post/image55.png)

## align-self

Выравнивает грид-элемент по вертикальной оси в пределах клетки.

```css
.item {
    align-self: start | end | center | stretch;
}
```

### Значения

- **start**: по верхнему краю клетки
  ![Выравнивание элемента по верхнему краю клетки](/web-course-site/grid-post/image57.png)
- **end**: по нижнему краю клетки
  ![Выравнивание элемента по нижнему краю клетки](/web-course-site/grid-post/image58.png)
- **center**: по центру клетки
  ![Выравнивание элемента по центру клетки](/web-course-site/grid-post/image59.png)
- **stretch**: на всю высоту клетки
  ![Растяжение элемента по высоте клетки](/web-course-site/grid-post/image60.png)

## Специальные единицы измерения

Eдиница измерения **fr** (fraction/доля) указывает на соотношение, в котором будет распределено свободное пространство в грид-контейнере.

```css
grid-template-column: 1fr 3fr;
```

Доли можно комбинировать с другими единицами измерения.

```css
grid-template-column: 50px 1fr 50px;
```

Другие варианты указания размера полосы:

- **auto** - размеры по содержимому
- **min-content** - минимально возможный размер контента
- **max-content** - максимально возможный размер контента
- **fit-content** - используется доступное пространство, но в пределах min/max

```css
grid-template-column: 50px min-content 1fr;
```

## Функции в grid

- **minmax(min, max)** - задаёт минимальный и максимальный размеры
- **repeat(N, size)** - упрощает создание одинаковых размеров для ячеек

С их помощью реализуется шаблон [RAM](//web.dev/patterns/layout/repeat-auto-minmax).

## Примеры на практике

### Бесконечный список

Используя грид, можно создать макет с равными отступами и размерами для списка элементов.
![Пример бесконечного списка элементов в сетке](/web-course-site/grid-post/image64.png)

Сетка разметки с номерами линий:
![Пример разметки линий сетки](/web-course-site/grid-post/image65.png)

Стили для такого расположения:

```css
.container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    align-items: flex-start;
}
```

### Сложная страница профиля

Грид позволяет гибко настраивать расположение блоков, сохраняя одинаковые отступы и поддерживая адаптивность.

![Пример макета страницы профиля](/web-course-site/grid-post/image67.png)

Стили для такого расположения:

```css
.container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
        "user-card user-srars"
        "tabs tabs";
    gap: 30px 10px;
}
```
