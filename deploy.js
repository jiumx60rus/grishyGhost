require('shelljs/global');
var moment = require('moment');
moment.locale('ru');

config.silent = true

console.time("Время выполнения");

// rm('-r', 'static');
rm('-r', 'staticDecor/dist');

exec('buster generate', function() {
    console.log("Сгенерирована копия Ghost сайта");
    console.log("Запуск оптимизации");
    console.log("...");

    exec('cd staticDecor && grunt', function() {
        console.log("Оптимизированно");

        console.timeEnd("Время выполнения");

        console.log("Подготовка перед отправкой");

        cp('-Rf', 'staticDecor/dist/', 'staticGit');

        console.log("Скопированно...");


        // Работа с git
        var emoji = [':ghost:', ':sunglasses:', ':boom:', ':skull:', ':speech_balloon:',
            ':rage3:', ':waning_gibbous_moon:', ':tada:', ':pushpin:', ':wink:', ':hankey:'
        ]
        var commitMesg = rand(emoji) + " Обновление блога от: " + moment().format("LL") + rand(emoji);

        exec('git add . && git commit -m"' + commitMesg + '" && git push', function(code, output) {
            if (!code) {
                console.log("Всё готово");
            } else {
                console.log(output);
            }

            console.log("Отправка основного репозитория закончена");
            console.log("Отправка статического блога");


            exec('cd staticGit && git add . && git commit -m"' + commitMesg + '" && git push', function(code, output) {
                if (!code) {
                    console.log("Всё готово");
                } else {
                    console.log('Program output:', output);
                }
            });
        })

    });
});


function rand(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
