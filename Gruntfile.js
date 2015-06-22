module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'), 

        connect: {
            server: {
              options: {
                port: 8080,
                // livereload: true,
                // livereload: false,
                target: 'http://localhost:8080', 
                appName: 'open',
                open: true,
                hostname: '*' 
              }
            }
        },    

        sprite:{
          all: {
            padding: 2,
            src: 'img/icons/*.png',
            dest: 'img/spritesheet.png',
            destCss: 'styl/sprites.css'
            ,
            cssTemplate: function (params) {
                var result = '';
                // .sprite {display: inline-block; background-image: url(../img/spritesheet.png); background-repeat: no-repeat;}';
                for (var i = 0, ii = params.items.length; i < ii; i += 1) {
                    result += '.icon-' + params.items[i].name + '{\n' +
                        'background-position: ' + params.items[i].px.offset_x + ' ' + params.items[i].px.offset_y + ';\n' +
                        'width: ' + params.items[i].px.width + ';\n' +
                        'display: inline-block;\n' +
                        'background-repeat: no-repeat;\n' +
                        'background-image: url(../img/spritesheet.png);\n' +
                        'height: ' + params.items[i].px.height + ';\n' +
                        '}\n'
                } 
                return result;
            }
          } 
        },    


        stylus: {
          compile: {
            options: {
              paths: ['./styl/*.styl'],
              'include css': true,
              compress: false 
            },
            files: {
              './css/style.css': './styl/style.styl'
            }
          }
        },

        watch: {
            css: {
                files: 'styl/*.styl',
                tasks: ['stylus']
            },
            js: {
                files: 'js/*.js' 
            },
            html: {
                files: './*.html' 
            },
            options: {
                livereload: false
                // livereload: true
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-spritesmith');

    // Task definitions
    // grunt.registerTask('default',['watch']);
    // grunt.registerTask('default', ['concat', 'uglify', 'watch']);
    grunt.registerTask('default', [ 'connect', 'watch']);
    
};
