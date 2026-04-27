const express = require('express')
const app = express()
const port = 3000

const cse = [(
    {
        rollno: 1, name: "Pradip Patil", dept: "CSE"
    },
    {
        rollno: 2, name: "Satyajeet Masale", dept: "CSE"
    },
    {
        rollno: 3, name: "Ganesh Kohli", dept: "CSE"
    }
)]

const mech = [(
    {
        rollno: 1, name: "Vaishnav Patil", dept: "Mech"
    },
    {
        rollno: 2, name: "Sujal Magdum", dept: "Mech"
    },
    {
        rollno: 3, name: "Samarth Patil", dept: "Mech"
    }
)]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This is the about page')
});

app.get('/home', (req, res) => {
    res.send('Welcome to Home page')
});

app.get('/contact' , (req, res) => {
    res.send('ContactPage')
});

app.get('/cse', (req, res) => {
    res.send(cse)
});

app.get('/mech', (req, res) => {
    res.send(mech)
}); 

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
