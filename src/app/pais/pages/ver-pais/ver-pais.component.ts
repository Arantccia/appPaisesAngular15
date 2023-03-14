import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { switchMap, tap } from 'rxjs/operators'

import { Country } from "../../interfaces/pais-interface";
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  
})
export class VerPaisComponent implements OnInit {

  id:string = '';
  hayError: boolean = false;
  pais!:Country;
  //se establece antes de estar inicializado el componente
  constructor(
    private activateRoute: ActivatedRoute, 
    private idPaisService :PaisService
    ){}
  // es cuando esta inicializado el componente
  ngOnInit(): void {
   /* this.activateRoute.params
    .subscribe(({id}) => {
      this.idPaisService.getPaisPorId(id)
        .subscribe(
          (pais)=>{
            this.pais = pais
            console.log(this.pais)            
          },
          (err)=>{
            this.hayError = true,
            this.pais = {}
          }
        )
    }) */


/*     this.activateRoute.params
      .subscribe(({id}) => {
        console.log('id',id);
        this.idPaisService.getPaisPorId(id)
          .subscribe(pais => console.log('pais',pais))
      }) */

      this.activateRoute.params
        .pipe(
          switchMap(({id})=>this.idPaisService.getPaisPorId(id)),
          tap(console.log)
        
          )
        .subscribe( res => this.pais = res)
  }

}
