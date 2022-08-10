import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(NovoUsuario: NovoUsuario) {
    return this.http.post('http://localost:3000/user/signup', NovoUsuario);
  }
}
