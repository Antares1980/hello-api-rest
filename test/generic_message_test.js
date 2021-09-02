const genericMessages = require('../routes/generic');


describe('generic_message', function() {
  describe('getGenericMessage', function() {
    it('Should return Hello entity. It\'s ', function() {
      const message = genericMessages.getGenericMessage();
      const comparison = message.match(
          'Hello entity. It\'s\\s\\d{1,2}\\sh\\s\\d{1,2}\\sm');
      comparison.should.be.true;
    });
  });
});
