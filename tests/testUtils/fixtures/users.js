const sqlfixtures = require('sequelize-fixtures')
const models = require('../../../models')
const passwordUtil = require('../../../utils/password')

const model = 'User'

const fixtures = [{
  model,
  data: {
    id: 1,
    password: 'apassword',
    PersonId: 1
  }
}, {
  model,
  data: {
    id: 2,
    password: 'bpassword',
    PersonId: 2
  }
}]

module.exports = models.User.truncate()
  .then(async () => {
    for (const fixture of fixtures) {
      fixture.data.password = await passwordUtil.generateHashString(fixture.data.password)
    }
    return sqlfixtures.loadFixtures(fixtures, models)
  })
