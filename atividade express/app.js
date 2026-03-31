const express = require('express')
const app = express()
const port = 3000




app.get('/about', (req, res) => {
    console.log('a página about foi acessada')
    res.send('/about')
})


app.post('/data', (req, res) => {
    console.log('a página data foi acessada')
    res.send('/data')
})


app.get('/users', (req, res) => {
    res.redirect('/singup')
})


app.get('/signup', (req, res) => {
    console.log('a página users signup foi acessada')
    res.send('formulário')
})


app.get('/users/:userid', (req, res) => {
    userid = req.params.userid
    console.log('a página users signin foi acessada')
    res.send('bem-vindo ao site, ${userid}')
})


app.get('/*splat', (req,res) => {
    res.send('Página não encontrada - 404. Para voltar clique <a href= "http://localhost:3000/about">')
})


app.listen(port, () => {
    console.log('server running...')
})
