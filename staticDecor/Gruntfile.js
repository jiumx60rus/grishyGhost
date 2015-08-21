var replace = require("replace");
var uncss = require('uncss');
var fs = require('fs');
// require('load-grunt-tasks')(grunt);

module.exports = function(grunt) {

    grunt.initConfig({
        reduce: {
            root: '../static',
            outRoot: 'dist',
            include: [
                '*.html'
            ],
            fileRev: false, // Default: true
        },
        highlight: {
            scripts: {
                options: {
                    // useCheerio: false,
                    // lang: 'javascript' // there is no auto-detect for files
                },
                files: [{
                    expand: true,
                    cwd: 'dist', // in folder
                    src: ['**/*.html'],
                    dest: 'dist'
                }]
            }
        },
        uglify: {
            scripts: {
                files: [{
                    expand: true,
                    cwd: 'dist', // in folder
                    src: ['**/*.js'],
                    dest: 'dist'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist', // in folder
                    src: ['**/*.css'],
                    dest: 'dist'
                }]
            }
        },
        uncss: {
            dist: {
                files: {
                    'dist/tidy.css': ['dist/**/*.html']
                }
            }
        },
        pageres: {
            screenshot: {
                options: {
                    urls: 'http://localhost:2368/',
                    sizes: ['1200x2000'],
                    dest: 'dist',
                    delay: 2,
                    crop: true,
                    filename: 'screenshot'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-reduce');
    grunt.loadNpmTasks('grunt-highlight');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks('grunt-pageres');


    grunt.registerTask('repl', function() {
        replace({
            regex: "http://localhost:2368",
            replacement: "http://grishy.ru",
            paths: ['dist/rss'],
            recursive: true,
            silent: false,
        });
    });

    grunt.registerTask('uncssTask', function() {
        var glob = require("glob").sync("dist/bundle*.css")[0]

        grunt.file.write(glob, grunt.file.read('dist/tidy.css'));
        grunt.file.delete('dist/tidy.css');

        var README = '[Grishy.ru](http://grishy.ru/)\n=== === === === === === === === === === === === === === ==\n Блог о программировании.Сделан на[Ghost](https: //ghost.org/) и своеё генерации в статику. Все оптимизируется :)\n\nАвтоматический скриншот сайта после изменений:\n\n![Screenshot](screenshot.png)';

        grunt.file.write("dist/CNAME", "grishy.ru");
        grunt.file.write("dist/README.md", README);

    });

    grunt.registerTask('default', ['reduce', "highlight", "repl", "uglify", "uncss", "uncssTask", "pageres", "cssmin"]);
};
