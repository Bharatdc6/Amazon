

// describe('Template spec',()=>{
//     it('Element handling',()=>{
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//         //radiobutton using class locator
//         cy.get('.radioButton').eq(0).check().should('be.checked')

//         //checkbox using unique locator
//         cy.get('#checkBoxOption1').check().should('be.checked')

//         //dropdown using universal locator
//         cy.get('[name="dropdown-class-example"]').select('option3')
//     })
// })

// it.only('2n test suggestion class example',()=>){
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//         cy.get('[placeholder="Type to Select Countries"]').type('vi')

//         cy.get('.ui-menu-item-wrapper').each($countries)=>{
//             if($countries.text().includes('Bolivia')){
//                 cy.wrap($Countries).click()
//             }
//         })
// })
