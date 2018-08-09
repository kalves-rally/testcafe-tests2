import { Selector } from 'testcafe'; 

export default class Login {
    constructor( username, password){
        //this.t = t;
        this.username = username;
        this.password = password;
        this.usernameInput = Selector('#j_username')
        this.passwordInput = Selector('#j_password')
        this.loginButton = Selector('#login-button')
        return go()
        debugger;
    }

    async go() { 
        await t
            .typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)
            .click(this.loginButton)
    }
}




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