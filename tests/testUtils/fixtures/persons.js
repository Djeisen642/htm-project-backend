const sqlfixtures = require('sequelize-fixtures')
const models = require('../../../models')
const constants = require('../../../config/constants')

const model = 'Person'

const fixtures = [{
  model,
  data: {
    id: 1,
    fullname: 'test1 test1',
    alias: 'test1',
    email: 'test1@email.com',
    phoneNumber: '555-555-5555',
    preferredContactMethod: constants.PREFERRED_CONTACT_METHOD.EMAIL,
    birthdate: '1991-1-1'
  }
}, {
  model,
  data: {
    id: 2,
    fullname: 'test2 test2',
    alias: 'test2',
    email: 'test2@email.com',
    phoneNumber: '555-555-5556',
    preferredContactMethod: constants.PREFERRED_CONTACT_METHOD.EMAIL,
    birthdate: '1992-2-2'
  }
}]

module.exports = models.Person.truncate({ cascade: 'DELETE' })
  .then(() => {
    return sqlfixtures.loadFixtures(fixtures, models)
  })
