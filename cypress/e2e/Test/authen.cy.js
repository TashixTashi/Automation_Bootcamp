it("Login to site", () => 
{
    //Login with valid credentials 
    cy.visit("https://ui-automation-camp.vercel.app/");
    cy.get("#signInOrRegister").click();
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({}) => 
      {
        cy.get('[type="email"]').type("tashcamp@yopmail.com");
        cy.get('[type="password"]').type("P@ssword1!", { log: false });
        cy.get("[name=submit]").click();
      }

    );

});

it("Login with invalid email",  () =>
{
    //Login with invalid credentials
    cy.visit("https://ui-automation-camp.vercel.app/");
    cy.get("#signInOrRegister").click();
    cy.origin
    (
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({}) => 
      {
        cy.get('[type="email"]').type("tashcaaaamp@yopmail.com");
        cy.get('[type="password"]').type("P@ssword1!", { log: false });
        cy.get("[name=submit]").click();
      }
    );

});

it("Login with invalid password",  () =>
{
    //Login with invalid credentials
    cy.visit("https://ui-automation-camp.vercel.app/");
    cy.get("#signInOrRegister").click();
    cy.origin
    (
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({}) => 
      {
        cy.get('[type="email"]').type("tashcamp@yopmail.com");
        cy.get('[type="password"]').type("P@ssword989!", { log: false });
        cy.get("[name=submit]").click();
      }
    );

});