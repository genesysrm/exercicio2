import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {UsuariosService} from '../../services/usuarios.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  id: number;
  usuario: any;
  constructor(private route: ActivatedRoute, private usuariosServ: UsuariosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']

      this.usuariosServ.getPersonagem(this.id).
      subscribe(usuario => this.usuario = usuario);
    });
  }
}
