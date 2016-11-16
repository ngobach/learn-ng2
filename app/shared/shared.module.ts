import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const DIRECTIVES: Array<any> = [
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...DIRECTIVES
    ],
    exports: [
        ...DIRECTIVES
    ],
    providers: [
    ]
})
export class SharedModule {

}