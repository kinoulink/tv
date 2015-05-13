module.exports = {
    compass: {
        files: [
            "<%= yeoman.app %>/styles/{,*/}*.scss"
        ],
        tasks: [
            "compass:server",
            "autoprefixer",
            "concat:css_vendor",
            "concat:css_my"
        ]
    },
    scripts: {
      files: [
          "<%= yeoman.app %>/scripts/{,*/}*.js"
      ],
        tasks: [
            "concat:js_my"
        ]
    },
    livereload: {
        options: {
            livereload: "<%= connect.options.livereload %>"
        },
        files: [
            "<%= yeoman.app %>/{,*/}*.html",
            "<%= yeoman.app %>/views/{,*/}*.html",
            ".tmp/styles/*.css",
            ".tmp/scripts/*.js",
            "<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
        ]
    }
};