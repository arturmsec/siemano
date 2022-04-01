const express = require("express");
const app = express();

app.get('/', (req_name, res_name) =>{
    console.log(req_name);
    res_name.send('Serwer działa!');
});

app.listen(8080, () => {
    console.log('Aplikacja wystartowała na porcie 8080');
});