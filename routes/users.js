const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/users', (req, res) => {
    console.log('User added:', req.body);
    res.send('User added!');
});

app.post('/users/:id/update', (req, res) => {
    console.log(`Updating user ${req.params.id} with:`, req.body);
    res.send(`User ${req.params.id} updated!`);
});

app.post('/users/:id/delete', (req, res) => {
    console.log(`Deleting user ${req.params.id}`);
    res.send(`User ${req.params.id} deleted!`);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(` Server is running at http://localhost:${PORT}`);
});
