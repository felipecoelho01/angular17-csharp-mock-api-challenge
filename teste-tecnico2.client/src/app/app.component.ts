import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TablePaginadaComponent } from './Componentes/table-paginada/table-paginada.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TablePaginadaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
  }

}
