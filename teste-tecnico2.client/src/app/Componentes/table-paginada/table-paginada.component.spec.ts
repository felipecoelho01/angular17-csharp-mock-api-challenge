import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TablePaginadaComponent } from './table-paginada.component';
import { PessoaService } from '../../services/pessoas.service';

describe('TablePaginadaComponent', () => {
  let component: TablePaginadaComponent;
  let fixture: ComponentFixture<TablePaginadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TablePaginadaComponent],
      providers: [PessoaService]
    }).compileComponents();

    fixture = TestBed.createComponent(TablePaginadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
