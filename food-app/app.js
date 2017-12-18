const { server } = require('./server');
const port = 3001;

server.listen(port, () => {
  console.log(`Magic happening on port ${port}`);
});