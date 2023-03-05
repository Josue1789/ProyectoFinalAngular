import { Component } from '@angular/core';
import { FrasesService } from 'src/app/frases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  informacionRecibida:any
  constructor(private variableServicio:FrasesService){
    variableServicio.obtenerfraserandom().subscribe((data)=>{
    this.informacionRecibida=data
    })
  }

  refrescarFrase(){
    this.variableServicio.obtenerfraserandom().subscribe((data)=>{
      this.informacionRecibida=data
      })  
  }

}
