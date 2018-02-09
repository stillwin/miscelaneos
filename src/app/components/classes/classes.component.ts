import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

  alerta:string = "alert-danger";
  loading:boolean = true;
  propiedades = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }
  ejecutar(){
  this.propiedades.danger = true;
    setTimeout(() => this.propiedades.danger = false, 3000);
  }
}
