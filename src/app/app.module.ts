/**
 * Code by : Tiago Ribeiro Santos
 * Email : tiago.programador@hotmail.com
 * 
 * Date : 21/10/2020
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

//Services
import { UsuariosService } from './usuarios.service';
//HttpModule Client
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [UsuariosService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
