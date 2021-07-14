const express = require('express');

const app = express();

app.use(express.json());

app.listen(3333);

app.get('/', (request, response) => {
    return response.send('<h1>hello</h1>');
});
