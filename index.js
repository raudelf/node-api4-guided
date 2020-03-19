require('dotenv').config();
const server = require("./api/server.js");

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// CI / CD Pipeline Stages:
// 1. Development (dev)
// 2. Test
// 3. Staging
// *  --- Manual Gate
// 4. Production