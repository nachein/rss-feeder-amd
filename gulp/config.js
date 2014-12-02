var src = './src';
var build = src + '/build';
var dist = "./public";

module.exports = {
  templates: {
    src: src + '/templates/*.hbs',
    dest: build + '/js/'
  },
  browserify: {
    entryPoint: src + '/javascripts/app.js',
    dest: build + '/js'
  },
  dist: {
    src: build,
    dest: dist
  },
  uglify: {
    src: build + '/js/**/*.js',
    dest: dist + '/js/'
  },
  lint: {
    files: [src + '/javascripts/**/*.js']
  },
  processhtml: {
    htmls: [src + '/index.html'],
    dest: dist
  },
  watch: {
    js: src + '/javascripts/**/*.js',
    html: src + '/index.html'
  }
  // },
  // browserify: {
  //   // Additional file extentions to make optional
  //   extensions: ['.coffee', '.hbs'],
  //   // A separate bundle will be generated for each
  //   // bundle config in the list below
  //   bundleConfigs: [{
  //     entries: src + '/javascript/app.coffee',
  //     dest: dest,
  //     outputName: 'app.js'
  //   }, {
  //     entries: src + '/javascript/head.coffee',
  //     dest: dest,
  //     outputName: 'head.js'
  //   }]
  // }
};