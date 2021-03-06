const defaults = require('./src/config');
const extract = require('./src/extract');

/**
 * @param { locales: string, src: string, output: string } options
 */
module.exports = (options) => {
    options = { ...defaults, ...options };
    extract(options);
};
