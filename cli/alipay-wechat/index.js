const transformFramework = require('../../src/index');
const AlipayWxPlugin = require('@antmove/alipay-wx');

const App = transformFramework();

module.exports = function (options = {}) {
    const inputDirPath = options.input;
    const outputDirPath = options.output || options.defaultOutput;
    const opts = {
        dist: outputDirPath,
        entry: inputDirPath,
        ...options
    };

    App.use(
        AlipayWxPlugin,
        opts
    )
        .start();
};
