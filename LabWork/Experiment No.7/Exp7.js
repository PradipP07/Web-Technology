const express = require('express');
const app = express();
const port = 3000;

let students = [
    { id: 1, name: 'Pradip', age: 30 },
    { id: 2, name: 'Omkar', age: 25 },
    { id: 3, name: 'Pratik', age: 35 }
];

app.get('/', (req, res) => {
    res.send('Welcome To DKTE');
});

app.get('/students', (req, res) => {
    res.end(JSON.stringify(students, null, 2));
});

app.get('/students/id=:id', (req, res) => {
    req.params.id = parseInt(req.params.id);
    const student = students.find(s => s.id === req.params.id);
    if (!student) {
        return res.status(404).send('Student not found');
    }
    res.json(student);
});


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
