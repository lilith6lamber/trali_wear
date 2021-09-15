const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.libs_style = tasks.libs_style;
exports.favicon = tasks.favicon;
exports.fonts = tasks.fonts;
exports.style = tasks.style;
exports.libs_js = tasks.libs_js;
exports.dev_js = tasks.dev_js;
exports.build_js = tasks.build_js;
exports.html = tasks.html;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.ttf = tasks.ttf;
exports.ttf2 = tasks.ttf2;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
  exports.libs_style,
  exports.favicon,
  exports.ttf,
  exports.ttf2,
  exports.libs_js,
  exports.dev_js,
  exports.fonts,
  exports.style,
  exports.rastr,
  exports.webp,
  exports.html,
  exports.bs_html,
  exports.watch
)