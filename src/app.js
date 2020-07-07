const config = require('./config/config')
const dotenv = require('dotenv')
dotenv.config()

const { cors } = require('./utils')
const { messagingPathsRegister } = require('./paths')

const fastify = require('fastify')({
  requestIdHeader: 'x-request-id',
  logger: false
})

fastify.decorate('config', config)
fastify.use(cors)
function app() {
  messagingPathsRegister(fastify, { prefix: fastify.config.prefix })

  fastify.ready(err => {
    if (err) throw err
    fastify.log.error(err)
  })

  return fastify
}

module.exports = {
  app
}