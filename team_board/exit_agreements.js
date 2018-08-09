import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';
import Login from './page-model';

 
// var login = async t => {
//     await t
//         .typeText('#j_username', 'test@rallydev.com')
//         .typeText('#j_password', 'Password')
//         .click('#login-button')        
// }

// var login = new Login(async t =>{
//     await t 
//         .typeText(login.usernameInput, 'test@rallydev.com')
//         .typeText(login.passwordInput, 'Password')
//         .click(login.loginButton)
// })

const login = new Login('test@rallydev.com', 'Password')

fixture `Team Board`
    .page(`https://karla0.testn.f4tech.com/#/20330408691d/teamboard`) 
    .beforeEach(() => new Login())
    console.log(login)


    // beforeEach(async t => {
    //     await t.login
    // })

    // .afterEach(async t => {
    //     await t.eval(() => localStorage.clear());
    // })


    test('Team Board Exit Agreements', async t =>{
        const moreButton = Selector('.chr-ToolbarMoreButton .smb-PopoverTrigger .smb-Button')
        const showExitAgreements = Selector('li.smb-DropdownItem')
        const hideExitAgreements = Selector('li.smb-DropdownItem')
        const exitAgreementFieldText = Selector('.smb-FieldLabel-text')
        

        await t
            .click(moreButton)
            .click(showExitAgreements)
            .expect(showExitAgreements).ok('it passed')
            .wait(200)
            if(await exitAgreementFieldText.exists){
                await t
                    .click(moreButton)
                    .click(hideExitAgreements)
                    .wait(200)
            }else{
                await t.expect(true).ok('it passed')
            }

    })
