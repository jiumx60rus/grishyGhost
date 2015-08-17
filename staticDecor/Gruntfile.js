var replace = require("replace");
var uncss = require('uncss');
var fs = require('fs')


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
        }
    });

    grunt.loadNpmTasks('grunt-reduce');
    grunt.loadNpmTasks('grunt-highlight');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


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

        uncss("dist", function(error, output) {
            grunt.file.write(glob, output);
        });
    });

    grunt.registerTask('default', ['reduce', "highlight", "repl", "uglify", "uncssTask", "cssmin"]);
};
