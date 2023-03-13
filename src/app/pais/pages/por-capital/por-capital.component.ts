import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
 
})
export class PorCapitalComponent {

  capitales: Country[] = [];
  termino:string = '';
  hayError: boolean = false;

 constructor(private capitalService: PaisService ){}

 buscar(termino:string){
  this.hayError = false;
  this.termino = termino;
  this.capitalService.buscarCapital(this.termino)
    .subscribe(
      (data)=>{this.capitales = data},
      (err)=>{
        this.hayError = true
        this.capitales = []
      }
    )
 }
 
}
