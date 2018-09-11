import { Role, Selector } from 'testcafe'; 

export const createRole = (username, password = 'Password') =>
    Role(
        'https://karla0.testn.f4tech.com',
        async t => {
            await t
                .typeText('#j_username', username)
                .typeText('#j_password', password)
                .click('#login-button')
        },
        { preserveUrl: true },
    )




// import { Selector } from 'testcafe';

// var login = async t => {
//     await t
//         .typeText('#j_username', 'test@rallydev.com')
//         .typeText('#j_password', 'Password')
//         .click('#login-button')        
// }

// fixture `Logging in`
//     .page `https://karla0.testn.f4tech.com/slm`
//     .beforeEach(login)

// test('Log in', async t => {
//     await t
//         .typeText('#j_username', 'test@rallydev.com')
//         .typeText('#j_password', 'Password')
//         .click('#login-button');
// });

