<html>
<head>
    <script>
        var accordionItems = new Array();

        function init() {

            // Собираем все части аккордеона на странице
            var divs = document.getElementsByTagName( 'div' );
            for ( var i = 0; i < divs.length; i++ ) {
                if ( divs[i].className == 'accordionItem' ) accordionItems.push( divs[i] );
            }

            // назначаем событие onclick для заголовка каждой части аккордеона
            for ( var i = 0; i < accordionItems.length; i++ ) {
                var h2 = getFirstChildWithTagName( accordionItems[i], 'H2' );
                h2.onclick = toggleItem;
            }

            // скрываем все части аккордеона кроме первой
            for ( var i = 1; i < accordionItems.length; i++ ) {
                accordionItems[i].className = 'accordionItem hide';
            }
        }

        function toggleItem() {
            var itemClass = this.parentNode.className;

            // скрываем все части
            for ( var i = 0; i < accordionItems.length; i++ ) {
                accordionItems[i].className = 'accordionItem hide';
            }

            // показываем текущую часть аккордеона, если предыдущая была скрыта
            if ( itemClass == 'accordionItem hide' ) {
                this.parentNode.className = 'accordionItem';
            }
        }

        function getFirstChildWithTagName( element, tagName ) {
            for ( var i = 0; i < element.childNodes.length; i++ ) {
                if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
            }
        }


    </script>
    <style>
        body {
            font-size: 80%;
            font-family: Arial;
            width:360px;
        }

        .accordionItem h2 {
            margin: 0;
            font-size: 1em;
            padding: 0.4em;
            color: white;
            background-color: indianred;
            border-bottom: 1px solid blue;
        }

        .accordionItem h2:hover {
            cursor: pointer;
        }

        .accordionItem div {
            margin: 0;
            padding: 1em 0.4em;
            background-color: white;
            border-bottom: 1px solid cornflowerblue
            border-bottom: 1px solid red;
        }

        .accordionItem.hide h2 {
            color: black;
            background-color: cornflowerblue;
        }

        .accordionItem.hide div {
            display: none;
        }
    </style>
</head>

<body onload="init()">
<h1>Тестовый аккордеон</h1>

<div class="accordionItem">
    <h2>основы языка и как нанем говорить правильно</h2>
    <div>
        <p>Лексическая структура</p>
        <p>Типы данных, значения и переменные</p>
        <p>Выражения и операторы инструкции</p>
    </div>
</div>

<div class="accordionItem">
    <h2>функции</h2>
    <div>
        <p>Лексическая структура</p>
        <p>Типы данных, значения и переменные</p>
        <p>Выражения и операторы инструкции</p>
    </div>
</div>

<div class="accordionItem">
    <h2>Обработка ошибок и отладка</h2>
    <div>
        <p>Лексическая структура</p>
        <p>Типы данных, значения и переменные</p>
        <p>Выражения и операторы инструкции</p>
    </div>
</div>
<div class="accordionItem">
    <h2>Объекты и массивы</h2>
    <div>
        <p>Лексическая структура</p>
        <p>Типы данных, значения и переменные</p>
        <p>Выражения и операторы инструкции</p>
    </div>
</div>
<div class="accordionItem">
    <h2>события</h2>
    <div>
        <p>Лексическая структура</p>
        <p>Типы данных, значения и переменные</p>
        <p>Выражения и операторы инструкции</p>
    </div>
</div>

</body>
</html>