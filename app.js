require('dotenv').config()
const express = require('express')
const path = require('path')
const base = require('airtable').base('appCkqr3mz2NqlZ1B')

const app = express()
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '.'))

app.get('/', (req, res) => {
    (async () => {
        const records = await base('Business Hours')
            .select({
            view: 'Grid view',
            }).firstPage()
        
        // for (const record of records) {
        //     console.log(record.get('Day'), record.get('Hours'))
        // }
        res.render('page', { records })
    })()
    
})

app.listen(3000, () => console.log('Server Ready'))