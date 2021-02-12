//servidor
const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess} = require('./pages')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', { //configurar nunjucks (template engine)
    express: server,
    noCache: true
})

server 
.use(express.static("public")) //configura o servidor p pegar arquivos estáticos (css, scripts, imagens)

//receber os dados do req.body
.use (express.urlencoded({extended: true}))

//configura rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/success", pageSuccess)
.post("/save-classes", saveClasses)

//start do servidor
.listen(5000)