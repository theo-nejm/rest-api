import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
  console.log(`CTRL + click http://localhost:${port}`);
});
