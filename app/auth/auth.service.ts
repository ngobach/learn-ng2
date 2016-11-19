import { Injectable } from '@angular/core';

@Injectable()
export class Auth {
    private _loggedIn: boolean;

    constructor() {
        this._loggedIn = !!localStorage.getItem('login');
    }

    saveState() {
        if (this._loggedIn){
            localStorage.setItem('login', 'yes');
        } else {
            localStorage.removeItem('login');
        }
    }

    login(): Promise<boolean> {
        this._loggedIn = true;
        this.saveState();
        return Promise.resolve(true);
    }

    logout(): Promise<boolean> {
        this._loggedIn = false;
        this.saveState();
        return Promise.resolve(true);
    }

    get loggedIn() {
        return this._loggedIn;
    }
}
