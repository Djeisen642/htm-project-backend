const request = require('supertest')

module.exports = {
  getRequest () {
    return request('http://localhost:3001')
  },
  async loadUsers () {
    await require('./fixtures/persons')
    return require('./fixtures/users')
  }
}
