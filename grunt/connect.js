module.exports = {
    options: {
        port: 8000,
        hostname: "localhost",
        livereload: 35729
    },
    livereload: {
        options: {
            open: true,
            middleware: function (connect) {
                return [
                    connect.static('.tmp'),
                    connect.static('./app/src')
                ];
            }
        }
    }
};