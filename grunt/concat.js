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
    }
};