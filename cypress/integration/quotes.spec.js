// write tests here
describe("Quotes", ()=> {
beforeEach(()=> {
    //Each test needs fresh state
    //Tests shouldn't rely on other tests
    //Every test should work in isolation


    cy.visit("http://localhost:1234"); // CAREFUL needs to be same as what port it is at!
})
// Helpers (ie GETTERS)
const textInput = () => cy.get("input[name=text]");
const authorInput = () => cy.get("input[name=author]");
const foobarInput = () => cy.get("input[name=foobar]");
const submitBtn = () => cy.get(`button[id="submitBtn"]`);
const cancelBtn = () => cy.get(`button[id="cancelBtn"]`);

it("sanity check to make sure tests work", ()=> {
    // "it" is a test
    //"expect" is an assertion
    //There can be multiple assertions per test, but they all need to 
    //relate to the "one thing" that we're testing
    //Always use triple equal
    expect(1 + 2).to.equal(3);
    expect(2+2).not.equal(5);
    expect({}).not.to.equal({});
    expect({}).eql({}); //eql is for double equals

})

it("the proper elements are showing", () => {
    textInput().should("exist");
    authorInput().should("exist");
    foobarInput().should("not.exist");
    submitBtn().should("exist");
    cancelBtn().should("exist");

    cy.contains ("Submit Quote").should("exist");
    cy.contains(/suBmiT quOte/i).should("exist");
    //(/submit quote/i the i here is case insenitive so it
    //does not matter if it is a capital or not)
    //Usually you should have something that unquely describes an element
})

describe("Filling out the inputs and cancelling", ()=>{
    it("can navigate to the site", ()=> {
        cy.url().should("include", "localhost");
    })
    it("submit button starts out disabled", ()=> {
        submitBtn().should("be.disabled");
    })
    it("can type in the inputs", ()=>{
        textInput()
        .should("have.value", "")
        .type("CSS rulez")
        .should("have.value", "CSS rulez");
    })
})

/**
 * const person = {
 *      name: "Casey"
 * }
 * 
 * 0xh32 => person, oxh32 is how computer sees person 
 * 
 * 
 * const person2 = {
 *  name:"Casey"
 * }
 * 
 * oxh33 = person2, computer looks at the memory address
 * 
 * person === person2 ??? NO, Because objects are declared based on preference
 * 
 */

/**
 * CI/CO -> Continuous Integration/Continuous Delivery 
 * 
 * describe is a way to collect different tests
 */


})