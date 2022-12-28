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

        authorInput()
            .should("have.value", "")
            .type("CRHarding")
            .should("have.value", "CRHarding");
    })

    it("the submit button enables when both inputs are filled out", () => {
        authorInput().type("Casey");
        textInput().type("This is fun!");
        submitBtn().should("not.be.disabled");
    })

    it("the cancel button can disable the submit button", ()=> {
       authorInput().type("Casey");
       textInput().type("FUN");
       cancelBtn().click();
       textInput().should("have.value", "");
       authorInput().should("have.value", "");
       submitBtn().should("be.disabled");
    })

      
})

describe("Adding a new quote", () => {
    it("can submit and delete a new quote", () => {
        textInput().type("CSS rulez");
        authorInput().type("CRHarding");
        submitBtn().click();
        /**
         * It's important that state is the same at the beginning of each test!
         * We immediatly delete the new post, Whenever we create 
         * something in the database we want to delete it
         * Worse Case Restart The Server Script (ctrl-c) and then run `npm run server`
         * In the realworld you will have a testing database
         */
        cy.contains("CSS rulez").siblings("buttons:nth-of-type(2)").click();
        cy.contains("CSS rulez").should("not.exist");
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








//NOTHING BELOW THIS LINE\\
})