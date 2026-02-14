describe('Get token for login', () => {
  it('should get token for login successfully', () => {
    cy.getToken({username: 'kubeuser', password: 'kubeuser'}).then(token => {
      expect(token).to.be.a('string');
    })
  })
})