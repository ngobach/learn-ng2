import { Component, OnInit, Input } from '@angular/core';
import { Auth } from '../auth/auth.service';

import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    @Input() title: string;

    constructor(private auth: Auth, private router: Router) {}

    ngOnInit() {}

    doLogin() {
        this.router.navigate(['/login']);
    }

    doLogout() {
        this.auth.logout();
    }
}