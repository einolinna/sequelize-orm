const express = require('express')
const app = express()
const sequelize = require('../Integracion/database/db');

//Settings
const PORT= process.env.PORT || 3000;

//Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Start Server
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
  //Connect to database
  sequelize.authenticate().then(() => {

    console.log('Te has conectado correctamente');


  }).catch(err => {console.log("Se ha producido un error",err)});

})
