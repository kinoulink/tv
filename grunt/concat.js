module.exports = {
    css_my: {
        src: '<%= yeoman.tmp %>/styles/kinoulink/*.css',
        dest: '<%= yeoman.tmp %>/styles/kinoulink.css'
    },
    css_vendor: {
        src: [
            '<%= yeoman.vendor %>/sweetalert/lib/sweet-alert.css',
            '<%= yeoman.tmp %>/styles/vendor/*.css'
        ],
        dest: '<%= yeoman.tmp %>/styles/vendor.css'
    },
    js_my: {
        src: '<%= yeoman.app %>/scripts/{,*/}*.js',
        dest: '<%= yeoman.tmp %>/scripts/kinoulink.js'
    },
    js_vendor: {
        src: [
            '<%= yeoman.vendor %>/jquery/dist/jquery.js',
            '<%= yeoman.vendor %>/sweetalert/lib/sweet-alert.js'
        ],
        dest: '<%= yeoman.tmp %>/scripts/vendor.js'
    }
};