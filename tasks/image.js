import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import folders	from './folders';

gulp.task('image', () => {
	return gulp.src(`${folders.assetsSrc}/img/**/*`)
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
			svgoPlugins: [{removeViewBox: true}]
		}))
		.pipe(gulp.dest(`${folders.assetsBuild}/img`))
});

gulp.task('image:watch', () =>
	gulp.watch(`${folders.assetsSrc}/img/**/*`, gulp.series('image'))
);