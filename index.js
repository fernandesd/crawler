const request = require('request');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

app.get('/', function (req, res) {

    request('https://sistemas.ifgoiano.edu.br/selecao_ifgoiano/index.php?id_selecao=Mjk5', (error, response, html) => {

        let array = [];

        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(html)

            $('a.list-group-item').each(function () {
                array.push($(this).text());
            })

            console.log('==============================')
            console.log(array);
            console.log('==============================')


        }
    })


});

app.listen(8000);