
const { sendMessageService } = require('../../services/messaging')
function send(fastify, opts, next) {
  fastify.post('/messaging/send', {}, async (request, reply) => {
    try {
      const { sendMessage } = sendMessageService
      const { message, number } = request.body
      const response = await sendMessage(message, number)
      reply.send(response)

    } catch (err) {
      reply.code(500).send(err)
    }
  })
  next()
}

module.exports = {
  handler: send
}

