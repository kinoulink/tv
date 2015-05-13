module.exports = {
    options: {
        sassDir: "<%= yeoman.app %>/styles",
        cssDir: "<%= yeoman.tmp %>/styles",
        generatedImagesDir: "<%= yeoman.tmp %>/img/generated",
        imagesDir: "<%= yeoman.app %>/img",
        javascriptsDir: "<%= yeoman.app %>/scripts",
        fontsDir: "<%= yeoman.app %>/styles/fonts",
        httpImagesPath: "/img",
        httpGeneratedImagesPath: "/img/generated",
        httpFontsPath: "/styles/fonts",
        relativeAssets: false,
        assetCacheBuster: false,
        raw: "Sass::Script::Number.precision = 10\n",
        importPath: ["<%= yeoman.vendor %>"]
    },
    dist: {
        options: {
            generatedImagesDir: "<%= yeoman.dist %>/img/generated"
        }
    },
    server: {
        options: {
            debugInfo: false
        }
    }
};