const PROXY_CONFIG = [
    {
        context: ['/api '],
        targer: 'http://localhost:8080/',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;