const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Halo! Aplikasi ini berhasil di-deploy lewat CI/CD ke Kubernetes! 🚀</h1>');
});

app.listen(PORT, () => {
    console.log(`Aplikasi berjalan di port ${PORT}`);
});
