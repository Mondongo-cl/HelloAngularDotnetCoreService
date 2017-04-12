/// <binding BeforeBuild='build' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var tsc = require('gulp-typescript');

var rutas = {
    typescripts: {
        src: ['client/**/*.ts'],
        dest: 'wwwroot/app/'
    },
    html: {
        src: ['assets/html/*.html'],
        dest: 'wwwroot/'
    },
    npm: {
        src: ['node_modules/**/*.js', 'node_modules/**/*.css'],
        dest: 'wwwroot/lib/'
    },
    js: {
        src: ['assets/js/*.js'],
        dest: 'wwwroot/js/'
    }
};


// 

gulp.task('build',['libs','html','javascript'],function () {
    var tsp = tsc.createProject('tsconfig.json');
    return gulp.src(rutas.typescripts.src)
    .pipe(tsp())
    .pipe(gulp.dest(rutas.typescripts.dest));

});

gulp.task('javascript', function () {
    return gulp.src(rutas.js.src)
    .pipe(gulp.dest(rutas.js.dest));
});

gulp.task('html', function () {
    return gulp.src(rutas.html.src)
    .pipe(gulp.dest(rutas.html.dest));
});


gulp.task('libs', function () {
    return gulp.src(rutas.npm.src)
    .pipe(gulp.dest(rutas.npm.dest));
});

gulp.task('default', [], function () {
});