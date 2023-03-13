import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModules  } from "../app/app-routing-modules";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PaisModule,
    SharedModule,
    AppRoutingModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
