var exec = require('child_process').exec;


var fs = require('fs');

var deleteFolderRecursive = function(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

deleteFolderRecursive("static");
// deleteFolderRecursive("staticGit");
deleteFolderRecursive("staticDecor/dist");

var buster = exec('buster generate',
    function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        var grunt = exec('cd staticDecor && grunt',
            function(error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }

                var commitText = "Blog update: " + new Date();

                var push = exec('cp -r staticDecor/dist/ staticGit && cd staticGit && git add -A && git commit -m "' + commitText + '" && git push',
                    function(error, stdout, stderr) {
                        console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        }

                    });
            });


    });
