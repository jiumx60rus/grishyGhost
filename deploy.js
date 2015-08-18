require('shelljs/global');

config.silent = true

console.time("Время выполнения ");

rm('-r', 'static');
rm('-r', 'staticDecor/dist');

exec('buster generate', function() {
    console.log("Сгенерирована копия Ghost сайта");
    console.log("Запуск оптимизации");
    console.log("...");

    exec('cd staticDecor && grunt', function() {
        console.log("Оптимизированно");
        console.log("Подготовка перед отправкой");

        cp('-R', 'staticDecor/dist/', 'staticGit');

        console.log("Скопированно...");

        var commitMesg = "Обновление блога:" + new Date();

        // Работа с git
        exec('git add .', function() {
            exec('git commit -m"' + commitMesg + '"', function() {
                exec('git push', function() {
                	
                })
            })
        })

        console.timeEnd("Время выполнения ");

    });
});


// var buster = exec('buster generate',
//     function(error, stdout, stderr) {
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//         if (error !== null) {
//             console.log('exec error: ' + error);
//         }

//         var grunt = exec('cd staticDecor && grunt',
//             function(error, stdout, stderr) {
//                 console.log('stdout: ' + stdout);
//                 console.log('stderr: ' + stderr);
//                 if (error !== null) {
//                     console.log('exec error: ' + error);
//                 }

//                 var commitText = "Blog update: " + new Date();

//                 var push = exec('cp -r staticDecor/dist/ staticGit && cd staticGit && git add -A :/ && git commit -m "' + commitText + '" && git push',
//                     function(error, stdout, stderr) {
//                         console.log('stdout: ' + stdout);
//                         console.log('stderr: ' + stderr);
//                         if (error !== null) {
//                             console.log('exec error: ' + error);
//                         }

//                         var push = exec('git add -A :/ && git commit -m "' + commitText + '" && git push',
//                             function(error, stdout, stderr) {
//                                 console.log('stdout: ' + stdout);
//                                 console.log('stderr: ' + stderr);
//                                 if (error !== null) {
//                                     console.log('exec error: ' + error);
//                                 }

//                             });
//                     });
//             });


//     });
