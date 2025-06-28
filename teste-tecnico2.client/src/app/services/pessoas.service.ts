import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoas } from '../Interfaces/Pessoas';

@Injectable({ providedIn: 'root' })
export class PessoaService {
  private apiUrl = '/api/pessoas';

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(this.apiUrl);
  }
}
