const pug = require('pug');

const render = pug.compileFile('lib/index.pug');

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: render({
            title: 'Lambda Image Service Home'
        })
    };
};
