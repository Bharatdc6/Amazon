// describe('Template specification',()=>{
//     it('Element handling',()=>{

//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//         cy.get('[value="radio2"]').check().should('be.checked')
//         cy.get('[name="radioButton"]').eq(0).check().should('be.checked')
//         cy.wait(2000)
//         cy.get('[name="radioButton"]').eq(1).check().should('be.checked')
//         cy.wait(2000) 
//         cy.get('[name="radioButton"]').eq(2).check().should('be.checked')
//         cy.wait(2000)
//         cy.get('[type="checkbox"]').eq(1).check().should('be.checked')
//         cy.wait(2000)
//         cy.get('[type="checkbox"]').eq(0).check().should('be.checked')
//         cy.wait(2000)
//         cy.get('[type="checkbox"]').eq(2).check().should('be.checked')

//               cy.get('[name="dropdown-class-example"]').select('Option2').should('have.value','option2')
//              cy.wait(4000)
//                  cy.get('[type="checkbox"]').eq(2).uncheck().should('be.checked')
//     })
// })

        //  describe('Template specification',()=>{
        //         it.only('Suggestion class example',()=>{

        //         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //         cy.get('[id="autocomplete"]').type('af')

        //         cy.get('[class="ui-menu-item-wrapper"]').each(($countries)=>{
        //             if($countries.text().includes('Afghanistan')){
        //                 cy.wrap($countries).click()
        //             }
        // })
        //         })
        // })

// describe('Template specification', () => {
//   it.only('Suggestion class example', () => {

//     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

// // Sending values
//     cy.get('[class="inputs ui-autocomplete-input"]').type('af')

// // Listing all the countries using Jquery language
//         cy.get('.ui-menu-item-wrapper').each(($countries) => {
//             if($countries.text().includes('Afghanistan')) {
//                 cy.wrap($countries).click()
//             }


//         })
// })
// })
// describe('Template spec',()=>{
//     it('Open tab handling',()=>{

//      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

// 		cy.get('[id="opentab"]').invoke('removeAttr','target').click()
//     })
// })

//    describe('Template spec',()=>{
//     it.only('alert button handling',()=>{

//      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//      cy.get('[name="enter-name"]').type('bharat')
// cy.wait (6000)
//      cy.on('window:alert',(textvalue)=>{
//         expect(textvalue).to.eq('Hello bharat, share this practice page and share your knowledge')

//         return false
//      })

     
//      cy.get('#alertbtn').click()
//     })
// })

// describe('Template spec',()=>{
//     it.only('confirm button handling',()=>{

//      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//      cy.get('[name="enter-name"]').type('bharat')

//      cy.on('window:confirm',(somevalue) => {
//         expect(somevalue).to.eq('Hello bharat, Are you sure you want to confirm?')
//         return true

//         cy.get('[id="confirmbtn"]').click()
//      })
//     })
// })


// beforeEach(()=>{
//     https://rahulshettyacademy.com/AutomationPractice/
// })

// describe('Template spec',()=>{
//         it('Positive LogIn test',()=>{

//                 cy.visit('https://practicetestautomation.com/practice-test-login/')
//                 cy.get('[id="username"]').type('student')
//                 cy.get('[id="password"]').type('Password123')
//                 cy.get('[class="btn"]').click()
//                 cy.url().should('contain','https://practicetestautomation.com/logged-in-successfully/')
//                 cy.contains('Logged In Successfully').should('be.visible')
//                 cy.wait(4000)
//                 cy.contains('Log out').should('be.visible').click()               
//                 })   
//         })

//    describe('Template spec',()=>{
//         it('Positive LogIn test',()=>{

//                 cy.visit('https://practicetestautomation.com/practice-test-login/')

//                 cy.fixture('login.json').then((stddata)=>{
//                         cy.get('[id="username"]').type(stddata.username)
//                        cy.get('[id="password"]').type('Password123')
//                         cy.contains('submit').click()
//                         cy.contains('Log out').should('be.visible').click() 
//                 })
//         })
// })

