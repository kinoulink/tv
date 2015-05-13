module.exports = {
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: "<%= yeoman.app %>",
                dest: "<%= yeoman.dist %>",
                src: [
                    "*.{ico,png,txt}",
                    "*.config",
                    "*.html",
                    "views/{,*/}*.html",
                    "fonts/*",
                    "sounds/*"
                ]
            },
            {
                expand: true,
                cwd: ".tmp/images",
                dest: "<%= yeoman.dist %>/images",
                src: [
                    "generated/*"
                ]
            }
        ]
    }
};