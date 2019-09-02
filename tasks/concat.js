import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import folders from './folders';
import {reload} from "./browserSync";

const concatSrc = [
	//`${folders.assetsSrc}/js/libs/jquery.min.js`,
	//`${folders.assetsSrc}/js/libs/smooth-scroll.min.js`,
	//`${folders.assetsSrc}/js/libs/jquery.main.babel.min.js`,
	`${folders.assetsSrc}/js/libs/vanilla.main.babel.min.js`
];

gulp.task('concat', () =>
	gulp.src(concatSrc)
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(`${folders.assetsBuild}/js`))
);

gulp.task('concat:watch', () =>
	gulp.watch(concatSrc, gulp.series('concat', reload))
);