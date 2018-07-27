import {Directive, OnInit, ElementRef} from '@angular/core';

@Directive ({
    selector: '[focus]'
})

export class Focus implements OnInit {
    constructor(private refElement: ElementRef) {}

    ngOnInit(): void {
        this.refElement.nativeElement.focus();
    }
}