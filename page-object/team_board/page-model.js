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


// export default class Login {
//     constructor(t, username, password){
//         this.t = t;
//         this.username = username;
//         this.password = password;
//         this.usernameInput = Selector('#j_username')
//         this.passwordInput = Selector('#j_password')
//         this.loginButton = Selector('#login-button')
//         return go()
//     }

//     async  go() {
//         await this.t 
//             .typeText(this.usernameInput, username)
//             .typeText(this.passwordInput, password)
//             .click(this.loginButton)
//     }
// }