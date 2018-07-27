Game (JavaScript + HTML or Canvas/WebGl/SVG).

Вам необходимо сделать упрощенный клон игры https://www.prodigygame.com/
Пример геймплея: https://www.youtube.com/watch?v=XXUIRnQ4EJ4
Целевая аудитория: дети 6-8 лет.

Минимальная функциональность:

- Экран дуэли
- Модальный диалог выбора заклинания
- Экран задачи
- Экран таблицы рекордов

Пример геймплея по шагам:

- Битва начинается, у игрока и монстра по 100hp или более.
- Игрок выбирает заклинание первым. Выбор заклинания осуществляется посредством модального диалога. Название и последующая анимация заклинаний - на ваше усмотрение. Виды заклинаний также на ваше усмотрение - могут, как наносить урон, так и лечить.
- Игрок переходит к экрану задачи. В случае успешного решения - заклинание применяется, иначе - переход хода к монстру.
- Монстр применяет заклинание, наносит урон игроку.
- Если игрок победил - битва со следующим монстром. Если проиграл - показывается таблица рекордов, с количеством побежденных монстров и именем героя.

Варианты экрана "задача":

- Решение базовых арифметических примеров. В данном случае генерируется случайная пара чисел и случайная операция с ними. Например, 25 + 67 или 130 - 7, или 7 x 11 и т.д.
- Перевод с анлийского на русский. В данном случае игрок видит случайное английское слово (например, "cat") и должен ввести перевод. Правильных переводов может быть несколько (кот, кошка, котик и т.д.) Словарь должен находится в отдельном файле и легко конфигурироваться. Админку управления словарем делать не надо.
- Буквы слова перемешаны, необходимо, используя drag&drop, восстановить порядок. Например, lleyow -> yellow. Пример интерфейса - https://jqueryui.com/sortable/
- Аудирование. https://mdn.github.io/web-speech-api/speak-easy-synthesis/ Произносится слово, необходимо его вписать.
- Любые другие

Монстры:

- Автогенеренное имя. Имя получается путем слияния элементов из трех массивов. В первом массиве прилагательное - "ужасный", "злобный", "сопливый" и т.д. Во втором - "Огр", "Гном", "Гоблин" и т.д. В третьем - "Том", "Макс", "Дима" и т.д. В итоге - "Злобный Огр Том"
- Автогенеренное тело - "из частей". Вы определяете несколько "голов", "туловищ", "ног", "оружия", из которых собирается итоговый монстр. Пример - https://drive.google.com/open?id=12TYpEwRPKjwkC3Q61aAqmxL8wsbVw6pP

Технические требования:

- Поддержка Сhrome последней версии.
- Язык - JS/ES2015+ или TypeScript
- Использование любых игровых движков/фреймворков (например, https://phaser.io/) - запрещено.  - Библиотеки и фреймворки типа react/angular/vue/jquery/bootstrap использовать можно.
- Финальная версия игры должна быть доступна по ссылке. Самый просто способ - выложить на GitHub pages. (e.g. https://themarkmarrone.github.io/petrovich/, https://spider-shooter.github.io)

- Landing page. Должна содержать следующую информацию:
	- Название игры
	- Скриншоты геймплея
	- Ссылку для запуска игры
	- Информацию об авторе

- Возможность играть используя только клавиатуру (без мышки/тачпада/курсора и т.д.)
