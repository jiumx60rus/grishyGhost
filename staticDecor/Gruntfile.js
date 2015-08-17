/*
This is an example configuration for grunt-reduce
*/
module.exports = function(grunt) {
    'use strict';

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
        uncss: {
            dist: {
                files: {
                    'dist/static/css.css': 'dist/**/*.html'
                }
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
    });

    grunt.loadNpmTasks('grunt-reduce');
    grunt.loadNpmTasks('grunt-highlight');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['reduce', "highlight", "uncss", "uglify"]);
};
