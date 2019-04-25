import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostListener('click') toggleOpen() {
        this.isToggled = !this.isToggled;
    }

    @HostBinding('class.open') isToggled = false;

    constructor() { }
}
