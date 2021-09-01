const generic_messages = require("../routes/generic");
//const { expect } = require("pactum");
var should = require("should");


describe("generic_message", function() {
    describe("getGenericMessage", function() {
        it("Should return Hello entity. It's ", function() {
            let message = generic_messages.getGenericMessage();
            let comparison = message.includes("Hello entity. It's");
            comparison.should.be.true;
        });
    })
})