// describe('template spec',()=>{
//         it('webtable',()=>{

//                 cy.visit('/')

//                 cy.get('table>tbody>tr>td:nth-child(2)').each(($tablecontent)=> {
//                         if($tablecontent.text().includes('Bugzilla')){
//                                 cy.wrap($tablecontent).then((tablevalue)=>{
//                                         const output=tablevalue.text()
//                                         cy.log(output)
//                                 })
//                         }
//                 })
//         })``
// })

//         describe ('Test cypress', ()=>{
//                 it('Webtable Example', ()=>{

//                         cy.visit('/')
//                         cy.get('table>tbody>tr>th:nth-child(2)').each(($tablecontent) =>{
//                                 if($tablecontent.text().includes('Bugzilla'))
//                                         cy.wrap($tablecontent).then((tablevalue) =>{
//                                         const output = tablevalue.text()
//                                         cy.log(output)

                                        
//                         })

//                         }
//                         )

//                 })
//         })

// describe('template spec', () => {
//   it('webtable', () => {

//     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//     cy.get('table > tbody > tr > td:nth-child(2)').each(($tablecontent) => {
//       if ($tablecontent.text().includes('Bugzilla')) {
//         cy.wrap($tablecontent).then((tablevalue) => {
//           const output = tablevalue.text()
//           cy.log(output)
//         })
//       }
//     })

//   })
// })

// describe('Web Table Test', () => {
//   it('Finds and logs the Bugzilla row value', () => {

//     // Visit the Automation Practice page
//     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//     // Loop through each row in the second column
//     cy.get('table > tbody > tr > td:nth-child(2)').each(($tablecontent) => {
      
//       // Check if the cell contains the text 'Bugzilla'
//       if ($tablecontent.text().includes('Bugzilla')) {

//         // Wrap and extract the text, then log it
//         cy.wrap($cell).then(($tablevalue) => {
//           const output = $tablevalue.text()
//           cy.log('Found course:', output)
//         })
//       }
//     })
//   })
// })

// describe ('Template spec', ()=>{
//         it('Hide show', ()=>{


// cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
// cy.get('#displayed-text').type('Selenium')
// cy.wait(3000)

// cy.get('#hide-textbox').click()
// cy.wait(3000)
// cy.get('[onclick="showElement()"]').click()

//         })
// })

// describe ('Template spec', ()=>{
//         it ('Mouse over function', ()=>{

//                 cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//                 cy.get('#mousehover').trigger('mouse over')
//                 cy.get('[href="#top"]').click({force: true})
//                 cy.url().should('contain','top')

// describe ('Template spec', ()=>{
//         it ('Mouse over function', ()=>{

//                  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//                  cy.get('#mousehover').trigger('mouse over')
//                  cy.get('[href="#top"]').click({force:true})
                        // cy.url().should('contain','top')
                

//         })


// })


// describe ('Template spec',()=>{
// it('i-frames',()=>{

        
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.frameLoaded('#courses-iframe')

//         cy.iframe().find('[href="mentorship"]').eq(0).click()
//         cy.wait(3000)
//         cy.iframe().contains('Testimonial').should('be.visible')



// } )

// })

// describe('Iframe example',()=>{
//   it('i-frame',()=>{

//     cy.visit('/')
//     cy.frameLoaded ('#courses-iframe')

//     cy.iframe().find('[href="mentorship"]').eq(0).click()
//     cy.wait(4000)
//     cy.iframe().contains('PLATINUM').should('be.visible')

//   })
// })

 
//Developed by Barry
  describe('Temp handling', ()=>{
    it('navigation',()=>{

      cy.visit('https://www.opencart.com/')
      cy.contains('Markeplace').click()
      cy.url().should('contain','extension')
      
    })
  })

  //Modified by Bharat
  describe('Temp handling', ()=>{
    it('navigation',()=>{

      cy.visit('https://www.opencart.com/')
      cy.contains('Markeplace').click()
      cy.url().should('contain','extension')
      
    })
  })