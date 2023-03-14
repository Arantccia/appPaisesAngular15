import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `li{
      cursor:pointer;
    }`
  ]
 
})
export class PorPaisComponent {

  termino:string = '';
  hayError: boolean = false;
  paises:Country[] = [];
  paisesSugeridos:Country[] = [];
  mostrarSugerencias:boolean = false

  constructor(private paisService:PaisService){}

  buscar(data:string){
    this.mostrarSugerencias = false
    this.hayError = false
    this.termino = data
    this.paisService.buscarPais(this.termino)
      .subscribe(
        (res) =>{ 
        console.log('por pais componente',res);
        this.paises = res
        
      }, 
        (err)=>{
        this.hayError = true;
        this.paises = [];
      })
  }

  sugerencias(data:string){
    this.hayError = false;
    this.termino = data;
    this.mostrarSugerencias = true
    this.paisService.buscarPais(data)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
      )
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  
  }
}
