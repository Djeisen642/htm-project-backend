process.env.NODE_ENV = 'test'
const testUtils = require('../../testUtils')
const models = require('../../../models')

describe('routes/auth or /auth', () => {
  it('isLoggedIn should not be logged in', async () => {
    const response = await testUtils.getRequest().get('/auth/isLoggedIn')
    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(false)
  })

  describe('db exists and can log in', () => {
    beforeAll(() => {
      return testUtils.loadUsers()
    })

    // this can be replaces with --force-exit
    afterAll(function () {
      models.sequelize.close()
    })

    it('should log in', async () => {
      const response = await testUtils.getRequest().post('/auth/local')
        .send({ email: 'test1@email.com', password: 'apassword' })

      expect(response.statusCode).toBe(200)
    })

    // This doesn't currently work
    it.skip('should not log in', async () => {
      const response = await testUtils.getRequest().post('/auth/local')
        .send({ email: 'test1@email.com', password: 'wrongpassword' })

      expect(response.statusCode).toBe(401)
    })
  })
})
