module.exports = {
    // We can precache all our static files (HTML, JS and CSS) along with our assets folder which contains our icons
    // and images.
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/assets/images/*',
        'dist/assets/icons/*'
    ],
    root: 'dist',
    // Since our built app lives solely in the dist folder, we use stripPrefix to remove it from the beginning
    // of any file paths that may be referenced.
    stripPrefix: 'dist/',
    // When the app attempts to fetch a request not found in the cache, we use navigateFallback to set index.html
    // as our fallback.
    navigateFallback: '/index.html',
    runtimeCaching: [{
        urlPattern: /node-hnapi\.herokuapp\.com/,
        // The toolbox will try to handle the request first by retrieving from the network and if that succeeds,
        // it will cache the response. When this fails (flaky/unavailable network), it will fetch directly from
        // the cache.
        handler: 'networkFirst'
    }]
};