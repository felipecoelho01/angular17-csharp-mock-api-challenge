import { PessoaService } from '../../services/pessoas.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Pessoas } from '../../Interfaces/Pessoas';
import { filter } from 'rxjs';

@Component({
  selector: 'app-table-paginada',
  standalone: true,
  templateUrl: './table-paginada.component.html',
  styleUrls: ['./table-paginada.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class TablePaginadaComponent implements OnInit {
  dataSource = new MatTableDataSource<Pessoas>;
  pessoas: Pessoas[] = [];
  filteredPessoas: any[] = [];
  pageSize = 10;
  currentPage = 0;
  displayedColumns: string[] = ['cpf', 'nome', 'genero', 'endereco', 'idade', 'municipio', 'estado'];

  constructor(private pessoaService: PessoaService) {
    this.dataSource = new MatTableDataSource<Pessoas>();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.carregarPessoas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  carregarPessoas() {
    this.pessoaService.getPessoas().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }, error: (erro) => {
        console.log(erro);
      }
    });
  }

  filtrarPorNome(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filterPredicate = (data: Pessoas, filter: string) => {
      return data.nome.toLowerCase().includes(filter.toLowerCase());
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  formatCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
