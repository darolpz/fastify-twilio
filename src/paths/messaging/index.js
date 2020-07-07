const sendMessage = require('./send')
module.exports = (fastify, opts, next) => {
  fastify.register(sendMessage.handler, opts, next)
}
