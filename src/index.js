const express = require('express')
const cors= require('cors')
const mysql= require('mysql')
const myconn=require('express-myconnection')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3001

const deOptions={
    host:'localhost',
    port:'3306',
    user:'root',
    password:'Tobon129.',
    database:'parqueadero'

}


app.use(cors())
app.use(myconn(mysql,deOptions, 'single'))
/*let parqueadero = [
    {
        id: 1,
        placa: 'hkd123',
        horaIngreso: 'Fri May 27 2022 10:40:07',
        valor: 0
    },
    {
        id: 2,
        placa: 'jdk987',
        horaIngreso: 'Fri May 27 2022 11:30:07',
        valor: 0
    },
    {
        id: 3,
        placa: 'hgf653',
        horaIngreso: 'Fri May 27 2022 10:40:07',
        valor: 0
    }
]*/
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api/parqueadero', routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})