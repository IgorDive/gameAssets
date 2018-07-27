import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { Focus } from './app.directive';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, Focus ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
