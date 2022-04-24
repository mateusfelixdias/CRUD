const app = require('../src/app');

const PORT = process.env.PORT || 8080;

//Nossa PORT...
app.listen(PORT, () => {
    console.log(`Backend executando na porta ${PORT}...`)
});
