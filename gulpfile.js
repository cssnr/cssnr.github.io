const gulp = require('gulp')

gulp.task('animate', () => {
    return gulp
        .src(['node_modules/animate.css/animate.min.css'])
        .pipe(gulp.dest('src/dist/animate'))
})

gulp.task('aos', () => {
    return gulp
        .src(['node_modules/aos/dist/aos.css', 'node_modules/aos/dist/aos.js'])
        .pipe(gulp.dest('src/dist/aos'))
})

gulp.task('bootstrap', () => {
    return gulp
        .src([
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        ])
        .pipe(gulp.dest('src/dist/bootstrap'))
})

gulp.task('clipboard', () => {
    return gulp
        .src(['node_modules/clipboard/dist/clipboard.min.js'])
        .pipe(gulp.dest('src/dist/clipboard'))
})

gulp.task('datatables', () => {
    return gulp
        .src([
            'node_modules/datatables.net/js/dataTables.min.js',
            'node_modules/datatables.net-bs5/js/dataTables.bootstrap5.min.js',
            'node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css',
            'node_modules/datatables.net-responsive/js/dataTables.responsive.min.js',
            'node_modules/datatables.net-responsive-dt/js/responsive.dataTables.min.js',
        ])
        .pipe(gulp.dest('src/dist/datatables'))
})

gulp.task('devicon', () => {
    return gulp
        .src(
            [
                'node_modules/devicon/devicon.min.css',
                'node_modules/devicon/fonts/devicon.ttf',
                'node_modules/devicon/fonts/devicon.woff',
            ],
            { base: 'node_modules/devicon' }
        )
        .pipe(gulp.dest('src/dist/devicon'))
})

gulp.task('fontawesome', () => {
    return gulp
        .src(
            [
                'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
                'node_modules/@fortawesome/fontawesome-free/webfonts/**/*',
            ],
            { base: 'node_modules/@fortawesome/fontawesome-free' }
        )
        .pipe(gulp.dest('src/dist/fontawesome'))
})

gulp.task('jquery', () => {
    return gulp
        .src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('src/dist/jquery'))
})

gulp.task('swiper', () => {
    return gulp
        .src([
            'node_modules/swiper/swiper-bundle.min.css',
            'node_modules/swiper/swiper-bundle.min.js',
        ])
        .pipe(gulp.dest('src/dist/swiper'))
})

gulp.task('tsparticles', () => {
    return gulp
        .src(['node_modules/tsparticles/tsparticles.bundle.min.js'])
        .pipe(gulp.dest('src/dist/tsparticles'))
})

gulp.task('ua-parser-js', () => {
    return gulp
        .src(['node_modules/ua-parser-js/dist/ua-parser.min.js'])
        .pipe(gulp.dest('src/dist/ua-parser-js'))
})

gulp.task(
    'default',
    gulp.parallel(
        'animate',
        'aos',
        'bootstrap',
        'clipboard',
        'datatables',
        'devicon',
        'fontawesome',
        'jquery',
        'swiper',
        'tsparticles',
        'ua-parser-js'
    )
)
