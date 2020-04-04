const express = require('express');

const app = express();
const PORT = 5000;

const mockUserData = [
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: 'Successfully get users. NICE!',
    users: mockUserData
  })
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));