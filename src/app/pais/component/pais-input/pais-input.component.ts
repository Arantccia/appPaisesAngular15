import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export default class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeHolder: string = '';
  


  // estamos creando un observable con la librería rxjs
  debouncer: Subject<string> = new Subject();
  termino: string = '';

  // nos estamos suscribiendo al observable debouncer
  ngOnInit() {
 // le estamos diciendo que no emita el subcribe hasta que el observable debouncer
 // no haya pasado 300 milesimas de segundos .pipe(debounceTime(300))
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(val => {
        this.onDebounce.emit(val)
      })
  }

  buscar(){
    this.onEnter.emit( this.termino );

  }

  teclaPress(){  
    this.debouncer.next(this.termino);
  }
}
