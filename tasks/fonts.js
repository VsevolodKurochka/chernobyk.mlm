import gulp from 'gulp';
import folders from './folders';
import {reload} from './browserSync';


// Task `fonts`
gulp.task('fonts', () =>
	gulp.src(`${folders.assetsSrc}/fonts/**/*`)
		.pipe(gulp.dest(`${folders.assetsBuild}/fonts`))
);

// Task `fonts:watch`
gulp.task('fonts:watch', () =>
	gulp.watch(`${folders.assetsSrc}/fonts/**/*`, gulp.series('fonts', reload))
);