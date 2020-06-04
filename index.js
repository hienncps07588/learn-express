var express = require('express');
var app = express();
var port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var users= [
    {id: 1, name: 'Linh'},
    {id: 2, name: 'Hiii'},
    {id: 3, name: 'Hien'},
    {id: 3, name: 'Who'}
];
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/users', function(req, res){
    res.render('users/index',{
        users : users
    });
});

app.get('/', function(req, res){
    res.render('index', {
        name: 'Linhhh'
    });
});
app.get('/users/create', function(req, res){
    res.render('users/create');
});
app.post('/users/create', function(req, res){
    users.push(req.body);
    res.redirect('/users');
});
app.get('/users/search', function(req, res){
    var q = req.query.q;
    var matchUsers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/index', {
        users:matchUsers
    });
});
app.listen(port, function(){
    console.log('Server learning on port' + port);
});