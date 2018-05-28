
let url = 'https://<api_id>.execute-api.us-west-2.amazonaws.com/dev/lis-test';

fetch(url, {
    method: 'POST',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-api-key': ''
    },
    body: ''
})
.then(function(data) {
    console.info('Success: ', data);
})
.catch(function(error) {
    console.error('Failed: ', error);
});