document.addEventListener('DOMContentLoaded', function() {
    const item1 = document.getElementById('item_1')!;
    const item2 = document.getElementById('item_2')!;
    const contentDiv = document.getElementById('content')as HTMLDivElement;
    const secondLayerDiv = document.getElementById('content') as HTMLDivElement;
    // Функция загрузки контента в зависимости от выбранной вкладки
    function loadContent(tab:string) {
        if (tab === 'general') {
            contentDiv.innerHTML = `<p>Можно найти сайты по платным курсам на любой вкус в гугл папке курсы</p>
            <a href="https://roadmap.sh/roadmaps" target="_blank">Сайт с дорожными картами по всем языкам</a><br>
            <a href="https://ytclass.co/uk-UA " target="_blank">Сайт где можно найти урок по нужным темам</a><br>
            <a href="https://developer.mozilla.org/ru/ " target="_blank">Сайт где можна найти что угодно по веб програмированию</a><br>
                <a href="https://www.w3schools.com/sql/" target="_blank">Сайт где есть информация на любой язык програмирования</a><br>
                <a href="https://www.codingnepalweb.com/build-weather-app-html-css-javascript/" target="_blank">Еще одна веб платформа, где есть даже веб проекты, но я хз как ей пользоваться сейчас</a><br>
                <a href="https://fontawesome.com/icons/magnifying-glass?s=solid" target="_blank">Сайт с хорошими иконками для веба</a><br>
                <a href="https://learn.unity.com/?signup=true" target="_blank">Курс по изучению юнити( скорее всего платный)</a><br>
                <a href="https://webbooks.com.ua/download/?key=k4uWEjeJC&count=1125&cat=29" target="_blank">Сайт с книгами по проге на любой вкус</a><br>
                <a href="https://codernet.ru/books/python/python_kniga_receptov/" target="_blank">Тут тоже можно найти книги по проге</a><br>
                <p>Гитхаб</p>
                <a href="https://www.youtube.com/watch?v=zZBiln_2FhM&list=PL8NireK24VUJBJ53MR9JraiktpkmkNNqp" target="_blank">ресурс 1</a><br>
                <a href="https://www.youtube.com/watch?v=XijaLX1JZEE&list=WL&index=53" target="_blank">ресурс 2</a><br>
                <a href="https://www.youtube.com/watch?v=epdPeD4-9nY" target="_blank">Git в действии: практическое применение для разработчиков</a><br>
                <a href="https://www.youtube.com/watch?v=xG_Dxh5eHn0&list=WL&index=44&t=490s" target="_blank">вебшторм</a><br>
                <p>курсы по всем языкам(видео)</p>
                <a href="https://www.youtube.com/playlist?list=PL6DxKON1uLOHyPVa0XhcqcW2RhDytDpAI" target="_blank">ресурс 1</a><br>
                <a href="https://www.youtube.com/playlist?list=PL6DxKON1uLOEbfFpZQA9aztkj-guW52jn\n" target="_blank">ресурс 2</a><br>
                <a href="https://www.youtube.com/@UlbiTV/playlists" target="_blank">Канал где можно найти основы бека + фронта</a><br>

            `;
            item1.classList.add('active');                                                  //classList — это свойство любого элемента HTML, которое возвращает объект DOMTokenList. Этот объект представляет собой список всех классов, которые применены к данному элементу. С помощью classList можно добавлять, удалять и проверять наличие классов.
            item2.classList.remove('active');                                       //Метод add добавляет указанный класс к элементу. Если класс уже существует, он не будет добавлен повторно. В этом случае, мы добавляем класс active к элементу

        } else if (tab === 'languages') {
            contentDiv.innerHTML = '';
            // Создаем контейнер для кнопок
            const buttonGrid = document.createElement('div');
            buttonGrid.classList.add('button-grid');

            // Динамически добавляем кнопки
            const languages = ['JavaScript', 'Python', 'C++', 'C#', 'veb', 'go', 'bek', 'prisma', 'front', 'bd', 'games'];
            languages.forEach((lang, index) => {
                const button = document.createElement('button');
                button.textContent = lang;
                button.addEventListener('click', () => {
                    displayLanguageInfo(lang);
                });
                buttonGrid.appendChild(button);  //appendChild — это метод, используемый в JavaScript и TypeScript для добавления нового узла (элемента) в конец списка дочерних элементов указанного родительского элемента.
            });
            // Добавляем контейнер с кнопками в основной контент
            contentDiv.appendChild(buttonGrid);
            item1.classList.remove('active');
            item2.classList.add('active');
        }

    }


        // Функция для отображения информации о языке
        function displayLanguageInfo(language: string) {
            let content = '';

            switch(language) {
                case 'JavaScript':
                    content = `
                    <h2>JavaScript</h2>
                    <a href="https://learn.javascript.ru" target="_blank">Учебник по JavaScript</a><br>
                    <a href="https://www.youtube.com/watch?v=PkZNo7MFNFg" target="_blank">Введение в JavaScript (видео)</a>
                `;
                    break;
                case 'Python':
                    content = `
                    <h2>Python</h2>
                    <a href="https://www.learnpython.org/" target="_blank">Курс по Python</a><br>
                    <a href="https://www.youtube.com/watch?v=rfscVS0vtbw" target="_blank">Введение в Python (видео)</a><br>
                    <a href="https://www.youtube.com/@it_start/playlists" target="_blank">канал для питонистов</a><br>
                    <a href="https://www.youtube.com/watch?v=ahe3WpBMdm4&list=PLvoBekrlHDgROfUUHMbrrdsy_b2y2V_rj" target="_blank">курс</a><br>
                    <a href="https://www.youtube.com/watch?v=ZZVWae8E9K0&list=PL8NireK24VUIsOx9jwdBZMa4psRTe1YaY" target="_blank">книга</a><br>
                   
                `;
                    break;
                case 'C++':
                    content = `
                    <h2>C++</h2>
                    <a href="https://www.youtube.com/watch?v=2UDMGCcRCjo&list=PLiPRE8VmJzOpn6PzYf0higmCEyGzo2A5g" target="_blank">курс</a><br>
                    <a href="https://www.youtube.com/@someStudentChannel/playlists" target="_blank">канал 1</a><br>
                    <a href="https://www.youtube.com/@SimpleCodeIT/playlists" target="_blank">канал 2</a><br>
                    <a href="https://www.youtube.com/@BloganProgramming/playlists" target="_blank">канал 3</a><br>
                    <a href="https://www.youtube.com/watch?v=Lo1UKhw52ig&list=PL7vq4D0vOpQa9WaLe7btV01eixBUZ6-Ve" target="_blank">ресурс 2</a><br>
                    
                `;
                    break;
                case 'C#':
                    content = `
                     <a href="https://www.youtube.com/watch?v=KBHwRw6S448&list=PL7vq4D0vOpQZI9_AZIPGh4nxuePewUR5X" target="_blank">ресурс 1</a><br>
                     <a href="https://www.youtube.com/@senior_v_IT/playlists" target="_blank">канал 1</a><br>
                     <a href="https://www.youtube.com/@sergeykazantsev1655/videos" target="_blank">канал 2</a><br>
                     <a href="https://www.youtube.com/@SimpleCodeIT/playlists" target="_blank">канал 3</a><br>
                     <a href="https://www.youtube.com/@BloganProgramming/playlists" target="_blank">канал 4</a><br>
`;
                    break;
                case 'veb':
                    content = `
                     <a href="https://www.youtube.com/watch?v=1SHbv0SH5wY&list=PLn2e1F9Rfr6lj7O6z56_lk-GA7RegOFWv" target="_blank">ресурс 1</a><br>
                     <a href="https://www.youtube.com/watch?v=yJcCKuxfb2o&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr" target="_blank">ресурс 2</a><br>
                     <a href="https://www.youtube.com/@CodingLabYT/playlists" target="_blank">канал где представилены шаблоны обьектов 1</a><br>
                     <a href="https://www.youtube.com/@CodingNepal/playlists" target="_blank">канал где представилены шаблоны обьектов 2</a><br>
`;
                    break;
                case 'go':
                    content = `
                     <a href="https://www.youtube.com/watch?v=pfmxPtLIW34&list=PL0lO_mIqDDFXXqMzFOIGIb7FOprmUQ_tt" target="_blank">ресурс 1</a><br>
                     <a href="https://www.youtube.com/@gou.ukraine/playlists" target="_blank">канал 1</a><br>
                     <a href="https://www.youtube.com/@MaksimZhashkevych/playlists" target="_blank">канал 2</a><br>
`;
                    break;
                case 'bek':
                    content = `
                     <a href="https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g" target="_blank">курс по тс</a><br>
                     <a href="https://www.youtube.com/@PurpleSchool/playlists" target="_blank">канал 1</a><br>
`;
                    break;
                case 'prisma':
                    content = `
                     <a href="https://www.youtube.com/watch?v=1SHbv0SH5wY&list=PLn2e1F9Rfr6lj7O6z56_lk-GA7RegOFWv" target="_blank">ресурс 1</a><br>
                     <a href="https://www.youtube.com/watch?v=QeUp3CahkQw&list=PL8NireK24VUJmMg4Wm1_S6R_FOgjwYfKl" target="_blank">ресурс 2</a><br>
`;
                    break;
                case 'front':
                    content = `
                     <a href="https://www.youtube.com/watch?v=yJcCKuxfb2o&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr" target="_blank">ресурс 1</a><br>
                     <a href="https://www.youtube.com/@PurpleSchool/playlists" target="_blank">канал 1</a><br>
`;
                    break;
                case 'bd':
                    content = `
                     <a href="https://www.youtube.com/watch?v=8cP6x9pTIy0&list=WL&index=60&t=907s" target="_blank">ресурс 1</a><br>
                     <a href="https://www.youtube.com/@ion_lab/videos" target="_blank">канал 1</a><br>
                     <a href="https://www.youtube.com/watch?v=h5wgbJiSy7Q" target="_blank">Создание таблиц в PostgreSQL с помощью pgAdmin 4 </a><br>
                     <a href="https://www.youtube.com/watch?v=HkT_VrzbXZQ" target="_blank">ПОВНИЙ ПРАКТИЧНИЙ КУРС SQL для аналітиків даних</a><br>
                     <a href="https://www.youtube.com/watch?v=p3qvj9hO_Bo&list=PLZlA0Gpn_vH9lZBruSHgs41ldy5gZgknU&index=14" target="_blank">ресурс 2</a><br>
`;
                    break;
                case 'games':
                    content = `
                     <a href="https://www.youtube.com/watch?v=1k84NDe6uiQ&list=WL&index=47&t=636s" target="_blank">ресурс 1</a><br>
                     <a href="https://www.youtube.com/@natatem0080/videos" target="_blank">канал 1</a><br>
                     <a href="https://www.youtube.com/@gosha_dudar/playlists" target="_blank">канал 2</a><br>
                     <a href="https://www.youtube.com/@MasonMasonoff/playlists" target="_blank">канал 3</a><br>
                     <a href="https://www.youtube.com/@maxters/playlists" target="_blank">канал 4</a><br>
                     <a href="https://www.youtube.com/watch?v=i12CmyQWAIs&list=WL&index=48&t=273s" target="_blank">ресурс 2</a><br>
                     <a href="https://www.youtube.com/watch?v=0Lyz8J5_jDQ" target="_blank">ресурс 3</a><br>
`;
                    break;
                default:
                    content = '<p>Информация по выбранному языку недоступна.</p>';
            }

            contentDiv.innerHTML = content;
        }

// Устанавливаем вкладку "Общее" по умолчанию
    loadContent('general');
    // Обновляем содержимое div с классом second_layer

    item1.addEventListener('click', () => {loadContent('general');})
    item2.addEventListener('click', () => {loadContent('languages');})

});
