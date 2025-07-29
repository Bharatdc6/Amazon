//Hi Bharat
      it('confirmation alert',()=>{
            cy.on('window:confirm',(sometext)=>{
                expect(sometext).to.eq('Hello , Are you sure you want to confirm?')
                return false;

            })
            cy.get('#confirmbtn').click()
        })
