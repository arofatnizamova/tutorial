const express = require('express');
const app = express();
const port = 3000;

// Роут для обработки callback
app.get('/callback', (req, res) => {
    const authCode = req.query.code;
    if (authCode) {
        // Обработайте авторизационный код
        console.log(`Authorization code: ${authCode}`);
        res.send('Authorization successful');
    } else {
        res.send('Authorization failed');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});