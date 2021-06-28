require('dotenv').config()
const base = require('airtable').base('appCkqr3mz2NqlZ1B')

;(async () => {
    const records = await base('Business Hours')
        .select({
        view: 'Grid view',
        }).firstPage()
    
    for (const record of records) {
        console.log(record.get('Day'), record.get('Hours'))
    }
})()