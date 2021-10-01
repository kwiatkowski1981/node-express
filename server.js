const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('here');
    // res.sendStatus(200); // status ok, wyswietla ok na stronie
    // res.status(200).send('hi You'); // status ok, wyswietla wiadomosc doczepiona
    // res.status(500).json({message: 'Error.'}); // server error + message(Json) na stronke
    // res.json({message: 'Error.'}); // sam Json na stronke ale status juz jest 200 czyli ok
    // res.send('hi You'); // wyswietla na stronce wiadomosc
    // res.download('server.js');

    res.render('index', {text: 'to all ppl who are reading it!!!'});
});


const userRouter = require('./routes/users');
// const postRouter = require('./routes/users');

app.use('/users', userRouter);
// app.use('/users', postRouter);


app.listen(port);
