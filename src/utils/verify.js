const twilio = require('twilio')

var accountSid = process.env.ACCOUNT_SID
var authToken = process.env.AUTH_TOKEN
var client = new twilio(accountSid, authToken)


async function verifyNumber(phoneNumber) {
  const res = await client.lookups.v1.phoneNumbers(phoneNumber).fetch()
  return res
}

module.exports = {
  verifyNumber
}