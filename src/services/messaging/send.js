
const twilio = require('twilio')

var accountSid = process.env.ACCOUNT_SID
var authToken = process.env.AUTH_TOKEN
var client = new twilio(accountSid, authToken)

const { twilioNumber } = require('../../config/config')


async function sendMessage(message, toNumber) {
  try {
    const res = await client.messages.create({
      body: message,
      to: toNumber,  // Text this number
      from: twilioNumber // From a valid Twilio number
    })
    console.log(res)
    return res
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  sendMessage
}