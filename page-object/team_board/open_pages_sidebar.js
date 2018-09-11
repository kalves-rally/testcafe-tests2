import { Selector } from 'testcafe';

var login = async t => {
    await t
        .typeText('#j_username', 'test@rallydev.com')
        .typeText('#j_password', 'Password')
        .click('#login-button')        
}
    
fixture `Open Pages Sidebar`
    .page(`https://karla0.testn.f4tech.com/#/20330408691d/teamboard`)  
    .beforeEach(login)

    test('Open pages sidebar', async t =>{
        const sideIcon = Selector("#viewport > div > div > div.chr-NavigationHeader > div > div:nth-child(1) > div.chr-NavigationHeader-menuButtonTitleDiv > nav > button > div > span > span");
        const sidePagesIcon = Selector('.chr-NavigationSidebarPagesHeader-ellipsisButton')

        await t
            .click(sideIcon)
            .wait(2000)
            .click(sidePagesIcon)
            .expect(sidePagesIcon).ok('it passed');
    })















// test('Open Team Board page', async t =>{
//     const myElement1 = Selector(".smb-Icon smb-Icon--cancel")

//     if(await myElement1.exists){
//         await t.click('chr-NavigationSidebarPagesHeader-ellipsisButtonWrapper--20330408691');
//         await t.wait(2000);
//     }
//     return false;

// })    