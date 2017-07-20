module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                // Agregamos los archivos que queremos concatenar
                src: ['js/algun-plugin.js', 'js/main.js'],
                // Nuestros archivos concatenados se crearán automáticamente aca
                dest: 'js/all.js'
            } 
        },

        uglify: {
            main: {
                files: {
                    // Nuestros archivos concatenados son minimizados y automáticamente
                    // se crea un nuevo archivo que es el que usaremos en nuestro html
                    'js/all.min.js' : ['js/all.js']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    // Nuestro Sass es compilado a nuestro archivo CSS
                    'css/main.css' : 'scss/main.scss'
                }
            }
        },

        watch: {
            site: {
                // Vigilamos cualquier cambio en nuestros archivos
                files: ['scss/**/*.scss', 'js/**/*.js', '*.html'],
                tasks: ['default']
            },
            options: {
                // Instalamos la extensión de Livereload en Chrome para ver cambios
                // automáticos en el navegador sin hacer refresh
                spawn : false,
                livereload: true
            }
        }

    });

    // Cargamos los plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Registrar tareas
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);
}