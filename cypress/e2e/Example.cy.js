    /*
describe('Radio button Example',()=>{

    it('Elements handling',()=>{

        //TO select a button from Radio Button Example with common loactor and equal function(index value based)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[name="radioButton"]').eq(1).check().should('be.checked')
    

    //To select multiple check boxes with same loactor
        cy.get('[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('[type="checkbox"]').eq(1).check().should('be.checked')
        cy.get('[type="checkbox"]').eq(2).check().should('be.checked')

        //To select a single check box
        cy.get('[id="checkBoxOption1"]').check().should('be.checked')

        //To select a dropdown option
        cy.get('#dropdown-class-example').select('option2')
    
    })
})

describe('Template spec',()=>{
 
    it('Choosing a country',()=>{
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

     cy.get('[class="inputs ui-autocomplete-input"]').type('ut')

     //listing all included in countries using jquery language
     cy.get('.ui-menu-item-wrapper').each(($countries)=>{
        if($countries.text().includes('Bhutan')){
            cy.wrap($countries).click()
        }
     })

    
        
 } )
        

}) 

 describe('Template specs',()=>{
    it.only ('country check',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[placeholder="Type to Select Countries"]').type('am')
        cy.get('.ui-menu-item-wrapper').each(($countries)=>{
            if($countries.text().includes('America')){
                cy.wrap($countries).click()
            }
        
        })
        })
    })

        describe('template specs',()=>{
            it('Open tab handling',()=>{

            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            cy.get('[id="opentab"]').invoke('removeattr','target').click()

            })
        }) */


    
    describe('Template specs',()=>{
        beforeEach(()=>{
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        })   
             it('alert',()=>{
                
            
            cy.get('[placeholder="Enter Your Name"]').type('Cypress')
            cy.on('window:alert',(textmessage)=>{
                expect(textmessage).to.eq('Hello Cypress, share this practice page and share your knowledge')
                return false;
            })

            cy.get('#alertbtn').click()

        })
        it('confirmation alert',()=>{
            cy.on('window:confirm',(sometext)=>{
                expect(sometext).to.eq('Hello , Are you sure you want to confirm?')
                return false;

            })
            cy.get('#confirmbtn').click()
        })
    })

// //Traditional login
//     describe('Test Automation by traditional login',()=>{
//         it('Positive LogIn test',()=>{

//             cy.visit('https://practicetestautomation.com/practice-test-login/')

//             cy.title().should('contain','Test Login | Practice Test Automation')
//             cy.get('input#username').type('student')
//             cy.get('input#password').type('Password123')
//             cy.contains('Submit').click()

//             cy.url().should('contain','https://practicetestautomation.com/logged-in-successfully/')
//             cy.contains('Logged In Successfully').should('be.visible')
//             cy.contains('Log out').should('be.visible').click()
//         })
//     })