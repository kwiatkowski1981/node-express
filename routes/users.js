const express = require('express');
const router = express.Router();

const users = [{name: 'Kyle'}, {name: 'Sally'}];

router.use(logger);

router.get('/', (req, res) => {
    // res.send('User list');
    console.log(req.query.name);
    // res.render('users/userList.ejs');
    res.send(users);

});

router.get('/new', (req, res) => {
    // res.send('new user form');
    res.render('users/new', {fistName: 'Your firstName:'});
});

router.post('/', (req, res) => {
    // res.send('Create User');
    const isValid = true;
    if (isValid) {
        users.push({name: req.body.firstName});
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log(Error);
        res.render('users/new', {firstName: req.body.firstName});
    }
    console.log(req.body.firstName);

});

router
    .route('/:id')   //    .userId if path === '/:userId' or any else
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get User with ID:  ${req.params.id} is ${req.user.name}`);
        console.log(users);
    })
    .put((req, res) => {
        res.send(`Get User with ID:  ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User with ID:  ${req.params.id}`);
    });


router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}


module.exports = router;