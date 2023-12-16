const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 3001

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
