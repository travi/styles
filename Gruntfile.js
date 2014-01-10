module.exports = function (grunt) {
    'use strict';

    require('load-grunt-config')(grunt);

    grunt.registerTask('compile', ['grunticon']);
    grunt.registerTask('default', 'compile');
};