const browserify = require("browserify");
const bundler = browserify('./js/scripts.js');
const minifyHTML = require('html-minifier').minify;
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

let builtFile = fs.createWriteStream(path.join(cwd, 'dist', 'js', 'build.min.js'));

// Build All Components
bundler.transform({
    global: true,
    ignore: [
      '*.moon',
      '*.css'
    ]
  }, 'uglifyify')
  .plugin('moonify/plugins/extract-css.js')
  .bundle()
  .pipe(builtFile)

// Build CSS
bundler.on('bundle', function(bs) {
  bs.on('end', function() {
    require("./bundle-css.js");
  });
});

// Build HTML
const minifiedHTML = minifyHTML(fs.readFileSync(path.join(cwd, 'index.html')), {
  caseSensitive: true,
  keepClosingSlash: true
});

fs.writeFileSync(path.join(cwd, 'dist', 'index.html'), minifiedHTML);
