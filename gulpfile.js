// DEpendencias
var gulp = require('gulp'),
    concat = require('gulp-concat',
        uglify = require('gulp-uglify'));

// Configuración de la tarea 'demo'
gulp.task('demo', function(done) {
    gulp.src('js/src/*.js')
        .pipe(concat('todo.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/build/'))
    done()
});