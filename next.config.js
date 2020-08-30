const withCSS = require('@zeit/next-css');
module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'TEENCHAP',
        API_DEVELOPMENT :"http://localhost:8000/api",
        GOOGLE_CLIENT_ID:'1020348866610-5ngofo5g1up0hn7e3o68gmkbfkfi7n4i.apps.googleusercontent.com',
        PRODUCTION:false
    }
});