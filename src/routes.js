const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM registros', (err, rows) => {
            if (err) {
                res.send(err)
            }
            res.json(rows) 
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO registros set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('registrado!')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM registros WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('registro eliminado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE registros set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('registro actualizado!')
        })
    })
})


routes.delete('/api/parqueadero/:id', (req, res) => {
    const id = Number(req.params.id)
    parqueadero = parqueadero.filter(parqueo => parqueo.id !== id)
    res.status(204).end()
})






module.exports = routes