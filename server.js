const config = require('./src/config/config')
const { app } = require('./src/app')

async function start() {
  try {
    const fastify = await app()
    await fastify.listen(config.port, '0.0.0.0')
  } catch (err) {
    // console.log(err)
    process.exit(1)
  }
}

start()
