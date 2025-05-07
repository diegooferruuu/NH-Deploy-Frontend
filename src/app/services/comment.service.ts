import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'https://neurohealth-backend-deploy-baguceg4gbe4d4ac.canadacentral-01.azurewebsites.net//foro'

  constructor(private http: HttpClient) {}

  getComments(): Observable<any[]> {

    const apiUrlComments = `${this.apiUrl}/publicaciones`;

    return this.http.get<any[]>(apiUrlComments);
  }

  postComment(usuarioId: string, titulo: string, contenido: string, tema: string): Observable<any> {
      const body = {
        usuarioId,
        titulo,
        contenido,
        tema
      };
    
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const apiUrlComments = `${this.apiUrl}/publicaciones`;
    
      return this.http.post(apiUrlComments, body, { headers });
    }  
}
