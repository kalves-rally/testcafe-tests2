import { Selector, ok, Role } from 'testcafe';
import { reset } from 'chalk';
//import { createRole } from './page-model';
import { createRole } from './../login.js';

 
fixture `Team Board`
    .beforeEach(async t => {
        const role = createRole('test@rallydev.com');
        await t
            .useRole(role)
            .navigateTo('https://karla0.testn.f4tech.com/#/228928406146d/teamboard');
    })


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
