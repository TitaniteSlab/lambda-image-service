
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: '<html><head><title>3 Lambda Image Service</title></head><body><code>' + JSON.stringify(event, null, 2) + '</code><br/></br><code>' + JSON.stringify(context, null, 2) + '</code></body></html>'
    };
};
