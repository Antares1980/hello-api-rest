const generic_messages = require("../routes/generic");
//const { expect } = require("pactum");
var should = require("should");


describe("generic_message", function() {
    describe("getGenericMessage", function() {
        it("Should return Hello entity. It's ", function() {
            let message = generic_messages.getGenericMessage();
            let comparison = message.match('Hello entity. It\'s\\s\\d{1,2}\\sh\\s\\d{1,2}\\sm');
            comparison.should.be.true;
        });
    })
})