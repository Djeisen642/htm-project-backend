const models = require('../models')

const BLESSING_STEPS = [
  'Holy Wine',
  'Benediction Prayer',
  'Indemnity Stick',
  'Education',
  'Donation',
  '40 day',
  '3 day'
]

async function addBlessingSteps () {
  for (const step of BLESSING_STEPS) {
    await models.ActionType.findOrCreate({
      where: {
        name: step
      }
    })
  }
}

module.exports = async () => {
  await addBlessingSteps()
}
