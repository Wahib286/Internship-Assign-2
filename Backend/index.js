const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json());

// Sample navTabs data
const navTabs = [
  { id: 'contacts', label: 'Contacts' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'map', label: 'Map' },
  { id: 'shortlisted', label: 'Shortlisted' },
  { id: 'sort', label: 'Sort' },
];

// Sample designers data
const designers = [
  {
    id: 1,
    name: 'Epic Designs',
    rating: 2,
    description: 'Passionate team...',
    projects: 57,
    years: 8,
    price: '$22',
    phones: ['+91-984532853','+91-965490650'],
  },
  {
    id: 2,
    name: 'Studio D3',
    rating: 4,
    description: 'Another description...',
    projects: 43,
    years: 6,
    price: '$15',
    phones: ['+91-984532854','+91-965490650'],
  },
  {
    id: 3,
    name: 'House of designs',
    rating: 3,
    description: 'Another description...',
    projects: 43,
    years: 6,
    price: '$12',
    phones: ['+91-984532854','+91-965449650'],
  },
];

// API routes
app.get('/api/navTabs', (req, res) => {
  res.json(navTabs);
});

app.get('/api/designers', (req, res) => {
  res.json(designers);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
