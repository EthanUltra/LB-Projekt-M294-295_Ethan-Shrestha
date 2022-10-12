module.exports = {
    resolve: {
        fallback: { "timers": require.resolve('timers-browserify') },
        async_hooks: false,
        extenstion: ['.json']
    },
    externals: {
        express: 'commonjs express',
    },
};
