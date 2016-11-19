import { Component, OnInit } from '@angular/core';

import { Auth } from '../auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private auth: Auth) { }
    get message() {
        return `Bạn đang ${ this.auth.loggedIn ? 'đăng nhập' : 'đăng xuất' }`;
    }
    ngOnInit() { }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }
}