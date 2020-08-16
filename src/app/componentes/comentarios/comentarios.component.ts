import { Component, OnInit } from '@angular/core';
import {ComentariosService} from '../../services/comentarios.service'
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarios: any;
  constructor(comentariosServ: ComentariosService) { 
    comentariosServ.getTodos().subscribe(comentarios => {
      this.comentarios = comentarios;
      console.log(comentarios);
    });
  }
  ngOnInit(): void {
  }

}
