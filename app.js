const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Mengatur PORT

const PORT = process.env.PORT || 8000;

// Rute Dasar
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rute About
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tentang.html'));
});

// Rute Blog
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

// Rute Tipe Rumah
app.get('/typehome', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tipe_rumah.html'));
});

// Rute kontak
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kontak.html'));
});

// Memulai Server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
