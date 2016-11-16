import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
    author: string;
    year: number;
    constructor() {
        this.author = 'BachNX';
        this.year = 2016;
    }

    ngOnInit() { }
}