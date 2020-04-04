const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const mockUserData = [
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: 'Successfully get users. NICE!',
    users: mockUserData
  });
});

app.get('/users/:id', (req, res) => {
  console.log(req.params.id)
	res.json({
		success: true,
		message: 'Got one user',
		user: req.params.id
	});
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const mockUsername = 'abcd8';
  const mockPassword = '123456';
  if (mockUsername === username && mockPassword === password) {
    res.json({
      success: true,
      message: 'Password and Username match!',
      token: 'Encrypted token goes here'
    });
  } else {
    res.json({
      success: false,
      message: 'Password and Username do not match'
   });
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));