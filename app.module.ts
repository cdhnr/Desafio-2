import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartaoDeVisitasComponent } from './cartao-de-visitas/cartao-de-visitas.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaoDeVisitasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }