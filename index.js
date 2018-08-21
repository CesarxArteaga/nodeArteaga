const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//var express = require('express');

var expresshbs = require('express-handlebars');

var app = express();



app.engine('handlebars', expresshbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*
app.get('/', function (req, res){
	res.render('home');
});*/

app.get('/', (req, res) => res.render('home'));

app.listen(PORT , () => console.log(`localhost on ${PORT}`));