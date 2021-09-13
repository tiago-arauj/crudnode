import express from 'express';
const server = express ();


server.use(express.json());


// CRUD
const estudo = ['Backend', 'Desenvolvimento web', 'Evoluir']; 
// listar estudo
server.get('/estudo/:index', (req, res) => {
    const { index } = req.params;
    
        return res.json(estudo[index]);
});

//listar todos estudos
server.get('/estudo', (req, res) => {
    return res.json(estudo);
});

//criar um novo estudo
server.post('/estudo', (req, res) => {
    const { name } = req.body;
    estudo.push(name);

    return res.json(estudo);
});

//Atualizar estudo

server.put('/estudo/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    estudo [index] = name;
    
    return res.json (estudo);
});

// deletar estudo
server.delete ('/estudo/:index', (req, res) => {
    const { index } = req.params;

    estudo.splice(index, 1);
    return res.json({ message: "O estudo foi deletado" });
});


server.listen(3000);






