import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Especialista {
  id: string;
  name: string;
  speciality: string;
  hours: string[];
  occupiedHours: string[];
  patients: string[];
}

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {
  private apiUrl = 'https://neurohealth-backend-deploy-baguceg4gbe4d4ac.canadacentral-01.azurewebsites.net//api/especialistas';

  constructor(private http: HttpClient) {}

  getAllEspecialistas(): Observable<Especialista[]> {
    return this.http.get<Especialista[]>(this.apiUrl);
  }

  getHorariosByEspecialistaId(id: string, fecha: string): Observable<{hours: string[], occupiedHours: string[]}> {
    return this.http.get<{hours: string[], occupiedHours: string[]}>(`${this.apiUrl}/${id}/horarios?fecha=${fecha}`);
  }
  
  ocuparHora(id: string, hour: string, fecha: string, userId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/ocupar-hora`, { hour, fecha, userId });
  }

  getPatientsByEspecialistaId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/patients`);
  }
    
}