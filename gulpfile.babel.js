import gulp from 'gulp';
import Promise from 'bluebird';

const console1 = () => new Promise((resolve)=>resolve(console.log('Task1')));
const console2 = () => new Promise((resolve)=>resolve(console.log('Task2')));
export { console1 , console2 };

const build = gulp.series(console1,console2);
export { build };

export default build;