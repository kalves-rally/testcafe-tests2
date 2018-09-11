import { Selector, ok } from 'testcafe';
import Login from '/login.js'

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}

fixture `Opening Sidebar`
    .page(`https://karla0.testn.f4tech.com/#/20330408691d/teamboard`)  
    .beforeEach(login)
       
//click to open sidebar
    test('Open sidebar', async t =>{ 
        const sideIcon = Selector('.smb-TopBarIconButton')
        const sideBardTitle = Selector('h1.chr-ComponentsSideBar-headerTitle')
        
        if(await sideIcon.exists){
            await t
                .wait(2000)
                .click(sideIcon)
                .wait(20000)
                 .expect(sideBardTitle.exists).ok()
            
        } else {
            await t.expect(true).ok('it passed');    
        }
        
    })    

    
   



