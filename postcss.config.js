module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-url'),
        require('postcss-preset-env')({
            browsers: 'last 3 versions',
            stage: 0,
            features: {
                'custom-media-queries': {
                    importFrom: './constants/mediaVariables.css',
                },
            },
        }),
    ],
};
