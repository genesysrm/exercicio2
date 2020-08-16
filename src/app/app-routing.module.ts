import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { PostComponent } from './componentes/post/post.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent },
  {path: 'usuarios', component: UsuariosComponent },
  {path: 'usuarios/:id', component: UsuarioComponent },
  {path: 'comentarios', component: ComentariosComponent },
  {path: 'posts', component: PostComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})


export class AppRoutingModule  {

 }
