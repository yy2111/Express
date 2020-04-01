const request = require('request');
 
const json = {
    "handle": "yyang",
    "country": "China",
    "quote": "",
};
 
request.post({
    url: 'http://localhost:3002/handles',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});