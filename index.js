const express = require('express');
const app = express();
const posts = require('./posts');

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/', (req, res) => {
  res.send('Hello from the API!!!');
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = posts.find((post) => post._id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send({ error: 'Post not found' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
