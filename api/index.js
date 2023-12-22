const express = require('express'); // Corrected require statement
const app = express();
const port = 4040; // Corrected variable declaration

app.get('/api/test', (request, response) => {
  response.json( {body: 'test 2ok'} );
});

app.listen(port, () => { {port};
});