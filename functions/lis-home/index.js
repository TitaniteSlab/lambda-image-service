const pug = require('pug');

const render = pug.compileFile('lib/index.pug');

exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: render({
            title: 'Lambda Image Service Home'
        })
    });
};
