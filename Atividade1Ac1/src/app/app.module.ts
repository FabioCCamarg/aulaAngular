import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { ImcComponent } from './imc/imc.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    ApoliceComponent,
    ConversorTemperaturaComponent,
    ImcComponent,
    CalcularMediaComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
